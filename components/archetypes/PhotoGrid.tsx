import Link from "next/link";
import type { BrandPage } from "@/lib/brands";
import { fontMap } from "@/lib/fonts";
import { HeroImage } from "@/components/HeroImage";

/**
 * Airbnb-style: warm, photography-led, generous rounded corners. Both the
 * main hero shot and the secondary panel carry real imagery — no flat
 * color blocks standing in for content.
 */
export function PhotoGrid({ brand }: { brand: BrandPage }) {
  const font = fontMap[brand.fontKey];
  const secondaryImage = brand.secondaryImage ?? brand.heroImage;
  const secondaryImageAlt = brand.secondaryImageAlt ?? brand.heroImageAlt;

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

          <div className="relative rounded-2xl overflow-hidden h-56 sm:h-[17rem]">
            <HeroImage src={secondaryImage} alt={secondaryImageAlt} className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute bottom-5 left-5 text-white font-semibold">Explore stays</span>
          </div>

          <div
            className="rounded-2xl h-40 sm:h-[17rem] flex flex-col justify-between p-5 border"
            style={{
              borderColor: brand.palette.fg + "22",
              background: `linear-gradient(160deg, ${brand.palette.accent}18, transparent 70%)`,
            }}
          >
            <p className="text-sm opacity-70 max-w-[16rem]">Real places, hosted by real people.</p>
            <button
              className="self-start min-h-11 px-6 rounded-full font-semibold text-white"
              style={{ backgroundColor: brand.palette.accent }}
            >
              Book now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
