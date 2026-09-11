"use client";

import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

export function MotionButton({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.button
      className={className}
      style={style}
      whileHover={{ scale: 1.06, filter: "brightness(1.08)" }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
