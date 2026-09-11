import { ImageResponse } from "next/og";

export const alt = "10 Brands, 10 Aesthetics";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#FFFFFF",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700, display: "flex" }}>10 Brands, 10 Aesthetics</div>
        <div style={{ fontSize: 32, opacity: 0.7, marginTop: 24, display: "flex" }}>
          A speed test of building fast with AI
        </div>
      </div>
    ),
    { ...size }
  );
}
