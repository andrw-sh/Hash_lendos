'use client';

import { useState } from 'react';

type HeroImageProps = {
  src: string;
  alt: string;
  fallbackSrc: string;
  className?: string;
};

export function HeroImage({ src, alt, fallbackSrc, className }: HeroImageProps) {
  const [failed, setFailed] = useState(false);
  const resolvedSrc = failed ? fallbackSrc : src;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={resolvedSrc}
      alt={alt}
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

