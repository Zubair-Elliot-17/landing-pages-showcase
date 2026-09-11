import { BRANDS } from "@/lib/brands";
import { GalleryCard } from "@/components/GalleryCard";
import { PageTransition } from "@/components/PageTransition";

export default function GalleryPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-neutral-950 text-white px-6 sm:px-10 py-14">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            10 Brands, 10 Aesthetics
          </h1>
          <p className="text-lg text-white/70">
            Ten fictional products, each styled after a different iconic
            landing page aesthetic — a speed test of what&rsquo;s possible
            building fast with AI. Use ← / → on any brand page to cycle
            through all ten.
          </p>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDS.map((brand) => (
            <GalleryCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
