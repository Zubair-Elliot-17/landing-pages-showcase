"use client";

import { motion } from "framer-motion";
import type { BrandPage } from "@/lib/brands";

export function TestimonialBlock({ brand }: { brand: BrandPage }) {
  return (
    <motion.section
      className="px-6 sm:px-10 py-20 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="text-2xl sm:text-3xl font-medium leading-snug mb-6">
        &ldquo;{brand.testimonial.quote}&rdquo;
      </p>
      <p className="opacity-70">
        <span className="font-semibold">{brand.testimonial.name}</span> — {brand.testimonial.role}
      </p>
    </motion.section>
  );
}
