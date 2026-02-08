'use client';

import { useEffect, useState } from 'react';

export function StickyBar({ href, label }: { href: string; label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.querySelector('.hero-action');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`sticky-bar ${visible ? 'visible' : ''}`}>
      <a className="button primary" href={href}>{label}</a>
    </div>
  );
}
