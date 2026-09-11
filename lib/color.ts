/**
 * WCAG relative luminance -> pick black or white text for a given
 * background hex color, whichever gives the higher contrast ratio.
 * Needed because several brand accent colors (Nocturn's green, Kinetic's
 * neon lime, Velvet's lavender) are too light for white text to pass
 * even the large-text 3:1 contrast minimum.
 */
export function getReadableTextColor(hex: string): "#ffffff" | "#111111" {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;

  const linearize = (v: number) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  const luminance = 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);

  const contrastWithWhite = 1.05 / (luminance + 0.05);
  const contrastWithBlack = (luminance + 0.05) / 0.05;

  return contrastWithWhite >= contrastWithBlack ? "#ffffff" : "#111111";
}
