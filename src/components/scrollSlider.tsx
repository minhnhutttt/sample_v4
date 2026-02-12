'use client';

import { ReactNode, useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export interface SlideData {
  title: string;
  text: ReactNode;
}

interface ScrollSliderProps {
  slides: SlideData[];
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
      const slidesEl = slidesRef.current.filter(Boolean);

      if (!slidesEl.length) return;

      // ------------------------
      // INITIAL STATE
      // ------------------------
      gsap.set(slidesEl, { xPercent: 100 });
      gsap.set(slidesEl[0], { xPercent: 0, opacity: 1 });

      slidesEl.forEach((slide) => {
        const image = slide!.querySelector('.slide-image');
        const title = slide!.querySelector('.slide-title');
        const text = slide!.querySelector('.slide-text');

        gsap.set([image, title, text], {
          opacity: 0,
          y: 50,
        });
      });

      // Slide đầu hiển thị sẵn
      const firstSlide = slidesEl[0]!;
      gsap.set(
        firstSlide.querySelectorAll('.slide-image, .slide-title, .slide-text'),
        {
          opacity: 1,
          y: 0,
        },
      );

      // ------------------------
      // TIMELINE
      // ------------------------
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

        const prevSlide = slidesEl[index - 1]!;

        const image = slide!.querySelector('.slide-image');
        const title = slide!.querySelector('.slide-title');
        const text = slide!.querySelector('.slide-text');

        // Slide cũ thu nhỏ + fade
        tl.to(
          prevSlide,
          {
            scale: 0.85,
            opacity: 0.4,
            duration: 1,
          },
          index,
        );

        // Slide mới trượt vào
        tl.to(
          slide,
          {
            xPercent: 0,
            opacity: 1,
            duration: 1,
          },
          index,
        );

        // Animate nội dung bên trong (stagger mượt)
        tl.to(
          [image, title, text],
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
          },
          index + 0.2,
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
            slidesRef.current[i] = el;
          }}
          className="absolute inset-0 h-full w-full"
        >
          <div className="h-full bg-black">
            <div className="mx-auto flex h-full w-full max-w-5xl items-center gap-9 px-6 max-md:flex-col max-md:justify-center md:gap-20">
              {/* IMAGE */}
              <div>
                <Image
                  src="/assets/images/phone.png"
                  alt="phone"
                  width={324}
                  height={668}
                  className="slide-image max-lg:w-[200px] max-md:w-[110px]"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="space-y-5 text-left text-white">
                <p className="slide-title text-[24px] font-black md:text-[30px]">
                  {slide.title}
                </p>
                <p className="slide-text text-[16px]">{slide.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollSlider;
