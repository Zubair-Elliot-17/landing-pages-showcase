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
 * Airbnb-style: warm, photography-led, generous rounded corners. Both the
 * main hero shot and the secondary panel carry real imagery — no flat
 * color blocks standing in for content.
 */
export function PhotoGrid({ brand }: { brand: BrandPage }) {
  const font = fontMap[brand.fontKey];
  const palette = useResolvedPalette(brand);
  const secondaryImage = brand.secondaryImage ?? brand.heroImage;
  const secondaryImageAlt = brand.secondaryImageAlt ?? brand.heroImageAlt;

  return (
    <main
      className={`${font.className} min-h-screen transition-colors duration-500`}
      style={{ backgroundColor: palette.bg, color: palette.fg }}
    >
      <header className="p-8 flex items-center justify-between">
        <Link href="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity min-h-11 inline-flex items-center">
          ← All brands
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold min-h-11 inline-flex items-center">{brand.name}</span>
          <ThemeToggle />
        </div>
      </header>

      <section className="px-6 sm:px-10 pb-6">
        <h1 className="text-4xl sm:text-5xl font-semibold max-w-2xl mb-3">{brand.name}</h1>
        <p className="text-lg opacity-80 max-w-xl">{brand.tagline}</p>
      </section>

      <section className="px-6 sm:px-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative rounded-2xl overflow-hidden h-72 sm:col-span-2 sm:row-span-2 sm:h-[36rem] group">
            <HeroImage
              src={brand.heroImage}
              alt={brand.heroImageAlt}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
          </div>

          <div className="relative rounded-2xl overflow-hidden h-56 sm:h-[17rem] group">
            <HeroImage
              src={secondaryImage}
              alt={secondaryImageAlt}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute bottom-5 left-5 text-white font-semibold">Explore stays</span>
          </div>

          <div
            className="rounded-2xl h-40 sm:h-[17rem] flex flex-col justify-between p-5 border transition-transform duration-300 hover:-translate-y-1"
            style={{
              borderColor: palette.fg + "22",
              background: `linear-gradient(160deg, ${palette.accent}18, transparent 70%)`,
            }}
          >
            <p className="text-sm opacity-70 max-w-[16rem]">Real places, hosted by real people.</p>
            <MotionButton
              className="self-start min-h-11 px-6 rounded-full font-semibold text-white"
              style={{ backgroundColor: palette.accent }}
            >
              Book now
            </MotionButton>
          </div>
        </div>
      </section>

      <FeatureGrid brand={brand} />
      <StatsRow brand={brand} />
      <TestimonialBlock brand={brand} />
      <CTABand brand={brand} />
    </main>
  );
}
