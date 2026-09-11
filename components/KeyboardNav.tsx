"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface KeyboardNavProps {
  prevSlug: string;
  nextSlug: string;
}

/**
 * Left/right arrow keys cycle through the config-ordered brand list.
 * Guarded against firing while an interactive element has focus, and
 * debounced so a rapid burst of key presses can't fire overlapping
 * navigations before the previous one settles.
 */
export function KeyboardNav({ prevSlug, nextSlug }: KeyboardNavProps) {
  const router = useRouter();
  const navigating = useRef(false);

  useEffect(() => {
    function isInteractiveElementFocused() {
      const active = document.activeElement;
      if (!active) return false;
      const tag = active.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
      if ((active as HTMLElement).isContentEditable) return true;
      return false;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      if (isInteractiveElementFocused()) return;
      if (navigating.current) return;

      navigating.current = true;
      const target = event.key === "ArrowLeft" ? prevSlug : nextSlug;
      router.push(`/${target}`);

      // Release the lock shortly after — long enough to absorb a burst of
      // repeat keydown events, short enough not to feel unresponsive.
      window.setTimeout(() => {
        navigating.current = false;
      }, 400);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlug, nextSlug, router]);

  return null;
}
