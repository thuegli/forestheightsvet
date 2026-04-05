import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { verifyToken, getTokenFromCookies } from "@/lib/auth";
import {
  getFile,
  updateFile,
  listDirectory,
  uploadImage,
  createBranch,
  mergeBranch,
  deleteBranch,
} from "@/lib/github";

const VERCEL_PROJECT = process.env.VERCEL_PROJECT || "forestheightsvet";
const VERCEL_TEAM = process.env.VERCEL_TEAM || "thuegli";

function previewUrl(branch: string): string {
  const slug = branch.replace(/\//g, "-");
  return `https://${VERCEL_PROJECT}-git-${slug}-${VERCEL_TEAM}.vercel.app`;
}

const SYSTEM_PROMPT = `You are a helpful assistant for the practice manager of Forest Heights Veterinary Clinic in NW Portland, OR. You help them update their website safely using a preview-based workflow.

IMPORTANT WORKFLOW — you MUST follow these steps for every change:

1. READ the relevant file(s) first to understand the current state
2. EXPLAIN what you plan to change in plain language — show the specific text that will change (before → after). Do NOT make any changes yet.
3. ASK for confirmation: "Would you like me to create a preview with these changes?"
4. Only after they confirm, use the "commit_to_preview" tool to create a preview branch with the changes
5. Share the preview URL so they can review the actual site
6. WAIT for them to say "publish" or "reject"
7. If they say publish/approve/looks good/go live → use "publish_preview" to merge to production
8. If they say reject/discard/cancel → use "discard_preview" to delete the branch

NEVER commit directly to production. ALWAYS use the preview branch workflow.
NEVER skip the explanation step. The practice manager is not technical — explain changes in plain English.
If they ask to change multiple things, batch them into one preview branch.

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

When updating hours, remember to update ALL places hours appear:
- src/app/contact/page.tsx (contact page hours table)
- src/components/Footer.tsx (footer hours)
- src/app/layout.tsx (JSON-LD openingHoursSpecification)
- Meta descriptions that mention hours`;

const tools: Anthropic.Tool[] = [
  {
    name: "read_file",
    description:
      "Read a file from the website repository to understand its current state. Always do this before proposing changes.",
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
    name: "commit_to_preview",
    description:
      "Commit a file change to a preview branch (NOT production). Use this ONLY after explaining the change and getting confirmation from the user. Creates a preview deployment they can review before publishing.",
    input_schema: {
      type: "object" as const,
      properties: {
        branch_name: {
          type: "string",
          description:
            'Preview branch name (e.g. "preview/update-friday-hours"). Always use the "preview/" prefix.',
        },
        files: {
          type: "array",
          description: "Array of files to create/update on the preview branch",
          items: {
            type: "object",
            properties: {
              path: {
                type: "string",
                description: "File path relative to repo root",
              },
              content: {
                type: "string",
                description: "The full file content",
              },
            },
            required: ["path", "content"],
          },
        },
        message: {
          type: "string",
          description: "Git commit message describing the change",
        },
      },
      required: ["branch_name", "files", "message"],
    },
  },
  {
    name: "publish_preview",
    description:
      "Merge a preview branch into production, making the changes live. Only use this after the user has reviewed the preview and explicitly approved.",
    input_schema: {
      type: "object" as const,
      properties: {
        branch_name: {
          type: "string",
          description: "The preview branch name to merge and publish",
        },
      },
      required: ["branch_name"],
    },
  },
  {
    name: "discard_preview",
    description:
      "Delete a preview branch, discarding the proposed changes. Use when the user rejects the preview.",
    input_schema: {
      type: "object" as const,
      properties: {
        branch_name: {
          type: "string",
          description: "The preview branch name to delete",
        },
      },
      required: ["branch_name"],
    },
  },
  {
    name: "upload_image_to_preview",
    description:
      "Upload an image to a preview branch. The image must be provided as base64.",
    input_schema: {
      type: "object" as const,
      properties: {
        branch_name: {
          type: "string",
          description: "The preview branch name",
        },
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
      required: ["branch_name", "path", "image_base64", "message"],
    },
  },
];

interface FileChange {
  path: string;
  content: string;
}

async function handleToolCall(
  name: string,
  input: Record<string, unknown>
): Promise<string> {
  switch (name) {
    case "read_file": {
      const { content } = await getFile(input.path as string);
      return content;
    }
    case "list_directory": {
      const files = await listDirectory(input.path as string);
      return files.map((f) => f.name).join("\n");
    }
    case "commit_to_preview": {
      const branchName = input.branch_name as string;
      const files = input.files as FileChange[];
      const message = input.message as string;

      // Create the preview branch
      await createBranch(branchName);

      // Commit each file to the preview branch
      for (const file of files) {
        let sha: string | undefined;
        try {
          const existing = await getFile(file.path, branchName);
          sha = existing.sha;
        } catch {
          // File doesn't exist yet
        }
        await updateFile(file.path, file.content, message, sha, branchName);
      }

      const url = previewUrl(branchName);
      return `Preview branch "${branchName}" created with ${files.length} file(s) updated.\n\nPreview URL (will be ready in 1-2 minutes):\n${url}\n\nTell the user to review this URL and then say "publish" to go live or "reject" to discard.`;
    }
    case "publish_preview": {
      const branchName = input.branch_name as string;
      await mergeBranch(branchName);
      return `Branch "${branchName}" merged to production. Changes will be live in 1-2 minutes.`;
    }
    case "discard_preview": {
      const branchName = input.branch_name as string;
      await deleteBranch(branchName);
      return `Preview branch "${branchName}" deleted. No changes were made to the live site.`;
    }
    case "upload_image_to_preview": {
      const branchName = input.branch_name as string;
      await createBranch(branchName);
      await uploadImage(
        input.path as string,
        input.image_base64 as string,
        input.message as string
      );
      const url = previewUrl(branchName);
      return `Image uploaded to preview branch "${branchName}".\n\nPreview URL: ${url}`;
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
          block.input as Record<string, unknown>
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
