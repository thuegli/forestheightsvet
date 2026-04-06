import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Forest Heights Veterinary Clinic — NW Portland Vet for Dogs & Cats";
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
          background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #0d3311 100%)",
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
          Locally Owned Since 1994
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Forest Heights
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Veterinary Clinic
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.85)",
              marginTop: 16,
            }}
          >
            NW Portland · Dogs & Cats · Fear-Free Care
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex" }}>forestheightsvet.com</div>
          <div style={{ display: "flex" }}>(503) 291-1757</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
