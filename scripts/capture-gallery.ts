/**
 * Auto-captures a hero screenshot of every brand page for the README.
 * (Ships as a static image grid rather than an animated GIF — a real GIF
 * needs a frame-encoding dependency for marginal benefit over a grid of
 * stills; this gets the same "prove it visually" goal at lower cost.)
 *
 * Requires the dev server running locally first: `npm run dev`
 * Run: npx tsx scripts/capture-gallery.ts [baseUrl]
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { BRANDS } from "../lib/brands";

const baseUrl = process.argv[2] ?? "http://localhost:3000";
const outDir = join(process.cwd(), "docs", "screenshots");

async function main() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  console.log(`Capturing gallery from ${baseUrl} ...`);
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.screenshot({ path: join(outDir, "gallery.png") });
  console.log("  gallery.png");

  for (const brand of BRANDS) {
    await page.goto(`${baseUrl}/${brand.slug}`, { waitUntil: "networkidle" });
    await page.screenshot({ path: join(outDir, `${brand.slug}.png`) });
    console.log(`  ${brand.slug}.png`);
  }

  await browser.close();
  console.log(`\nDone — ${BRANDS.length + 1} screenshots in docs/screenshots/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
