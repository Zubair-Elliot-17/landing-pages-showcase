"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BrandPage } from "@/lib/brands";
import { fontMap } from "@/lib/fonts";
import { HeroImage } from "@/components/HeroImage";

export function GalleryCard({ brand }: { brand: BrandPage }) {
  const font = fontMap[brand.fontKey];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={`/${brand.slug}`}
        className="group relative block rounded-2xl overflow-hidden aspect-[4/5] min-h-11 shadow-md transition-shadow duration-300 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ backgroundColor: brand.palette.bg }}
      >
        <HeroImage
          src={brand.heroImage}
          alt={brand.heroImageAlt}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/80" />
        <div
          className="absolute inset-0 rounded-2xl ring-2 ring-inset opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ ["--tw-ring-color" as string]: brand.palette.accent }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <p className="text-xs uppercase tracking-wide opacity-70 mb-1">{brand.brandInspiration}</p>
          <h2 className={`${font.className} text-2xl font-bold`}>{brand.name}</h2>
          <p className="text-sm opacity-90 mt-1 line-clamp-1 max-h-0 group-hover:max-h-10 overflow-hidden transition-[max-height] duration-300">
            {brand.tagline}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
