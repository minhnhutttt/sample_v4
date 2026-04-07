'use client';

import { useEffect, useRef, useState } from 'react';

import '@splidejs/react-splide/css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const HomeFv = ({ topics }: { topics: React.ReactNode }) => {
  const [nextOpen, setNextOpen] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(bgRef.current, {
      backgroundColor: 'transparent',
      duration: 1,
      ease: 'power3.inOut',
    })
      .to(
        borderRef.current,
        {
          borderWidth: 0,
          duration: 2.5,
          ease: 'power3.inOut',
        },
        '-=1',
      )
      .from(
        titleRef.current,
        {
          skewY: 24,
          yPercent: 100,
          transformOrigin: '0% 0%',
          duration: 2,
          ease: 'power3.inOut',
        },
        '<+=0.4',
      )
      .from(
        scrollRef.current,
        {
          skewY: 24,
          yPercent: 100,
          transformOrigin: '0% 0%',
          duration: 2,
          ease: 'power3.inOut',
        },
        '<',
      );

    gsap.from(sliderRef.current, {
      skewY: 24,
      yPercent: 100,
      opacity: 0,
      transformOrigin: '0% 0%',
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top -=30',
        toggleActions: 'play none none none',
      },
    });

    gsap.to(contentRef.current, {
      y: -50,
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top -=30',
        toggleActions: 'play none none none',
      },
    });

    // ScrollTrigger cho ballRef
    gsap.to(ballRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top -=50',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-white p-2.5 md:p-5">
      <div
        ref={bgRef}
        className="pointer-events-none fixed inset-0 z-30 flex items-start justify-center bg-white"
      >
        <div
          ref={borderRef}
          className="pointer-events-none absolute top-[-30px] left-[-30px] z-50 h-[calc(100%+60px)] w-[calc(100%+60px)] origin-center rounded-[100px] border-[60px] border-white md:top-[-60px] md:left-[-60px] md:h-[calc(100%+120px)] md:w-[calc(100%+120px)] md:rounded-[120px] md:border-[120px]"
        ></div>
      </div>
      <div
        ref={containerRef}
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[20px]"
      >
        <video
          src="/assets/videos/fv.mp4"
          loop
          controls={false}
          muted
          autoPlay
          preload="auto"
          playsInline
          className="absolute inset-0 h-full min-h-screen w-full object-cover"
        ></video>
        <div className="relative flex min-h-[800px] min-h-screen w-full flex-col items-center justify-center gap-[50px] bg-[url(/assets/images/fv-gradient.png)] bg-size-[100%_100%]">
          <div ref={contentRef} className="">
            <div className="overflow-hidden px-5">
              <h1 ref={titleRef}>
                <Image
                  src="/assets/images/kv-title.svg"
                  alt="logo"
                  width={1550}
                  height={211}
                  className="max-md:hidden max-md:w-[300px]"
                />
                <Image
                  src="/assets/images/kv-title-sp.svg"
                  alt="logo"
                  width={514}
                  height={438}
                  className="max-md:w-[300px] md:hidden"
                />
              </h1>
            </div>
            <div className="overflow-hidden max-md:pb-10">
              <div
                ref={scrollRef}
                className="flex flex-col items-center justify-center gap-4 text-center"
              >
                <span className="h-16 w-1 animate-[scrollDown_2s_ease_infinite] bg-white md:h-22"></span>
                <span className="font-bebas-neue text-center text-white md:text-[32px]">
                  SCROLL <br />
                  DOWN
                </span>
              </div>
            </div>
          </div>
          <div
            ref={sliderRef}
            className="absolute inset-x-0 bottom-3 z-10 pt-2.5 pb-4 md:bottom-0 md:pb-8"
          >
            {topics}
            <div className="absolute right-6 bottom-0 py-1 text-left text-[12px] font-medium text-white [text-shadow:1px_1px_2px_#000] md:text-[14px]">
              映像提供：KAPLI
            </div>
          </div>
          <button
            ref={ballRef}
            className={`absolute right-5 z-50 opacity-0 duration-500 max-md:bottom-50 md:right-10 md:bottom-[280px] ${nextOpen ? 'bottom-0! scale-0' : 'scale-100'}`}
            onClick={() => setNextOpen(true)}
          >
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
          </button>
          <div
            className={`absolute -right-20 -bottom-22 size-[300px] overflow-hidden duration-500 md:-bottom-20 md:size-[400px] ${nextOpen ? 'scale-100' : 'scale-0'}`}
          >
            <div className="pua absolute inset-0 animate-spin rounded-full border-[8px] border-transparent [animation-duration:3000ms]"></div>
            <div className="relative z-10 pt-6 md:pt-8">
              <p className="font-bebas-neue u-text-gradient text-center text-[30px] md:text-[42px]">
                NEXT GAME
              </p>
              <div className="mx-auto flex w-[200px] items-center justify-center gap-5 border-t border-white text-[14px] font-medium max-md:pr-10 md:w-[246px] md:pt-2 md:text-[16px]">
                <p>試合情報</p>
                <p>Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFv;
