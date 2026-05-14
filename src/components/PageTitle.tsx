'use client';

import { type ReactNode, useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

gsap.registerPlugin(ScrollTrigger, SplitText);

type PageFvProps = {
  text: ReactNode;
  appLabel?: string;
  heightClassName?: string;
  titleClassName?: string;
  titleFinalOpacity?: number;
  titleWrapperClassName?: string;
  appLabelWrapperClassName?: string;
};

const PageTitle = ({
  text,
  appLabel = 'KIVO APP',
  heightClassName = 'h-[650px] md:min-h-screen',
  titleClassName = '',
  titleFinalOpacity = 1,
  titleWrapperClassName = 'relative',
  appLabelWrapperClassName = 'absolute right-0 text-[#F78629] mix-blend-plus-lighter',
}: PageFvProps) => {
  const resolvedTitleClassName =
    titleClassName ||
    'scale-y-[1.2] text-center text-[clamp(80px,calc(30px+11.25vw),320px)] leading-[0.9] font-bold tracking-tighter text-[#F78629] max-md:origin-top max-md:text-[clamp(30px,18vw,80px)] font-black';

  useInfiniteScroll();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const clubsWrapperRef = useRef<HTMLDivElement>(null);
  const clubsTopRef = useRef<HTMLSpanElement>(null);
  const clubsMiddleRef = useRef<HTMLSpanElement>(null);
  const clubsBottomRef = useRef<HTMLSpanElement>(null);
  const clubAppRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const wrapperEl = wrapperRef.current;
    const clubsWrapperEl = clubsWrapperRef.current;
    const topEl = clubsTopRef.current;
    const middleEl = clubsMiddleRef.current;
    const bottomEl = clubsBottomRef.current;
    const clubApp = clubAppRef.current;

    if (
      !wrapperEl ||
      !clubsWrapperEl ||
      !topEl ||
      !middleEl ||
      !bottomEl ||
      !clubApp
    ) {
      return;
    }

    const mm = gsap.matchMedia();
    mm.add(
      {
        isPC: '(min-width: 768px)',
        isSP: '(max-width: 767px)',
      },
      () => {
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

      gsap.set(
        [splitTop.chars, splitMiddle.chars, splitBottom.chars, clubApp],
        {
          scaleY: 0,
        },
      );

      const tl = gsap.timeline({
        defaults: { ease: 'none', stagger: { each: 0.08, from: 'start' } },
      });

      tl.to(clubsWrapperEl, { opacity: titleFinalOpacity })
        .to(splitBottom.chars, { scaleY: 1, transformOrigin: '50% 0%' })
        .to(splitBottom.chars, { scaleY: 0, transformOrigin: '50% 100%' })
        .to(splitMiddle.chars, { scaleY: 1, transformOrigin: '50% 0%' }, '<')
        .to(splitMiddle.chars, { scaleY: 0, transformOrigin: '50% 100%' })
        .to(splitTop.chars, { scaleY: 1, transformOrigin: '50% 0%' }, '<')
        .to(clubApp, { scaleY: 1, opacity: 1, transformOrigin: '50% 0%' }, '<');
    });

    return () => {
      ctx.revert();
      splits.forEach((split) => split.revert());
      mm.revert();
    };
  }, [titleFinalOpacity]);

  return (
    <div
      ref={wrapperRef}
      className={`relative flex ${heightClassName} flex-col items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src="/assets/movie/video-04.mp4"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-[#F78629]/[0.2] text-center text-white mix-blend-plus-lighter max-md:py-30">
          <div className={titleWrapperClassName}>
            <div
              ref={clubsWrapperRef}
              className={`relative whitespace-nowrap opacity-0 will-change-transform ${resolvedTitleClassName}`}
            >
              <span ref={clubsTopRef} className="inline-block">
                {text} <br />
              </span>
              <span
                ref={clubsMiddleRef}
                className="absolute inset-0 inline-block"
              >
                {text}
                <br />
              </span>
              <span
                ref={clubsBottomRef}
                className="absolute inset-0 inline-block"
              >
                {text}
                <br />
              </span>
            </div>
            <div className={appLabelWrapperClassName}>
              <span
                ref={clubAppRef}
                className="inline-block text-[32px] font-medium whitespace-nowrap opacity-0 md:text-[44px]"
              >
                {appLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
