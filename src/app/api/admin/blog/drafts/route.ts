import { NextRequest, NextResponse } from "next/server";
import { verifyToken, getTokenFromCookies } from "@/lib/auth";
import { listDirectory, getFile } from "@/lib/github";

export async function GET(req: NextRequest) {
  const token = getTokenFromCookies(req.headers.get("cookie"));
  if (!token || !(await verifyToken(token))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const files = await listDirectory("content/blog/drafts");
    const drafts = await Promise.all(
      files
        .filter((f) => f.name.endsWith(".json"))
        .map(async (f) => {
          const { content } = await getFile(f.path);
          const post = JSON.parse(content);
          return {
            slug: f.name.replace(/\.json$/, ""),
            title: post.title,
            date: post.date,
            description: post.description,
            category: post.category,
          };
        })
    );

    return NextResponse.json(drafts);
  } catch {
    // Directory might not exist or be empty
    return NextResponse.json([]);
  }
}
