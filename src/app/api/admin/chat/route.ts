import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { verifyToken, getTokenFromCookies } from "@/lib/auth";
import { getFile, updateFile, listDirectory, uploadImage } from "@/lib/github";

const SYSTEM_PROMPT = `You are a helpful assistant for the practice manager of Forest Heights Veterinary Clinic in NW Portland, OR. You help them update their website by reading and editing files via the GitHub API.

Site structure:
- src/app/page.tsx — Homepage
- src/app/about/page.tsx — About page
- src/app/staff/page.tsx — Staff page (staff photos and bios)
- src/app/services/page.tsx — Services overview
- src/app/wellness/page.tsx, dentistry/page.tsx, surgery/page.tsx, diagnostics/page.tsx, nutrition/page.tsx, pharmacy/page.tsx, euthanasia/page.tsx, emergency/page.tsx — Individual service pages
- src/app/contact/page.tsx — Contact page (hours, address, phone)
- src/app/blog/posts.ts — Blog system (reads from content/blog/published/*.json)
- src/components/Header.tsx — Navigation header
- src/components/Footer.tsx — Footer with hours, address, social links
- src/app/layout.tsx — Root layout with JSON-LD structured data
- public/images/ — All images (staff photos, service photos, logos)

Key details:
- Address: 7365 SW Barnes Rd, Ste. H, Portland, OR 97225
- Phone: (503) 291-1757
- Hours: Mon-Fri 8:00 AM - 6:00 PM, Sat-Sun Closed
- Brand colors: forest green primary, teal accent only
- Uses Next.js 14, Tailwind CSS, TypeScript

When the user asks you to make a change:
1. Read the relevant file first to understand the current state
2. Make the edit and commit with a clear message
3. Explain what you changed

After committing, the site auto-deploys in 1-2 minutes.

For staff photo updates, images go in public/images/ with a name like staff-{name}.jpg. Then update the image path in src/app/staff/page.tsx.`;

const tools: Anthropic.Tool[] = [
  {
    name: "read_file",
    description: "Read a file from the website repository",
    input_schema: {
      type: "object" as const,
      properties: {
        path: {
          type: "string",
          description:
            "File path relative to repo root (e.g. src/app/contact/page.tsx)",
        },
      },
      required: ["path"],
    },
  },
  {
    name: "update_file",
    description: "Create or update a file in the repository. This commits the change and triggers a deploy.",
    input_schema: {
      type: "object" as const,
      properties: {
        path: {
          type: "string",
          description: "File path relative to repo root",
        },
        content: {
          type: "string",
          description: "The full file content to write",
        },
        message: {
          type: "string",
          description: "Git commit message describing the change",
        },
      },
      required: ["path", "content", "message"],
    },
  },
  {
    name: "list_directory",
    description: "List files in a directory of the repository",
    input_schema: {
      type: "object" as const,
      properties: {
        path: {
          type: "string",
          description:
            "Directory path relative to repo root (e.g. public/images)",
        },
      },
      required: ["path"],
    },
  },
  {
    name: "upload_image",
    description:
      "Upload an image to the repository. The image must be provided as base64.",
    input_schema: {
      type: "object" as const,
      properties: {
        path: {
          type: "string",
          description:
            "File path relative to repo root (e.g. public/images/staff-jane.jpg)",
        },
        image_base64: {
          type: "string",
          description: "Base64-encoded image data",
        },
        message: {
          type: "string",
          description: "Git commit message",
        },
      },
      required: ["path", "image_base64", "message"],
    },
  },
];

async function handleToolCall(
  name: string,
  input: Record<string, string>
): Promise<string> {
  switch (name) {
    case "read_file": {
      const { content } = await getFile(input.path);
      return content;
    }
    case "update_file": {
      let sha: string | undefined;
      try {
        const existing = await getFile(input.path);
        sha = existing.sha;
      } catch {
        // File doesn't exist yet, create new
      }
      await updateFile(input.path, input.content, input.message, sha);
      return `File ${input.path} updated and committed.`;
    }
    case "list_directory": {
      const files = await listDirectory(input.path);
      return files.map((f) => f.name).join("\n");
    }
    case "upload_image": {
      await uploadImage(input.path, input.image_base64, input.message);
      return `Image uploaded to ${input.path}.`;
    }
    default:
      return `Unknown tool: ${name}`;
  }
}

export async function POST(req: NextRequest) {
  const token = getTokenFromCookies(req.headers.get("cookie"));
  if (!token || !(await verifyToken(token))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { messages } = await req.json();

  const client = new Anthropic();

  let currentMessages = [...messages];
  let response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    tools,
    messages: currentMessages,
  });

  // Handle tool use loop
  while (response.stop_reason === "tool_use") {
    const toolBlocks = response.content.filter(
      (b): b is Anthropic.ToolUseBlock => b.type === "tool_use"
    );

    const toolResults: Anthropic.ToolResultBlockParam[] = [];
    for (const block of toolBlocks) {
      try {
        const result = await handleToolCall(
          block.name,
          block.input as Record<string, string>
        );
        toolResults.push({
          type: "tool_result",
          tool_use_id: block.id,
          content: result,
        });
      } catch (err) {
        toolResults.push({
          type: "tool_result",
          tool_use_id: block.id,
          content: `Error: ${err instanceof Error ? err.message : String(err)}`,
          is_error: true,
        });
      }
    }

    currentMessages = [
      ...currentMessages,
      { role: "assistant" as const, content: response.content },
      { role: "user" as const, content: toolResults },
    ];

    response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      tools,
      messages: currentMessages,
    });
  }

  // Extract text response
  const text = response.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");

  // Return full message history for client to maintain
  return NextResponse.json({
    reply: text,
    messages: [
      ...currentMessages,
      { role: "assistant", content: response.content },
    ],
  });
}
