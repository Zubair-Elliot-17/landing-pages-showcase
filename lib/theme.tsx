"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { BrandPage, Palette } from "./brands";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
});

const STORAGE_KEY = "theme-preference";

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Starts "light" on both server and first client render to avoid a
  // hydration mismatch; the real preference (storage or OS) is applied
  // in an effect right after mount. This trades a brief flash for dark-
  // preferring visitors against not having to ship a blocking inline
  // script just for this — an accepted tradeoff for this project's scope.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") {
        // One-time sync from an external source (localStorage) that's
        // only readable client-side — there's no way to know this value
        // during the initial render, so a post-mount effect is the
        // correct tool here, not a derived-state anti-pattern.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(stored);
        return;
      }
    } catch {
      // localStorage blocked (private browsing, etc.) — fall through to
      // the OS preference for this session, just don't persist it.
    }
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    if (prefersDark) setTheme("dark");
  }, []);

  function toggleTheme() {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage blocked — theme still updates for this session, just
        // won't persist across reloads.
      }
      return next;
    });
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useResolvedPalette(brand: BrandPage): Palette {
  const { theme } = useTheme();
  return theme === "dark" ? brand.darkPalette : brand.palette;
}
