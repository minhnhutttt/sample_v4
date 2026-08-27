'use client';

import { useEffect, useState } from 'react';

import type { SectionId } from '@/types/lp';

/**
 * Highlights the nav entry whose section currently sits in the middle band of
 * the viewport. Sections are found by their `data-section` attribute so the
 * whole block is observed, not just the anchor target.
 */
export const useActiveSection = (ids: readonly SectionId[]) => {
  const [activeId, setActiveId] = useState<SectionId | null>(null);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-section]'),
    );

    if (targets.length === 0) return;

    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.section;

          if (!id) return;

          if (entry.isIntersecting) {
            intersecting.add(id);
          } else {
            intersecting.delete(id);
          }
        });

        const next = ids.find((id) => intersecting.has(id));

        if (next) setActiveId(next);
      },
      { rootMargin: '-30% 0px -45% 0px' },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};
