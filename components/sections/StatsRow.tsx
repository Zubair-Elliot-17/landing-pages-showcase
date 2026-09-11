import type { BrandPage } from "@/lib/brands";

export function StatsRow({ brand }: { brand: BrandPage }) {
  return (
    <section
      className="py-16 border-t border-b"
      style={{ borderColor: brand.palette.fg + "1a" }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {brand.stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: brand.palette.accent }}>
              {stat.value}
            </div>
            <p className="text-sm opacity-70 uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
