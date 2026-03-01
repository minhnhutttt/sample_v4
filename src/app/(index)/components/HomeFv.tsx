'use client';

import { ReactNode, useEffect, useRef } from 'react';

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
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(borderRef.current, {
      scale: 1.3,
      duration: 2,
      ease: 'power3.inOut',
    })
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
      );
  }, []);

  return (
    <div className="relative overflow-hidden bg-white p-5">
      <div
        ref={borderRef}
        className="pointer-events-none fixed inset-0 z-30 flex items-start justify-center"
      >
        <div className="pointer-events-none absolute inset-0 z-50 origin-center rounded-[80px] border-[60px] border-white"></div>
        <div className="absolute inset-0 border-[30px] border-white"></div>
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
        <div className="relative flex w-full flex-col items-center gap-[50px] bg-[url(/assets/images/fv-gradient.png)] bg-size-[100%_100%] pt-[184px]">
          <div className="overflow-hidden">
            <h1 ref={titleRef}>
              <Image
                src="/assets/images/kv-title.svg"
                alt="logo"
                width={514}
                height={438}
                className=""
              />
            </h1>
          </div>
          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              className="flex flex-col items-center justify-center gap-4 text-center"
            >
              <span className="h-22 w-1 animate-[scrollDown_2s_ease_infinite] bg-white"></span>
              <span className="font-bebas-neue text-center text-white md:text-[32px]">
                SCROLL <br />
                DOWN
              </span>
            </div>
          </div>
          <div className="overflow-hidden pt-2.5 pb-8">
            <div ref={sliderRef} className="topics-slider">
              <Splide
                options={{
                  type: 'loop',
                  autoWidth: true,
                  arrows: false,
                  focus: 'center',
                  gap: '1.5rem',
                  pagination: false,
                  breakpoints: {
                    767: {
                      focus: 'center',
                      gap: '0.5rem',
                      pagination: false,
                      arrows: true,
                    },
                  },
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
        </div>
      </div>
    </div>
  );
};

export default HomeFv;
