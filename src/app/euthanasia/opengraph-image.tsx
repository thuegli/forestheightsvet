import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Compassionate End-of-Life Care for Pets — Forest Heights Veterinary Clinic";
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
          background: "linear-gradient(135deg, #0d3311 0%, #1b5e20 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#b9e4f3",
            fontWeight: 700,
          }}
        >
          Compassionate End-of-Life Care
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            A peaceful goodbye,
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            with the team you trust.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.8)",
              marginTop: 16,
            }}
          >
            Quiet rooms, gentle sedation, and time to say goodbye
          </div>
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
          <div style={{ display: "flex" }}>Forest Heights Veterinary Clinic</div>
          <div style={{ display: "flex" }}>NW Portland · (503) 291-1757</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
