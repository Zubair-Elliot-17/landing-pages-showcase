import { ImageResponse } from "next/og";
import { BRANDS, getBrand } from "@/lib/brands";

export const alt = "Brand social preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return BRANDS.map((brand) => ({ slug: brand.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getBrand(slug);

  // Always renders the light palette regardless of the viewer's dark-mode
  // preference, so there's only ever one OG image per brand to generate
  // and cache — decided in /plan-ceo-review to avoid doubling image count.
  const bg = brand?.palette.bg ?? "#111111";
  const fg = brand?.palette.fg ?? "#FFFFFF";
  const accent = brand?.palette.accent ?? "#888888";
  const name = brand?.name ?? "Brand";
  const tagline = brand?.tagline ?? "";

  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 80,
            backgroundColor: bg,
            color: fg,
          }}
        >
          <div style={{ width: 64, height: 8, borderRadius: 4, backgroundColor: accent, marginBottom: 40 }} />
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05, display: "flex" }}>{name}</div>
          <div style={{ fontSize: 36, opacity: 0.75, marginTop: 24, display: "flex", maxWidth: 900 }}>
            {tagline}
          </div>
        </div>
      ),
      { ...size }
    );
  } catch {
    // Static fallback: a flat brand-colored card with just the name, in
    // case font loading or rendering fails in the edge runtime.
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: accent,
            color: "#FFFFFF",
            fontSize: 72,
            fontWeight: 700,
          }}
        >
          {name}
        </div>
      ),
      { ...size }
    );
  }
}
