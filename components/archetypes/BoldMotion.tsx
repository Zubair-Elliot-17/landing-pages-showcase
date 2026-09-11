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
 * Nike-style: full-bleed imagery, oversized condensed type, high energy.
 * Hero-tier brands get the animated spotlight treatment on top, followed
 * by feature/stats/testimonial/CTA sections.
 */
export function BoldMotion({ brand }: { brand: BrandPage }) {
  const font = fontMap[brand.fontKey];

  return (
    <main className={font.className} style={{ backgroundColor: brand.palette.bg, color: brand.palette.fg }}>
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <HeroImage src={brand.heroImage} alt={brand.heroImageAlt} className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {brand.heroTier && <HeroSpotlight accent={brand.palette.accent} />}

        <div className="relative z-10 flex flex-col min-h-screen">
          <header className="p-8">
            <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors min-h-11 inline-flex items-center">
              ← All brands
            </Link>
          </header>

          <section className="flex-1 flex flex-col justify-end px-8 pb-20 gap-6 max-w-4xl">
            <h1 className="text-white text-7xl sm:text-8xl uppercase tracking-tight leading-[0.9]">
              {brand.name}
            </h1>
            <p className="text-white/90 text-xl sm:text-2xl max-w-lg">{brand.tagline}</p>
            <button
              className="self-start min-h-11 px-8 py-3 rounded-full font-semibold uppercase tracking-wide text-black transition-transform hover:scale-105"
              style={{ backgroundColor: brand.palette.accent }}
            >
              Shop now
            </button>
          </section>
        </div>
      </div>

      <FeatureGrid brand={brand} />
      <StatsRow brand={brand} />
      <TestimonialBlock brand={brand} />
      <CTABand brand={brand} />
    </main>
  );
}
