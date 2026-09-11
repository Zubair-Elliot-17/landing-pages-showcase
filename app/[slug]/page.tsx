import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  BRANDS,
  DEFAULT_ARCHETYPE,
  getAdjacentSlugs,
  getBrand,
  type LayoutArchetype,
} from "@/lib/brands";
import { MinimalHero } from "@/components/archetypes/MinimalHero";
import { BoldMotion } from "@/components/archetypes/BoldMotion";
import { PhotoGrid } from "@/components/archetypes/PhotoGrid";
import { DarkGradient } from "@/components/archetypes/DarkGradient";
import { PageTransition } from "@/components/PageTransition";
import { KeyboardNav } from "@/components/KeyboardNav";

const ARCHETYPE_COMPONENTS: Record<
  LayoutArchetype,
  (props: { brand: (typeof BRANDS)[number] }) => React.ReactElement
> = {
  "minimal-hero": MinimalHero,
  "bold-motion": BoldMotion,
  "photo-grid": PhotoGrid,
  "dark-gradient": DarkGradient,
};

export function generateStaticParams() {
  return BRANDS.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return {
    title: `${brand.name} — ${brand.tagline}`,
  };
}

export default async function BrandDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Validate before any render/lookup work runs — unknown slugs 404
  // immediately rather than falling through into archetype dispatch.
  const brand = getBrand(slug);
  if (!brand) {
    notFound();
  }

  let archetype = brand.layoutArchetype;
  if (!ARCHETYPE_COMPONENTS[archetype]) {
    console.warn(
      `[brands.config] Unrecognized layoutArchetype "${archetype}" for slug "${brand.slug}" — falling back to "${DEFAULT_ARCHETYPE}"`
    );
    archetype = DEFAULT_ARCHETYPE;
  }

  const ArchetypeComponent = ARCHETYPE_COMPONENTS[archetype];
  const adjacent = getAdjacentSlugs(brand.slug);

  return (
    <PageTransition>
      {adjacent && <KeyboardNav prevSlug={adjacent.prev} nextSlug={adjacent.next} />}
      <ArchetypeComponent brand={brand} />
    </PageTransition>
  );
}
