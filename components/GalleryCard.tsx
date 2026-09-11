import Link from "next/link";
import type { BrandPage } from "@/lib/brands";
import { fontMap } from "@/lib/fonts";
import { HeroImage } from "@/components/HeroImage";

export function GalleryCard({ brand }: { brand: BrandPage }) {
  const font = fontMap[brand.fontKey];

  return (
    <Link
      href={`/${brand.slug}`}
      className="group relative block rounded-2xl overflow-hidden aspect-[4/5] min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{ backgroundColor: brand.palette.bg }}
    >
      <HeroImage
        src={brand.heroImage}
        alt={brand.heroImageAlt}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <p className="text-xs uppercase tracking-wide opacity-70 mb-1">{brand.brandInspiration}</p>
        <h2 className={`${font.className} text-2xl font-bold`}>{brand.name}</h2>
        <p className="text-sm opacity-90 mt-1 line-clamp-1">{brand.tagline}</p>
      </div>
    </Link>
  );
}
