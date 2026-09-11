"use client";

import { motion } from "framer-motion";
import type { BrandPage } from "@/lib/brands";
import { useResolvedPalette } from "@/lib/theme";

export function FeatureGrid({ brand }: { brand: BrandPage }) {
  const palette = useResolvedPalette(brand);
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
        {brand.features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="cursor-default"
          >
            <motion.div
              className="w-10 h-10 rounded-full mb-5"
              style={{ backgroundColor: palette.accent }}
              whileHover={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              aria-hidden="true"
            />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="opacity-70 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
