'use client';

import { ReactNode, useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSliderProps {
  slides: ReactNode[];
  duration?: number;
  className?: string;
}

const ScrollSlider = ({
  slides,
  duration = 300,
  className = '',
}: ScrollSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slidesEl = slidesRef.current;

      if (!slidesEl.length) return;

      gsap.set(slidesEl, { xPercent: 100 });
      gsap.set(slidesEl[0], { xPercent: 0, opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${duration}%`,
          scrub: true,
          pin: true,
        },
      });

      slidesEl.forEach((slide, index) => {
        if (index === 0) return;

        const prevSlide = slidesEl[index - 1];

        tl.to(
          prevSlide,
          {
            scale: 0.8,
            duration: 1,
          },
          index,
        );

        tl.to(
          slide,
          {
            xPercent: 0,
            opacity: 1,
            duration: 1,
          },
          index,
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [slides, duration]);

  return (
    <div
      ref={containerRef}
      className={`relative h-screen overflow-hidden ${className}`}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) slidesRef.current[i] = el;
          }}
          className="absolute inset-0 h-full w-full"
        >
          {slide}
        </div>
      ))}
    </div>
  );
};

export default ScrollSlider;
