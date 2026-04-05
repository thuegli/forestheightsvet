import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { verifyToken, getTokenFromCookies } from "@/lib/auth";
import { updateFile, listDirectory } from "@/lib/github";

const GENERATE_PROMPT = `You are a veterinary content writer for Forest Heights Veterinary Clinic, a locally owned dog and cat hospital in NW Portland, Oregon (Forest Heights neighborhood, 97225).

Write a blog post that is:
- 400–700 words
- Helpful, warm, and professional in tone
- Naturally includes 1–2 local SEO keywords (e.g., "Portland veterinarian", "NW Portland pet care", "vet clinic Portland OR")
- Mentions nearby neighborhoods where appropriate (Forest Heights, West Slope, Bethany, Cedar Mill, Beaverton)
- Ends with a call to action mentioning the clinic phone number (503) 291-1757
- Uses markdown headers (## ) to break up sections
- Written for pet owners, not veterinary professionals

Choose a topic that is:
- Seasonally relevant for the current time of year in Portland, Oregon
- Not already covered by existing posts (listed below)
- Useful and practical for dog and cat owners

Return ONLY a JSON object with these fields (no markdown fencing, no extra text):
{
  "title": "Post Title Here",
  "description": "150-160 character meta description for SEO",
  "category": "Category Name",
  "content": "Full post content with ## markdown headers"
}`;

export async function POST(req: NextRequest) {
  const token = getTokenFromCookies(req.headers.get("cookie"));
  if (!token || !(await verifyToken(token))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get existing post titles to avoid duplicates
  let existingTitles: string[] = [];
  try {
    const published = await listDirectory("content/blog/published");
    existingTitles = published.map((f) =>
      f.name.replace(/\.json$/, "").replace(/-/g, " ")
    );
  } catch {
    // Directory might be empty
  }

  let draftTitles: string[] = [];
  try {
    const drafts = await listDirectory("content/blog/drafts");
    draftTitles = drafts.map((f) =>
      f.name.replace(/\.json$/, "").replace(/-/g, " ")
    );
  } catch {
    // Directory might be empty
  }

  const client = new Anthropic();

  const currentMonth = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2048,
    messages: [
      {
        role: "user",
        content: `Current month: ${currentMonth}

Existing published posts (avoid these topics):
${existingTitles.join("\n") || "None yet"}

Existing draft posts (avoid these topics too):
${draftTitles.join("\n") || "None"}

Write a new blog post following the guidelines. Return ONLY the JSON object.`,
      },
    ],
    system: GENERATE_PROMPT,
  });

  const text = response.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");

  let post: { title: string; description: string; category: string; content: string };
  try {
    post = JSON.parse(text);
  } catch {
    return NextResponse.json(
      { error: "Failed to parse generated post", raw: text },
      { status: 500 }
    );
  }

  // Create slug from title
  const slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const date = new Date().toISOString().split("T")[0];

  const fileContent = JSON.stringify(
    { title: post.title, date, description: post.description, category: post.category, content: post.content },
    null,
    2
  );

  await updateFile(
    `content/blog/drafts/${slug}.json`,
    fileContent,
    `Draft blog post: ${post.title}`
  );

  return NextResponse.json({
    slug,
    title: post.title,
    description: post.description,
    category: post.category,
    date,
  });
}
