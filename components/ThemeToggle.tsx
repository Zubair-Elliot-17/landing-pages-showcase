"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme";

export function ThemeToggle({ textColorClass = "" }: { textColorClass?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`min-w-11 min-h-11 inline-flex items-center justify-center rounded-full text-lg opacity-70 hover:opacity-100 transition-opacity ${textColorClass}`}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </motion.button>
  );
}
