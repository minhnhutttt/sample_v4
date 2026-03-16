'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';

import gsap from 'gsap';
import Image from 'next/image';

export interface LoadingScreenHandle {
  play: (onMidpoint?: () => void) => void;
  playExit: () => void;
}

const LoadingScreen = forwardRef<LoadingScreenHandle>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    play(onMidpoint?: () => void) {
      if (!containerRef.current || !ballRef.current) return;

      const rects = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('.rectangle--skew'),
      );

      gsap.set(rects, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      });

      const tl = gsap.timeline();

      // Phase 1 — Enter:
      tl.to(rects, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.2,
        ease: 'power3.inOut',
        stagger: { each: 0.003, from: 'random' },
      });

      // Phase 2 — Hold + router.push
      tl.add(() => onMidpoint?.());
      tl.to({}, { duration: 1 }).to(ballRef.current, { opacity: 1 }, '<');

      // Phase 3 — Exit
      tl.to(rects, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.2,
        ease: 'power3.inOut',
        stagger: { each: 0.003, from: 'random' },
      });
      tl.to(ballRef.current, { opacity: 0 }, '<');
    },

    // Dùng khi lần đầu load trang — bắt đầu từ phase 2 (màn đen full) → exit
    playExit() {
      if (!containerRef.current) return;

      const rects = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('.rectangle--skew'),
      );

      const tl = gsap.timeline();

      // Phase 2 — Hold
      tl.to({}, { duration: 1 }).to(ballRef.current, { opacity: 1 }, '<');

      // Phase 3 — Exit: trên xuống
      tl.to(rects, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.2,
        ease: 'power3.inOut',
        stagger: { each: 0.003, from: 'random' },
      });
      tl.to(ballRef.current, { opacity: 0 }, '<');
    },
  }));

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      <div id="mask" className="mask-container rectangle-bg--black">
        {Array.from({ length: 20 }).map((_, colIndex) => (
          <div key={colIndex} className="rectangles">
            {Array.from({ length: 8 }).map((_, rowIndex) => (
              <div key={rowIndex} className="rectangle--skew" />
            ))}
          </div>
        ))}
      </div>
      <div
        ref={ballRef}
        className="absolute inset-0 z-999 flex items-center justify-center opacity-0"
      >
        <div className="relative">
          <div className="ball block cursor-pointer">
            <div className="inner">
              <Image
                src="/assets/images/ball.svg"
                alt="ball"
                width={87}
                height={87}
                className="max-md:w-12 md:w-16"
              />
            </div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
});

LoadingScreen.displayName = 'LoadingScreen';
export default LoadingScreen;
