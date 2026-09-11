"use client";

import { motion } from "framer-motion";
import type { BrandPage } from "@/lib/brands";
import { useResolvedPalette } from "@/lib/theme";

function Stars({ rating, accent }: { rating: number; accent: string }) {
  return (
    <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < rating ? accent : undefined }} className={i < rating ? "" : "opacity-20"}>
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialBlock({ brand }: { brand: BrandPage }) {
  const palette = useResolvedPalette(brand);

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-20 max-w-6xl mx-auto">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        What people are saying
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {brand.testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="rounded-2xl p-6 border flex flex-col"
            style={{ borderColor: palette.fg + "1a" }}
          >
            <Stars rating={testimonial.rating} accent={palette.accent} />
            <p className="text-base leading-relaxed mb-6 flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="text-sm opacity-70">
              <span className="font-semibold opacity-100">{testimonial.name}</span> — {testimonial.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
