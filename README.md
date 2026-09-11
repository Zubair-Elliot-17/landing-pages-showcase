# 10 Brands, 10 Aesthetics

Ten fictional products, each styled after a different iconic consumer landing
page (Apple, Nike, Airbnb, Spotify-style) — no real logos, names, or copy. A
speed test of producing polished, distinct-feeling landing pages fast with AI
help, planned end-to-end with `/office-hours`, `/plan-ceo-review`, and
`/plan-eng-review` before a line of code was written.

**Build time:** started 2026-09-11 08:26 SAST (scaffold) — finished 08:32
SAST (all 10 pages built, typed, built successfully, and verified locally).
About 6 minutes of actual build time, on top of a planning pass through
`/office-hours` → `/plan-ceo-review` → `/plan-eng-review` beforehand.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the gallery links to
all 10 brand pages. On any brand page, press **← / →** to cycle through all
ten.

## How it's built

- **One dynamic route** (`app/[slug]/page.tsx`) driven entirely by
  `lib/brands.ts` — each of the 10 entries picks a `layoutArchetype`
  (`minimal-hero`, `bold-motion`, `photo-grid`, `dark-gradient`) so pages
  differ structurally, not just in color/font.
- **4 archetype components** under `components/archetypes/` — adding an
  11th brand is a config entry, not a new page.
- Hero imagery is hand-picked Unsplash photography with a blur-up
  placeholder and a static fallback if a URL ever fails to load.
- Two "hero-tier" pages (Surge, Nocturn) get an extra animated
  spotlight/glow treatment (`components/HeroSpotlight.tsx`) — a lightweight
  Framer Motion effect standing in for a heavier Aceternity/Three.js
  component, kept isolated to those two pages only.

## Manual QA

See the test plan checklist produced by `/plan-eng-review` for the full
pre-ship checklist (gallery navigation, keyboard nav, image fallback, 404
handling, and the fresh-clone-to-deploy path).

## Deploying

Push to a GitHub repo and import it on [Vercel](https://vercel.com/new) —
zero config needed, `next.config.ts` already allowlists the Unsplash image
domain.
