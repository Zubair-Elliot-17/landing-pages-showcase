import Link from "next/link";
import type { BrandPage } from "@/lib/brands";
import { fontMap } from "@/lib/fonts";
import { HeroImage } from "@/components/HeroImage";

/**
 * Apple-style: huge type, generous whitespace, a single restrained hero
 * image — but composed as a tight split-screen, not stacked text-then-image
 * with dead space between them.
 */
export function MinimalHero({ brand }: { brand: BrandPage }) {
  const font = fontMap[brand.fontKey];

  return (
    <main
      className={`${font.className} min-h-screen flex flex-col lg:flex-row`}
      style={{ backgroundColor: brand.palette.bg, color: brand.palette.fg }}
    >
      <div className="flex flex-col justify-center px-8 sm:px-14 py-16 lg:w-1/2 lg:min-h-screen">
        <Link
          href="/"
          className="text-sm opacity-70 hover:opacity-100 transition-opacity min-h-11 inline-flex items-center w-fit mb-10"
        >
          ← All brands
        </Link>
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-6">{brand.name}</h1>
        <p className="text-xl sm:text-2xl opacity-80 max-w-md mb-10">{brand.tagline}</p>
        <button
          className="self-start min-h-11 px-8 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: brand.palette.accent }}
        >
          Learn more
        </button>
      </div>

      <div className="relative w-full h-[50vh] lg:h-auto lg:w-1/2 lg:min-h-screen">
        <HeroImage src={brand.heroImage} alt={brand.heroImageAlt} className="object-cover" priority />
      </div>
    </main>
  );
}
