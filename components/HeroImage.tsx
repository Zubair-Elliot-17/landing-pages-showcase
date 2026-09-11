"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * next/image with a blur-up placeholder and a static fallback if the
 * remote (Unsplash) URL ever fails to load.
 */
export function HeroImage({ src, alt, className, priority }: HeroImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Image
      src={failed ? "/fallback-hero.svg" : src}
      alt={alt}
      fill
      priority={priority}
      className={className}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4="
      sizes="100vw"
      onError={() => setFailed(true)}
    />
  );
}
