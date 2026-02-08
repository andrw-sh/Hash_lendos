'use client';

import { useEffect, useState } from 'react';

type UseCaseSlideshowProps = {
  brandName: string;
  useCases: string[];
  intervalMs?: number;
};

export function UseCaseSlideshow({
  brandName,
  useCases,
  intervalMs = 1200
}: UseCaseSlideshowProps) {
  const safeUseCases = useCases.length ? useCases : ['для дел'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeUseCases.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeUseCases.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, safeUseCases.length]);

  const current = safeUseCases[index] ?? safeUseCases[0] ?? 'для дел';

  return (
    <span className="brand-slide">
      <span className="brand-slide-base">{brandName}</span>
      <span key={current} className="brand-slide-current">
        {current}
      </span>
    </span>
  );
}

