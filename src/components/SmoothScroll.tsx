'use client';

import { type ReactNode, useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollGSAPProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollGSAPProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: false,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
