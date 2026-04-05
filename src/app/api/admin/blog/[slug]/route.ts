import { NextRequest, NextResponse } from "next/server";
import { verifyToken, getTokenFromCookies } from "@/lib/auth";
import { getFile, updateFile, deleteFile } from "@/lib/github";

// GET — read a draft or published post
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const token = getTokenFromCookies(req.headers.get("cookie"));
  if (!token || !(await verifyToken(token))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;

  // Try drafts first, then published
  for (const dir of ["content/blog/drafts", "content/blog/published"]) {
    try {
      const { content, sha } = await getFile(`${dir}/${slug}.json`);
      const post = JSON.parse(content);
      return NextResponse.json({
        slug,
        ...post,
        sha,
        status: dir.includes("drafts") ? "draft" : "published",
      });
    } catch {
      continue;
    }
  }

  return NextResponse.json({ error: "Post not found" }, { status: 404 });
}

// POST — approve a draft (move from drafts to published)
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const token = getTokenFromCookies(req.headers.get("cookie"));
  if (!token || !(await verifyToken(token))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const draftPath = `content/blog/drafts/${slug}.json`;

  // Read the draft
  let content: string;
  let sha: string;
  try {
    const result = await getFile(draftPath);
    content = result.content;
    sha = result.sha;
  } catch {
    return NextResponse.json({ error: "Draft not found" }, { status: 404 });
  }

  // Create in published
  await updateFile(
    `content/blog/published/${slug}.json`,
    content,
    `Publish blog post: ${slug}`
  );

  // Delete from drafts
  await deleteFile(draftPath, sha, `Remove draft: ${slug}`);

  return NextResponse.json({ ok: true, slug });
}

// DELETE — reject/delete a draft
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const token = getTokenFromCookies(req.headers.get("cookie"));
  if (!token || !(await verifyToken(token))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const draftPath = `content/blog/drafts/${slug}.json`;

  try {
    const { sha } = await getFile(draftPath);
    await deleteFile(draftPath, sha, `Reject draft: ${slug}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Draft not found" }, { status: 404 });
  }
}
