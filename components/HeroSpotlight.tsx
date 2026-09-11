"use client";

import { motion } from "framer-motion";
import { useState, type MouseEvent } from "react";

/**
 * Lightweight stand-in for an Aceternity-style animated hero effect
 * (spotlight + floating glow orbs) built with Framer Motion instead of a
 * real Three.js dependency — same "showpiece" visual payoff, without the
 * ~600KB bundle or the SSR/hydration risk a real WebGL canvas would need
 * `dynamic(..., { ssr: false })` to manage. Reserved for the 1-2
 * hero-tier pages only.
 */
export function HeroSpotlight({ accent }: { accent: string }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setPos({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, ${accent}33, transparent 70%)`,
        }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{ background: accent, width: 420, height: 420 }}
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl opacity-20"
        style={{ background: accent, width: 300, height: 300, right: 0, bottom: 0 }}
        animate={{ x: [0, -40, 30, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
