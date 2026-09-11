import Link from "next/link";
import type { BrandPage } from "@/lib/brands";
import { fontMap } from "@/lib/fonts";
import { HeroImage } from "@/components/HeroImage";

/**
 * Airbnb-style: warm, photography-led, generous rounded corners, a grid
 * of imagery doing most of the emotional work.
 */
export function PhotoGrid({ brand }: { brand: BrandPage }) {
  const font = fontMap[brand.fontKey];

  return (
    <main
      className={`${font.className} min-h-screen`}
      style={{ backgroundColor: brand.palette.bg, color: brand.palette.fg }}
    >
      <header className="p-8 flex items-center justify-between">
        <Link href="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity min-h-11 inline-flex items-center">
          ← All brands
        </Link>
        <span className="text-sm font-semibold min-h-11 inline-flex items-center">{brand.name}</span>
      </header>

      <section className="px-6 sm:px-10 pb-6">
        <h1 className="text-4xl sm:text-5xl font-semibold max-w-2xl mb-3">{brand.name}</h1>
        <p className="text-lg opacity-80 max-w-xl">{brand.tagline}</p>
      </section>

      <section className="px-6 sm:px-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative rounded-2xl overflow-hidden h-72 sm:col-span-2 sm:row-span-2 sm:h-[36rem]">
            <HeroImage src={brand.heroImage} alt={brand.heroImageAlt} className="object-cover" priority />
          </div>
          <div
            className="rounded-2xl h-36 sm:h-[17rem] flex items-end p-5"
            style={{ backgroundColor: brand.palette.accent, color: "#fff" }}
          >
            <span className="font-semibold">Explore stays</span>
          </div>
          <div
            className="rounded-2xl h-36 sm:h-[17rem] flex items-end p-5 border"
            style={{ borderColor: brand.palette.fg + "22" }}
          >
            <button className="min-h-11 px-6 rounded-full font-semibold text-white" style={{ backgroundColor: brand.palette.accent }}>
              Book now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
