'use client';

import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StickySectionProps {
  children: React.ReactNode;
}

export default function StickySection({ children }: StickySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer) return;

    const scroller = document.querySelector('.scrollable__area');
    if (!scroller) return;

    // Tính top để layer không bị tràn ra ngoài viewport
    const applyTop = () => {
      const screenHeight = window.innerHeight;
      const layerHeight = layer.offsetHeight;
      const top = screenHeight >= layerHeight ? 0 : screenHeight - layerHeight;
      layer.style.top = `${top}px`;

      ScrollTrigger.refresh();
    };

    applyTop();
    window.addEventListener('resize', applyTop);

    const ctx = gsap.context(() => {
      gsap.set(layer, {
        translateX: '10%',
        rotation: 10,
        transformOrigin: '0% 0%',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scroller,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      });

      tl.to(layer, {
        translateX: '0%',
        rotation: 0,
        ease: 'power2.out',
      });
    }, section);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', applyTop);
    };
  }, []);

  return (
    <div ref={sectionRef} className="section section--under-next">
      <div
        ref={layerRef}
        className="section__layer section__layer--sticky section__layer--full-height ui-background"
      >
        {children}
      </div>
    </div>
  );
}
