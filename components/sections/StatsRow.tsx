"use client";

import { motion } from "framer-motion";
import type { BrandPage } from "@/lib/brands";
import { useResolvedPalette } from "@/lib/theme";

export function StatsRow({ brand }: { brand: BrandPage }) {
  const palette = useResolvedPalette(brand);
  return (
    <section
      className="py-16 border-t border-b"
      style={{ borderColor: palette.fg + "1a" }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {brand.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ scale: 1.08 }}
            className="cursor-default"
          >
            <div className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: palette.accent }}>
              {stat.value}
            </div>
            <p className="text-sm opacity-70 uppercase tracking-wide">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
