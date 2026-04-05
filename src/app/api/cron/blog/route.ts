import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { updateFile, listDirectory } from "@/lib/github";

// This endpoint is called by Vercel Cron every 2 weeks
// It generates a draft blog post for the practice manager to review

export async function GET(req: NextRequest) {
  // Verify cron secret (Vercel sets this header for cron jobs)
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get existing post slugs to avoid duplicates
  const existingTitles: string[] = [];
  for (const dir of ["content/blog/published", "content/blog/drafts"]) {
    try {
      const files = await listDirectory(dir);
      existingTitles.push(
        ...files.map((f) => f.name.replace(/\.json$/, "").replace(/-/g, " "))
      );
    } catch {
      // Directory may not exist
    }
  }

  const currentMonth = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const client = new Anthropic();

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2048,
    system: `You are a veterinary content writer for Forest Heights Veterinary Clinic, a locally owned dog and cat hospital in NW Portland, Oregon (Forest Heights neighborhood, 97225).

Write a blog post that is:
- 400–700 words
- Helpful, warm, and professional in tone
- Naturally includes 1–2 local SEO keywords (e.g., "Portland veterinarian", "NW Portland pet care")
- Mentions nearby neighborhoods where appropriate (Forest Heights, West Slope, Bethany, Cedar Mill, Beaverton)
- Ends with a call to action mentioning the clinic phone number (503) 291-1757
- Uses markdown headers (## ) to break up sections

Choose a seasonally relevant topic for ${currentMonth} in Portland, Oregon.

Return ONLY a JSON object (no markdown fencing):
{
  "title": "Post Title",
  "description": "150-160 char meta description",
  "category": "Category",
  "content": "Full markdown content"
}`,
    messages: [
      {
        role: "user",
        content: `Existing posts (avoid these topics):\n${existingTitles.join("\n") || "None"}\n\nWrite a new blog post.`,
      },
    ],
  });

  const text = response.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");

  let post: {
    title: string;
    description: string;
    category: string;
    content: string;
  };
  try {
    post = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Parse failed", raw: text }, { status: 500 });
  }

  const slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const date = new Date().toISOString().split("T")[0];

  await updateFile(
    `content/blog/drafts/${slug}.json`,
    JSON.stringify({ title: post.title, date, description: post.description, category: post.category, content: post.content }, null, 2),
    `Auto-draft blog post: ${post.title}`
  );

  return NextResponse.json({ ok: true, slug, title: post.title });
}
