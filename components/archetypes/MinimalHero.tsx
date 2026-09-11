"use client";

import Link from "next/link";
import type { BrandPage } from "@/lib/brands";
import { fontMap } from "@/lib/fonts";
import { HeroImage } from "@/components/HeroImage";
import { MotionButton } from "@/components/MotionButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";
import { CTABand } from "@/components/sections/CTABand";
import { useResolvedPalette } from "@/lib/theme";

/**
 * Apple-style: huge type, generous whitespace, a single restrained hero
 * image — composed as a tight split-screen, not stacked text-then-image
 * with dead space between them — followed by feature/stats/testimonial/CTA
 * sections so the page reads as a complete landing page, not just a banner.
 */
export function MinimalHero({ brand }: { brand: BrandPage }) {
  const font = fontMap[brand.fontKey];
  const palette = useResolvedPalette(brand);

  return (
    <main
      className={`${font.className} transition-colors duration-500`}
      style={{ backgroundColor: palette.bg, color: palette.fg }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center px-8 sm:px-14 py-16 lg:w-1/2 lg:min-h-screen">
          <div className="flex items-center justify-between mb-10">
            <Link
              href="/"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity min-h-11 inline-flex items-center w-fit"
            >
              ← All brands
            </Link>
            <ThemeToggle />
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-6">{brand.name}</h1>
          <p className="text-xl sm:text-2xl opacity-80 max-w-md mb-10">{brand.tagline}</p>
          <MotionButton
            className="self-start min-h-11 px-8 py-3 rounded-full font-semibold text-white"
            style={{ backgroundColor: palette.accent }}
          >
            Learn more
          </MotionButton>
        </div>

        <div className="relative w-full h-[50vh] lg:h-auto lg:w-1/2 lg:min-h-screen overflow-hidden group">
          <HeroImage
            src={brand.heroImage}
            alt={brand.heroImageAlt}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
        </div>
      </div>

      <FeatureGrid brand={brand} />
      <StatsRow brand={brand} />
      <TestimonialBlock brand={brand} />
      <CTABand brand={brand} />
    </main>
  );
}
