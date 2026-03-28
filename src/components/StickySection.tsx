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

    // Tìm scroll container thực sự
    const scroller = document.querySelector('.scrollable__area');
    if (!scroller) return;

    // Báo cho ScrollTrigger biết scroll container
    ScrollTrigger.defaults({ scroller });

    gsap.set(layer, {
      translateX: '5%',
      rotation: 5,
      transformOrigin: '0% 0%',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        scroller, // chỉ định scroller cho trigger này
        start: 'top bottom',
        end: 'top 30%',
        scrub: 1,
        onEnter: () => console.log('enter'),
        onLeave: () => console.log('leave'),
      },
    });

    tl.to(layer, {
      translateX: '0%',
      rotation: 0,
      ease: 'power2.out',
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      // Reset default scroller về window khi unmount
      ScrollTrigger.defaults({ scroller: window });
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
