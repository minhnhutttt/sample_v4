'use client';

import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);
const BoardMember = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const item02Ref = useRef<HTMLDivElement>(null);
  const item04Ref = useRef<HTMLDivElement>(null);
  const item05Ref = useRef<HTMLDivElement>(null);
  const item06Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;

    const items = [
      item02Ref.current,
      item04Ref.current,
      item05Ref.current,
      item06Ref.current,
    ].filter(Boolean) as HTMLDivElement[];

    if (!wrapper || items.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top center',
          end: 'bottom top',
          invalidateOnRefresh: true,
        },
      });

      tl.from(items, {
        top: 'auto',
        left: 'auto',
        duration: 1,
      });
    }, wrapper);
    return () => {
      ctx.revert();
    };
  }, []);

  const wrapperTextRef = useRef<HTMLDivElement>(null);
  const textMiddleRef = useRef<HTMLSpanElement>(null);
  const textBottomRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const middleEl = textMiddleRef.current;
    const bottomEl = textBottomRef.current;

    if (!wrapper || !middleEl || !bottomEl) return;

    const ctx = gsap.context(() => {
      const splitMiddle = new SplitText(middleEl, { type: 'chars' });
      const splitBottom = new SplitText(bottomEl, { type: 'chars' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperTextRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: {
          ease: 'none',
          duration: 1.6,
          stagger: { each: 0.06, from: 'start' },
        },
      });

      gsap.set([splitMiddle.chars], {
        scaleY: 0,
      });

      const scaleChars = (
        targets: Element[] | NodeListOf<Element>,
        toScale: number,
        origin: string,
        pos?: gsap.Position,
      ) => tl.to(targets, { scaleY: toScale, transformOrigin: origin }, pos);

      scaleChars(splitBottom.chars, 0, '50% 100%');
      scaleChars(splitMiddle.chars, 1, '50% 0%', '<');
    }, wrapper);

    ScrollTrigger.refresh();
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="overflow-hidden bg-stone-900 px-5 pt-32 pb-28 text-[#f6c548] md:pt-32 md:pb-64">
      <div
        ref={wrapperTextRef}
        className="flex flex-col gap-[max(22.8px,22.8px+100vw*.0148)] py-[max(24px,24px+100vw*.0212)]"
      >
        <div className="relative z-10 text-center text-[clamp(40px,calc(15px+9.25vw),180px)] leading-none font-bold tracking-tight whitespace-nowrap text-[#F78629] will-change-transform">
          <span ref={textMiddleRef} className="inline-block">
            Board Member
          </span>
          <span ref={textBottomRef} className="absolute inset-0 inline-block">
            Board Member
          </span>
        </div>
      </div>
      <div
        ref={wrapperRef}
        className="relative flex min-h-screen items-center justify-center font-bold text-black"
      >
        <div
          ref={item02Ref}
          className="absolute top-[10%] left-[25%] flex h-[clamp(190px,26vw,320px)] w-[clamp(150px,20vw,240px)] rotate-[-3deg] flex-col items-center justify-center rounded-2xl bg-[#ffc36a] p-4 md:top-[10%] md:left-[45%] md:p-6"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            Arima Yoshiki
          </p>
          <img
            src="/assets/images/ARIMA-YOSHIKI-CEO.png"
            alt=""
            className="h-[clamp(100px,13vw,180px)] w-auto object-cover"
          />
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            CEO
          </p>
        </div>
        <div
          ref={item04Ref}
          className="absolute top-[38%] left-[65%] flex h-[clamp(190px,26vw,320px)] w-[clamp(150px,20vw,240px)] rotate-[2deg] flex-col items-center justify-center rounded-2xl bg-[#D9F7BB] p-4 md:top-[30%] md:left-[64%] md:p-6"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            Kato Yoshiya
          </p>
          <img
            src="/assets/images/KATO-YOSHIYA-CFO.png"
            alt=""
            className="h-[clamp(100px,13vw,180px)] w-auto object-cover"
          />
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            CFO
          </p>
        </div>
        <div
          ref={item05Ref}
          className="absolute top-[70%] left-[45%] flex h-[clamp(190px,26vw,320px)] w-[clamp(150px,20vw,240px)] rotate-[-2deg] flex-col items-center justify-center rounded-2xl bg-[#E07787] p-4 md:top-[60%] md:left-[45%] md:p-6"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            Ishida Toshiyuki
          </p>
          <img
            src="/assets/images/ISHIDA-TOSHIYUKI-COO.png"
            alt=""
            className="h-[clamp(100px,13vw,180px)] w-auto object-cover"
          />
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            COO
          </p>
        </div>
        <div
          ref={item06Ref}
          className="absolute top-[42%] left-[4%] flex h-[clamp(190px,26vw,320px)] w-[clamp(150px,20vw,240px)] rotate-[7deg] flex-col items-center justify-center rounded-2xl bg-[#8ADCFF] p-4 md:top-[30%] md:left-[26%] md:p-6"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            Naridomi Yasuhiro
          </p>
          <img
            src="/assets/images/NARIDOMI-YASUHIRO-CTO.png"
            alt=""
            className="h-[clamp(100px,13vw,180px)] w-auto object-cover"
          />
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            CTO
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoardMember;
