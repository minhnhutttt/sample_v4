// hooks/useLenis.ts
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function useLenis(wrapperRef: React.RefObject<HTMLElement | null>) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Tìm scrollable__area (content scroller)
    const content = wrapper.querySelector<HTMLElement>(
      '.scrollable__area-inner',
    );
    if (!content) return;

    const lenis = new Lenis({
      wrapper, // element bao ngoài (có overflow: hidden)
      content, // element bên trong (có nội dung)
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Kết nối với GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      gsap.ticker.remove((time) => lenis.raf(time * 2000));
    };
  }, [wrapperRef]);

  return lenisRef;
}
