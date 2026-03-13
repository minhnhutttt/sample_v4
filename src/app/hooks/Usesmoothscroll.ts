'use client';

import { useCallback } from 'react';

import { useLenis } from 'lenis/react';

export function useSmoothScroll() {
  const lenis = useLenis();

  const scrollTo = useCallback(
    (
      target: string | number | HTMLElement,
      options?: {
        offset?: number;
        duration?: number;
        immediate?: boolean;
        lock?: boolean;
        onComplete?: () => void;
      },
    ) => {
      lenis?.scrollTo(target, options);
    },
    [lenis],
  );

  const stop = useCallback(() => {
    lenis?.stop();
  }, [lenis]);

  const start = useCallback(() => {
    lenis?.start();
  }, [lenis]);

  return {
    lenis,
    scrollTo,
    stop,
    start,
    /** Scroll progress (0 → 1) */
    progress: lenis?.progress ?? 0,
    /** Current scroll position in pixels */
    scroll: lenis?.scroll ?? 0,
    /** Scroll direction: 1 = down, -1 = up */
    direction: lenis?.direction ?? 0,
    /** Whether currently animating */
    isScrolling: lenis?.isScrolling ?? false,
  };
}
