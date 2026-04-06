import { ImageResponse } from "next/og";
import posts from "../posts";

export const alt = "Forest Heights Veterinary Clinic Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  return [
    {
      id: "default",
      alt: post ? `${post.title} — Forest Heights Veterinary Clinic` : alt,
      contentType,
      size,
    },
  ];
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  const title = post?.title ?? "Forest Heights Veterinary Clinic Blog";
  const author = post?.author ?? "Forest Heights Veterinary Clinic";
  const category = post?.category ?? "Pet Health";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 70%, #0d3311 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#b9e4f3",
          }}
        >
          <div style={{ display: "flex" }}>Forest Heights Vet Blog</div>
          <div style={{ display: "flex", color: "rgba(255,255,255,0.4)" }}>·</div>
          <div style={{ display: "flex" }}>{category}</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 60 : 72,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -1.5,
            paddingRight: 40,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            fontWeight: 600,
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <div style={{ display: "flex" }}>By {author}</div>
          <div style={{ display: "flex" }}>forestheightsvet.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
