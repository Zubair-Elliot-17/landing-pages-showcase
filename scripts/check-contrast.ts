/**
 * Automated WCAG AA contrast check for every brand's palette (light and
 * dark). Checks fg-on-bg (body text, needs 4.5:1) and accent-on-bg
 * (buttons/stat numbers, treated as large/bold text, needs 3:1).
 *
 * Run: npx tsx scripts/check-contrast.ts
 */
import { BRANDS, type Palette } from "../lib/brands";

function luminance(hex: string): number {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  const lin = (v: number) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function contrastRatio(hexA: string, hexB: string): number {
  const l1 = luminance(hexA);
  const l2 = luminance(hexB);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

let failures = 0;

function checkPalette(brandName: string, mode: string, palette: Palette) {
  const fgBg = contrastRatio(palette.fg, palette.bg);
  const accentBg = contrastRatio(palette.accent, palette.bg);

  const fgOk = fgBg >= 4.5;
  const accentOk = accentBg >= 3.0;

  if (!fgOk) {
    failures++;
    console.log(`FAIL  ${brandName} (${mode}): fg/bg contrast ${fgBg.toFixed(2)}:1 — needs 4.5:1`);
  }
  if (!accentOk) {
    failures++;
    console.log(`FAIL  ${brandName} (${mode}): accent/bg contrast ${accentBg.toFixed(2)}:1 — needs 3:1`);
  }
  if (fgOk && accentOk) {
    console.log(`PASS  ${brandName} (${mode}): fg/bg ${fgBg.toFixed(2)}:1, accent/bg ${accentBg.toFixed(2)}:1`);
  }
}

for (const brand of BRANDS) {
  checkPalette(brand.name, "light", brand.palette);
  if (brand.darkPalette) {
    checkPalette(brand.name, "dark", brand.darkPalette);
  }
}

console.log(`\n${failures === 0 ? "All palettes pass WCAG AA." : `${failures} contrast failure(s).`}`);
process.exit(failures === 0 ? 0 : 1);
