import Link from "next/link";
import type { BrandPage } from "@/lib/brands";
import { fontMap } from "@/lib/fonts";
import { HeroImage } from "@/components/HeroImage";

/**
 * Apple-style: huge type, generous whitespace, a single restrained hero
 * image, minimal chrome. Density is low on purpose.
 */
export function MinimalHero({ brand }: { brand: BrandPage }) {
  const font = fontMap[brand.fontKey];

  return (
    <main
      className={`${font.className} min-h-screen flex flex-col`}
      style={{ backgroundColor: brand.palette.bg, color: brand.palette.fg }}
    >
      <header className="p-8">
        <Link href="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity min-h-11 inline-flex items-center">
          ← All brands
        </Link>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-8 max-w-3xl mx-auto">
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">{brand.name}</h1>
        <p className="text-xl sm:text-2xl opacity-80 max-w-xl">{brand.tagline}</p>
        <button
          className="min-h-11 px-8 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: brand.palette.accent }}
        >
          Learn more
        </button>
      </section>

      <div className="relative w-full h-[45vh] min-h-[280px]">
        <HeroImage src={brand.heroImage} alt={brand.heroImageAlt} className="object-cover" />
      </div>
    </main>
  );
}
