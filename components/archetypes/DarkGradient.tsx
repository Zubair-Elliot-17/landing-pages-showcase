import Link from "next/link";
import type { BrandPage } from "@/lib/brands";
import { fontMap } from "@/lib/fonts";
import { HeroImage } from "@/components/HeroImage";
import { HeroSpotlight } from "@/components/HeroSpotlight";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";
import { CTABand } from "@/components/sections/CTABand";

/**
 * Spotify-style: dark, gradient-heavy, editorial serif or mono contrast,
 * album-art-style imagery in a soft-edged panel rather than full-bleed.
 */
export function DarkGradient({ brand }: { brand: BrandPage }) {
  const font = fontMap[brand.fontKey];

  return (
    <main
      className={`${font.className} min-h-screen relative overflow-hidden`}
      style={{ backgroundColor: brand.palette.bg, color: brand.palette.fg }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${brand.palette.accent}22 0%, ${brand.palette.bg} 60%)`,
        }}
      />

      {brand.heroTier && <HeroSpotlight accent={brand.palette.accent} />}

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="p-8">
          <Link href="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity min-h-11 inline-flex items-center">
            ← All brands
          </Link>
        </header>

        <section className="flex-1 flex flex-col sm:flex-row items-center gap-10 px-8 sm:px-16 py-10">
          <div className="relative w-64 h-64 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shrink-0 shadow-2xl">
            <HeroImage src={brand.heroImage} alt={brand.heroImageAlt} className="object-cover" priority />
          </div>
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold mb-4">{brand.name}</h1>
            <p className="text-xl opacity-80 mb-8">{brand.tagline}</p>
            <button
              className="min-h-11 px-8 py-3 rounded-full font-semibold text-black transition-transform hover:scale-105"
              style={{ backgroundColor: brand.palette.accent }}
            >
              Start listening
            </button>
          </div>
        </section>
      </div>

      <div className="relative z-10">
        <FeatureGrid brand={brand} />
        <StatsRow brand={brand} />
        <TestimonialBlock brand={brand} />
        <CTABand brand={brand} />
      </div>
    </main>
  );
}
