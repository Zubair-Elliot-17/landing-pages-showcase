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

export interface Feature {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
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
  features: [Feature, Feature, Feature];
  stats: [Stat, Stat, Stat];
  testimonial: Testimonial;
  ctaHeadline: string;
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
    features: [
      { title: "Built to disappear", description: "The best interface is the one you stop noticing after the first day." },
      { title: "All-day, every day", description: "Battery life that outlasts your longest day, not your patience." },
      { title: "Private by default", description: "Your data stays on your device, not in someone else's spreadsheet." },
    ],
    stats: [
      { value: "18hrs", label: "battery life" },
      { value: "2.3M", label: "people who've switched" },
      { value: "4.9/5", label: "average rating" },
    ],
    testimonial: {
      quote: "I didn't think a laptop could change how I work. Orenda did.",
      name: "Maya Chen",
      role: "Product Designer",
    },
    ctaHeadline: "Reconsider what personal means.",
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
    features: [
      { title: "Built for the wall", description: "Cushioning tuned for the mile where everyone else slows down." },
      { title: "Zero break-in", description: "Race-ready straight out of the box. No blisters, no excuses." },
      { title: "Grip that holds", description: "Wet track, dry track, doesn't matter. It holds." },
    ],
    stats: [
      { value: "42K", label: "racers who've worn Surge" },
      { value: "0.3s", label: "faster average split" },
      { value: "180g", label: "featherweight build" },
    ],
    testimonial: {
      quote: "Every PR I've hit this year, I hit in Surge.",
      name: "Jonas Reyes",
      role: "Marathoner",
    },
    ctaHeadline: "Move like it's the last mile.",
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
    features: [
      { title: "Vetted, not just listed", description: "Every home is checked in person before it ever goes live." },
      { title: "Real hosts, real help", description: "A person who answers, not a bot that stalls." },
      { title: "Book with confidence", description: "Free cancellation up to 48 hours before check-in, always." },
    ],
    stats: [
      { value: "12,000+", label: "homes worldwide" },
      { value: "4.8★", label: "average host rating" },
      { value: "98%", label: "guests who'd book again" },
    ],
    testimonial: {
      quote: "It felt less like a rental and more like someone handed me their keys and said 'make yourself at home.'",
      name: "Priya Nair",
      role: "Frequent traveler",
    },
    ctaHeadline: "Find a place that feels like home.",
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
    features: [
      { title: "Made for right now", description: "A feed that reads your mood, not just your history." },
      { title: "No two feeds alike", description: "Ten million listeners, ten million different homepages." },
      { title: "Offline, always", description: "Download it once. Play it anywhere, signal or none." },
    ],
    stats: [
      { value: "80M", label: "tracks" },
      { value: "150+", label: "curated moods" },
      { value: "0", label: "ads on premium" },
    ],
    testimonial: {
      quote: "Nocturn is the only app that gets it right at 2am.",
      name: "DJ Kessler",
      role: "Resident DJ",
    },
    ctaHeadline: "Every mood has a soundtrack.",
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
    features: [
      { title: "One app, whole home", description: "Locks, lights, and thermostat, all in a single clean screen." },
      { title: "Learns your patterns", description: "It figures out your routine so you don't have to program it." },
      { title: "Works when the internet doesn't", description: "Local-first control means your door still locks in a blackout." },
    ],
    stats: [
      { value: "15min", label: "average setup time" },
      { value: "30%", label: "average energy savings" },
      { value: "500K+", label: "homes automated" },
    ],
    testimonial: {
      quote: "I stopped thinking about my thermostat. That's the whole point.",
      name: "Owen Park",
      role: "Homeowner",
    },
    ctaHeadline: "Your home, quietly smarter.",
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
    features: [
      { title: "Off the map, not off the grid", description: "Remote stays with the Wi-Fi and hot water you still want." },
      { title: "Local guides, not tour buses", description: "Trip plans written by people who actually live there." },
      { title: "Leave no trace, by design", description: "Every stay is picked for how little it disturbs the place." },
    ],
    stats: [
      { value: "60", label: "countries" },
      { value: "9,000+", label: "remote stays" },
      { value: "4.9★", label: "average trip rating" },
    ],
    testimonial: {
      quote: "Fjord found us a cabin no map could.",
      name: "Elin Voss",
      role: "Traveler",
    },
    ctaHeadline: "Trips that start where the map runs out.",
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
    features: [
      { title: "Coaching that adapts daily", description: "Your plan shifts based on last night's sleep, not a fixed calendar." },
      { title: "Built around your recovery", description: "Rest days are programmed in, not something you feel guilty taking." },
      { title: "No two workouts alike", description: "Thousands of combinations so you never just go through the motions." },
    ],
    stats: [
      { value: "1M+", label: "workouts logged" },
      { value: "89%", label: "still training past 90 days" },
      { value: "12min", label: "average session" },
    ],
    testimonial: {
      quote: "Kinetic is the first program I didn't quit by week three.",
      name: "Tasha Okoro",
      role: "Member since 2024",
    },
    ctaHeadline: "Train like the clock is watching.",
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
    features: [
      { title: "Curated by people, not just code", description: "Real editors pick what rises to the top, every single week." },
      { title: "Ad breaks that don't break the mood", description: "Sponsor reads that fit the show instead of interrupting it." },
      { title: "Clips worth sharing", description: "Save and send the exact 30 seconds that made you stop and listen." },
    ],
    stats: [
      { value: "40K+", label: "shows" },
      { value: "2.1M", label: "monthly listeners" },
      { value: "4.8★", label: "app rating" },
    ],
    testimonial: {
      quote: "Velvet is where I found my favorite show, and then three more.",
      name: "Marcus Webb",
      role: "Listener",
    },
    ctaHeadline: "Podcasts worth staying up for.",
  },
  {
    slug: "meridian",
    brandInspiration: "Apple-style",
    name: "Meridian",
    tagline: "Work, laid out the way you think.",
    palette: { bg: "#F7F3EE", fg: "#2A2622", accent: "#C1622E" },
    fontKey: "workSans",
    layoutArchetype: "minimal-hero",
    heroTier: false,
    heroImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1600&q=80",
    heroImageAlt: "A minimalist desk setup with a laptop, brass accents, and a small plant",
    features: [
      { title: "Organized how your brain works", description: "Not a rigid template — a layout that bends to your process." },
      { title: "Every tool, one workspace", description: "Docs, tasks, and timelines without ten browser tabs." },
      { title: "Fast enough to keep up with you", description: "No spinners. Type a thought before you lose it." },
    ],
    stats: [
      { value: "6hrs", label: "saved per week" },
      { value: "50K+", label: "teams onboarded" },
      { value: "99.9%", label: "uptime" },
    ],
    testimonial: {
      quote: "Meridian is the first tool my whole team actually opens every day.",
      name: "Sana Iqbal",
      role: "Ops Lead",
    },
    ctaHeadline: "Work, laid out the way you think.",
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
    features: [
      { title: "Built for miles, not just looks", description: "Tested past 500 miles before it ever ships." },
      { title: "Cushioning that lasts past mile 20", description: "No dead foam by the time it matters most." },
      { title: "Grip for wherever you run", description: "Pavement, trail, track — one outsole, all conditions." },
    ],
    stats: [
      { value: "500mi", label: "average sole life" },
      { value: "26.2", label: "the distance they're made for" },
      { value: "10K+", label: "five-star reviews" },
    ],
    testimonial: {
      quote: "I've run three marathons in the same pair of Embers.",
      name: "Delia Cruz",
      role: "Runner",
    },
    ctaHeadline: "Built for the miles no one sees.",
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
