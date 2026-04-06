import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pet Emergency Care — Forest Heights Veterinary Clinic, NW Portland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #ca2913 0%, #ec4a34 60%, #1b5e20 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 800,
            color: "#ffd2cc",
          }}
        >
          Pet Emergency
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Call First.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            We&rsquo;ll Be Ready.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.9)",
              marginTop: 16,
            }}
          >
            Same-day urgent care during clinic hours
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          <div style={{ display: "flex" }}>Forest Heights Vet · NW Portland</div>
          <div style={{ display: "flex" }}>(503) 291-1757</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
