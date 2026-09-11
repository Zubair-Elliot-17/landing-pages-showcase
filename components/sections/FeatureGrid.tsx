import type { BrandPage } from "@/lib/brands";

export function FeatureGrid({ brand }: { brand: BrandPage }) {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
        {brand.features.map((feature) => (
          <div key={feature.title}>
            <div
              className="w-10 h-10 rounded-full mb-5"
              style={{ backgroundColor: brand.palette.accent }}
              aria-hidden="true"
            />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="opacity-70 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
