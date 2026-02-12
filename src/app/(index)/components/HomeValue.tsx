'use client';

import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import Button from '@/components/common/Button';
import useScrollAnimations from '@/hooks/useScrollAnimations';

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomeValue = () => {
  const ref = useScrollAnimations();

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !logoRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(textRef.current, {
        type: 'chars',
      });

      gsap.set(split.chars, { opacity: 0.2 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=3000',
          scrub: true,
          pin: true,
          refreshPriority: 0,
        },
      });

      gsap.set(wrapperRef.current, { opacity: 0 });

      tl.from(logoRef.current, {
        filter: 'blur(20px)',
        duration: 1,
        ease: 'power1.out',
      })
        .to(logoRef.current, {
          left: 0,
          duration: 1,
          ease: 'none',
        })
        .to(wrapperRef.current, {
          opacity: 1,
          duration: 0.2,
          ease: 'none',
        })
        .to(split.chars, {
          opacity: 1,
          stagger: {
            each: 0.02,
          },
          duration: 0.5,
          ease: 'none',
        });
    }, containerRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="px-5">
      <div ref={containerRef} className="relative">
        <div className="@container relative mx-auto flex min-h-screen w-full max-w-[1440px] items-center justify-center pt-28 max-md:flex-col md:pt-33.5">
          <div ref={logoRef} className="md:absolute">
            <h3 className="flex h-[95px] items-center text-center text-[24px] font-black before:h-[95px] before:w-[40px] before:bg-[url(/assets/images/frame.svg)] before:bg-cover after:h-[95px] after:w-[40px] after:rotate-180 after:bg-[url(/assets/images/frame.svg)] after:bg-cover md:h-[9.236cqw] md:text-[3.472cqw] md:before:h-[9.236cqw] md:before:w-[3.889cqw] md:after:h-[9.236cqw] md:after:w-[3.889cqw]">
              <span className="-mx-2">価値は、届け方で決まります</span>
            </h3>
          </div>
          <div
            ref={wrapperRef}
            className="flex w-full justify-center max-md:!opacity-100 md:justify-end"
          >
            <div
              ref={textRef}
              className="text-[18px] font-bold max-md:pt-10 md:w-[40%] md:text-[1.528cqw]"
            >
              あなたが積み重ねてきた知識や経験は、
              <br />
              本来、簡単に消費されるものではありません。
              <br />
              <br />
              大切に受け取られるべきものです。
              <br />
              理解され、感謝され、選ばれるべきものです。
              <br />
              <br />
              価値は、
              <br />
              広がることで生まれるものではありません。
              <br />
              <br />
              受け取る人が、
              <br />
              「これは大切だ」と決めたときに、
              <br />
              はじめて形になります。
              <br />
              <br />
              KIVOでは
              <br />
              情報は軽く扱われません。
              <br />
              流されません。
              <br />
              勝手に切り取られません。
              <br />
              <br />
              “必要な人に、必要な形で、きちんと届く”。
              <br />
              <br />
              それが、
              <br />
              KIVOという選択です。
            </div>
          </div>
        </div>
      </div>
      <div className="my-[65px] md:my-[170px]">
        <p className="fade-up text-center text-[18px] font-semibold md:text-[30px]">
          KIVOは価値ある情報を、
          <br className="md:hidden" />
          大切に、そして正しく届けるための場所です。
        </p>
        <div className="fade-up mt-[35px] md:mt-[90px]">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default HomeValue;
