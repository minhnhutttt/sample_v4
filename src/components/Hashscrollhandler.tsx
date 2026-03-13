'use client';

import { useEffect } from 'react';

import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';

export default function HashScrollHandler() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const raf = requestAnimationFrame(() => {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(target as HTMLElement, { offset: -100 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname, lenis]);

  return null;
}
