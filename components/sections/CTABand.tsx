"use client";

import { motion } from "framer-motion";
import type { BrandPage } from "@/lib/brands";
import { getReadableTextColor } from "@/lib/color";
import { useResolvedPalette } from "@/lib/theme";

export function CTABand({ brand }: { brand: BrandPage }) {
  const palette = useResolvedPalette(brand);
  const headlineColor = getReadableTextColor(palette.accent);

  return (
    <section
      className="px-6 sm:px-10 py-20 text-center"
      style={{ backgroundColor: palette.accent }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8 max-w-2xl mx-auto"
        style={{ color: headlineColor }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {brand.ctaHeadline}
      </motion.h2>
      <motion.button
        className="min-h-11 px-10 py-3 rounded-full font-semibold bg-white shadow-lg"
        style={{ color: "#111111" }}
        whileHover={{ scale: 1.06, boxShadow: "0 12px 30px rgba(0,0,0,0.25)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Get started
      </motion.button>
    </section>
  );
}
