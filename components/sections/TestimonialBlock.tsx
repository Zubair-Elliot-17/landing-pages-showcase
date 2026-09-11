import type { BrandPage } from "@/lib/brands";

export function TestimonialBlock({ brand }: { brand: BrandPage }) {
  return (
    <section className="px-6 sm:px-10 py-20 max-w-3xl mx-auto text-center">
      <p className="text-2xl sm:text-3xl font-medium leading-snug mb-6">
        &ldquo;{brand.testimonial.quote}&rdquo;
      </p>
      <p className="opacity-70">
        <span className="font-semibold">{brand.testimonial.name}</span> — {brand.testimonial.role}
      </p>
    </section>
  );
}
