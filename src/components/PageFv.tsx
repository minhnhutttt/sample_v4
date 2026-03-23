'use client';

import { ReactNode, useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

gsap.registerPlugin(ScrollTrigger, SplitText);

const PageFv = ({ text }: { text: ReactNode }) => {
  useInfiniteScroll();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const clubsWrapperRef = useRef<HTMLDivElement>(null);
  const clubsTopRef = useRef<HTMLSpanElement>(null);
  const clubsMiddleRef = useRef<HTMLSpanElement>(null);
  const clubsBottomRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const wrapperEl = wrapperRef.current;
    const clubsWrapperEl = clubsWrapperRef.current;
    const topEl = clubsTopRef.current;
    const middleEl = clubsMiddleRef.current;
    const bottomEl = clubsBottomRef.current;
    if (!wrapperEl || !clubsWrapperEl || !topEl || !middleEl || !bottomEl)
      return;

    const mm = gsap.matchMedia();
    mm.add(
      {
        isPC: '(min-width: 768px)',
        isSP: '(max-width: 767px)',
      },
      (ctx) => {
        const btnTl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperEl,
            start: 'top top',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        });

        return () => {
          btnTl.kill();
        };
      },
    );

    const splits: SplitText[] = [];
    const ctx = gsap.context(() => {
      const splitTop = new SplitText(topEl, { type: 'chars' });
      const splitMiddle = new SplitText(middleEl, { type: 'chars' });
      const splitBottom = new SplitText(bottomEl, { type: 'chars' });
      splits.push(splitTop, splitMiddle, splitBottom);

      gsap.set([splitTop.chars, splitMiddle.chars, splitBottom.chars], {
        scaleY: 0,
      });

      const tl = gsap.timeline({
        defaults: { ease: 'none', stagger: { each: 0.08, from: 'start' } },
      });

      tl.to(clubsWrapperEl, { opacity: 1 })
        .to(splitBottom.chars, { scaleY: 1, transformOrigin: '50% 0%' })
        .to(splitBottom.chars, { scaleY: 0, transformOrigin: '50% 100%' })
        .to(splitMiddle.chars, { scaleY: 1, transformOrigin: '50% 0%' }, '<')
        .to(splitMiddle.chars, { scaleY: 0, transformOrigin: '50% 100%' })
        .to(splitTop.chars, { scaleY: 1, transformOrigin: '50% 0%' }, '<');
    });

    return () => {
      ctx.revert();
      splits.forEach((s) => s.revert());
      mm.revert();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative flex h-[650px] flex-col items-center justify-center overflow-hidden md:min-h-screen"
    >
      <div className="absolute inset-0 z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src="/assets/video/video-04.mp4"
        />

        <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#F78629]/[0.2] text-center text-white max-md:py-30">
          <div
            ref={clubsWrapperRef}
            className="relative scale-y-[1.2] text-center text-[clamp(80px,calc(30px+11.25vw),300px)] leading-[0.9] font-bold tracking-tighter whitespace-nowrap text-[#F78629] opacity-0 will-change-transform max-md:origin-top max-md:text-[clamp(30px,13vw,70px)]"
          >
            <span ref={clubsTopRef} className="inline-block">
              {text}
            </span>
            <span
              ref={clubsMiddleRef}
              className="absolute inset-0 inline-block"
            >
              {text}
            </span>
            <span
              ref={clubsBottomRef}
              className="absolute inset-0 inline-block"
            >
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFv;
