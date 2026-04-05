import { NextRequest, NextResponse } from "next/server";
import { verifyToken, getTokenFromCookies } from "@/lib/auth";
import { uploadImage } from "@/lib/github";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  const token = getTokenFromCookies(req.headers.get("cookie"));
  if (!token || !(await verifyToken(token))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const filename = formData.get("filename") as string | null;

  if (!file || !filename) {
    return NextResponse.json(
      { error: "File and filename are required" },
      { status: 400 }
    );
  }

  // Read file buffer
  const buffer = Buffer.from(await file.arrayBuffer());

  // Resize with sharp — staff photos to 800px wide, others to 1600px
  const isStaffPhoto = filename.startsWith("staff-");
  const maxWidth = isStaffPhoto ? 800 : 1600;

  const resized = await sharp(buffer)
    .resize(maxWidth, undefined, { withoutEnlargement: true })
    .jpeg({ quality: 80 })
    .toBuffer();

  const base64 = resized.toString("base64");
  const sanitizedName = filename
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, "-")
    .replace(/\.(png|webp|heic|gif)$/i, ".jpg");

  const path = `public/images/${sanitizedName}`;

  await uploadImage(path, base64, `Upload image: ${sanitizedName}`);

  return NextResponse.json({ ok: true, path: `/images/${sanitizedName}` });
}
