import type { FontKey } from "./fonts";

export const LAYOUT_ARCHETYPES = [
  "minimal-hero",
  "bold-motion",
  "photo-grid",
  "dark-gradient",
] as const;

export type LayoutArchetype = (typeof LAYOUT_ARCHETYPES)[number];

export const DEFAULT_ARCHETYPE: LayoutArchetype = "minimal-hero";

export interface Palette {
  bg: string;
  fg: string;
  accent: string;
}

export interface BrandPage {
  slug: string;
  brandInspiration: string;
  name: string;
  tagline: string;
  palette: Palette;
  fontKey: FontKey;
  layoutArchetype: LayoutArchetype;
  heroTier: boolean;
  heroImage: string;
  heroImageAlt: string;
  /** Only used by the photo-grid archetype's secondary panel. */
  secondaryImage?: string;
  secondaryImageAlt?: string;
}

export const BRANDS: BrandPage[] = [
  {
    slug: "orenda",
    brandInspiration: "Apple-style",
    name: "Orenda",
    tagline: "The most personal device, reconsidered.",
    palette: { bg: "#FAFAFA", fg: "#1D1D1F", accent: "#0071E3" },
    fontKey: "manrope",
    layoutArchetype: "minimal-hero",
    heroTier: false,
    heroImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600&q=80",
    heroImageAlt: "A laptop screen glowing with warm sunset colors in a dark room",
  },
  {
    slug: "surge",
    brandInspiration: "Nike-style",
    name: "Surge",
    tagline: "Move like it's the last mile.",
    palette: { bg: "#0D0D0D", fg: "#FFFFFF", accent: "#FF4500" },
    fontKey: "archivoBlack",
    layoutArchetype: "bold-motion",
    heroTier: true,
    heroImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80",
    heroImageAlt: "Runner's shoes mid-stride on a track",
  },
  {
    slug: "havenly",
    brandInspiration: "Airbnb-style",
    name: "Havenly",
    tagline: "Stay somewhere that feels like someone's home.",
    palette: { bg: "#FFF8F0", fg: "#2B2118", accent: "#FF5A5F" },
    fontKey: "poppins",
    layoutArchetype: "photo-grid",
    heroTier: false,
    heroImage: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1600&q=80",
    heroImageAlt: "Warm, sunlit living room interior",
    secondaryImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    secondaryImageAlt: "A styled living room corner with a yellow accent chair",
  },
  {
    slug: "nocturn",
    brandInspiration: "Spotify-style",
    name: "Nocturn",
    tagline: "Every mood has a soundtrack.",
    palette: { bg: "#121212", fg: "#FFFFFF", accent: "#1DB954" },
    fontKey: "spaceGrotesk",
    layoutArchetype: "dark-gradient",
    heroTier: true,
    heroImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=80",
    heroImageAlt: "Concert crowd under colorful stage lights at night",
  },
  {
    slug: "lucent",
    brandInspiration: "Apple-style",
    name: "Lucent",
    tagline: "Your home, quietly smarter.",
    palette: { bg: "#F5F5F7", fg: "#1D1D1F", accent: "#34C759" },
    fontKey: "inter",
    layoutArchetype: "minimal-hero",
    heroTier: false,
    heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1600&q=80",
    heroImageAlt: "A smart lock on a front door being controlled from a phone app",
  },
  {
    slug: "fjord",
    brandInspiration: "Airbnb-style",
    name: "Fjord",
    tagline: "Trips that start where the map runs out.",
    palette: { bg: "#F4F1EA", fg: "#2E2A24", accent: "#4A6B5A" },
    fontKey: "nunitoSans",
    layoutArchetype: "photo-grid",
    heroTier: false,
    heroImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80",
    heroImageAlt: "Forest path winding through tall trees",
    secondaryImage: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
    secondaryImageAlt: "Desert loungers facing a mountain view at sunset",
  },
  {
    slug: "kinetic",
    brandInspiration: "Nike-style",
    name: "Kinetic",
    tagline: "Train like the clock is watching.",
    palette: { bg: "#0A0A0A", fg: "#FFFFFF", accent: "#D4FF00" },
    fontKey: "oswald",
    layoutArchetype: "bold-motion",
    heroTier: false,
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80",
    heroImageAlt: "Athlete mid-workout in a dim gym",
  },
  {
    slug: "velvet",
    brandInspiration: "Spotify-style",
    name: "Velvet",
    tagline: "Podcasts worth staying up for.",
    palette: { bg: "#16121A", fg: "#F2ECF5", accent: "#B084F5" },
    fontKey: "playfairDisplay",
    layoutArchetype: "dark-gradient",
    heroTier: false,
    heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600&q=80",
    heroImageAlt: "Microphone in low, moody studio lighting",
  },
  {
    slug: "meridian",
    brandInspiration: "Apple-style",
    name: "Meridian",
    tagline: "Work, laid out the way you think.",
    palette: { bg: "#FFFFFF", fg: "#14171A", accent: "#5B5FEF" },
    fontKey: "workSans",
    layoutArchetype: "minimal-hero",
    heroTier: false,
    heroImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80",
    heroImageAlt: "A clean analytics dashboard showing clicks, impressions, and trend lines",
  },
  {
    slug: "ember",
    brandInspiration: "Nike-style",
    name: "Ember",
    tagline: "Built for the miles no one sees.",
    palette: { bg: "#1A0E0A", fg: "#FFF3E8", accent: "#FF6B35" },
    fontKey: "bebasNeue",
    layoutArchetype: "bold-motion",
    heroTier: false,
    heroImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=80",
    heroImageAlt: "A sprinter crouched at the starting blocks on a track",
  },
];

export function getBrand(slug: string): BrandPage | undefined {
  return BRANDS.find((b) => b.slug === slug);
}

export function getAdjacentSlugs(slug: string): { prev: string; next: string } | undefined {
  const index = BRANDS.findIndex((b) => b.slug === slug);
  if (index === -1) return undefined;
  const prev = BRANDS[(index - 1 + BRANDS.length) % BRANDS.length].slug;
  const next = BRANDS[(index + 1) % BRANDS.length].slug;
  return { prev, next };
}
