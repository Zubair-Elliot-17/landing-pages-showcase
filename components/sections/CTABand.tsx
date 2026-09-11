import type { BrandPage } from "@/lib/brands";
import { getReadableTextColor } from "@/lib/color";

export function CTABand({ brand }: { brand: BrandPage }) {
  const headlineColor = getReadableTextColor(brand.palette.accent);

  return (
    <section
      className="px-6 sm:px-10 py-20 text-center"
      style={{ backgroundColor: brand.palette.accent }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 max-w-2xl mx-auto" style={{ color: headlineColor }}>
        {brand.ctaHeadline}
      </h2>
      <button
        className="min-h-11 px-10 py-3 rounded-full font-semibold bg-white transition-transform hover:scale-105"
        style={{ color: "#111111" }}
      >
        Get started
      </button>
    </section>
  );
}
