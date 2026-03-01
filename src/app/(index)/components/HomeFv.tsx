'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

const SliderItem = ({ text, image }: { text: ReactNode; image: string }) => (
  <SplideSlide>
    <Link
      href="/"
      className="font-bebas-neue group relative flex items-center justify-center overflow-hidden rounded-tl-2xl rounded-br-2xl border border-white text-white max-md:w-[150px]"
    >
      <Image
        src={image}
        alt=""
        width={237}
        height={142}
        className="grayscale-100 transition-transform duration-300 group-hover:scale-105 group-hover:grayscale-0"
      />
      <p className="absolute text-center text-[30px] leading-none md:text-[46px]">
        {text}
      </p>
    </Link>
  </SplideSlide>
);

const HomeFv = () => {
  const [nextOpen, setNextOpen] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
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
      )
      .from(
        sliderRef.current,
        {
          skewY: 24,
          yPercent: 100,
          transformOrigin: '0% 0%',
          duration: 2,
          ease: 'power3.inOut',
        },
        '<',
      )
      .to(
        ballRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: 'power3.inOut',
        },
        '<',
      );
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
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[20px]">
        <video
          src="/assets/videos/mv.mp4"
          loop
          controls
          muted
          autoPlay
          className="absolute inset-0 h-full min-h-screen w-full object-cover"
        ></video>
        <div className="relative flex w-full flex-col items-center gap-[50px] bg-[url(/assets/images/fv-gradient.png)] bg-size-[100%_100%] pt-30 md:pt-[184px]">
          <div className="overflow-hidden">
            <h1 ref={titleRef}>
              <Image
                src="/assets/images/kv-title.svg"
                alt="logo"
                width={514}
                height={438}
                className="max-md:w-[300px]"
              />
            </h1>
          </div>
          <div className="overflow-hidden max-md:pb-15">
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
          <div className="relative pt-2.5 pb-4 md:pb-8">
            <div ref={sliderRef} className="topics-slider relative z-30">
              <Splide
                options={{
                  type: 'loop',
                  autoWidth: true,
                  arrows: false,
                  focus: 'center',
                  gap: '1.5rem',
                  pagination: false,
                }}
                hasTrack={false}
              >
                <SplideTrack>
                  <SliderItem
                    text="BE PARTNER"
                    image="/assets/images/kv-item-01.png"
                  />
                  <SliderItem
                    text="GAME GUIDE"
                    image="/assets/images/kv-item-02.png"
                  />
                  <SliderItem
                    text="ABOUT 3×3"
                    image="/assets/images/kv-item-03.png"
                  />
                  <SliderItem
                    text="RANKING"
                    image="/assets/images/kv-item-04.png"
                  />
                  <SliderItem
                    text={
                      <>
                        HOMETOWN <br />
                        TAX
                      </>
                    }
                    image="/assets/images/kv-item-05.png"
                  />
                  <SliderItem
                    text="TEAM"
                    image="/assets/images/kv-item-06.png"
                  />
                </SplideTrack>
              </Splide>
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
                <p>4/10 : 福岡県</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFv;
