"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Plain fade/slide on every page (gallery -> detail, direct link, or
 * detail -> detail via keyboard nav). No shared-element morph: a true
 * layoutId transition across a real App Router route change was judged
 * too fragile for the time budget during /plan-ceo-review.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
