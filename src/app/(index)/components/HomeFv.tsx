'use client';

import { useEffect, useRef } from 'react';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

const HomeFv = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to([topRef.current, bottomRef.current], {
      height: 0,
      duration: 2,
      ease: 'power3.inOut',
    })
      .to(
        [leftRef.current, rightRef.current],
        {
          width: 0,
          duration: 2,
          ease: 'power3.inOut',
        },
        '<',
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
        '<+=0.4',
      );
  }, []);

  return (
    <div className="relative min-h-screen bg-white p-5">
      {/* Top */}
      <div
        ref={topRef}
        className="absolute inset-x-0 top-0 z-20 h-15 w-full bg-white"
      ></div>

      {/* Left */}
      <div
        ref={leftRef}
        className="absolute inset-y-0 left-0 z-20 h-full w-15 bg-white"
      ></div>

      {/* Right */}
      <div
        ref={rightRef}
        className="absolute inset-y-0 right-0 z-20 h-full w-15 bg-white"
      ></div>

      {/* Bottom */}
      <div
        ref={bottomRef}
        className="absolute inset-x-0 bottom-0 z-20 h-15 w-full bg-white"
      ></div>
      <div className="relative flex h-full min-h-screen items-center justify-center">
        <div className="">
          <video
            src="/assets/videos/mv.mp4"
            loop
            controls
            muted
            autoPlay
            className="absolute inset-0 h-full min-h-screen w-full object-cover"
          ></video>
        </div>
        <div className="inset-0 z-10 flex flex-col items-center gap-[50px] bg-[url(/assets/images/fv-gradient.png)] bg-size-[100%_100%] pt-[184px]">
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
          <div className="bg-black/65 pt-2 pb-3 md:pt-4 md:pb-9">
            <p className="font-bebas-neue mb-1 text-center text-[26px] tracking-widest text-white md:mb-4 md:text-[44px]">
              TOPICS
            </p>
            <div className="topics-slider md:pl-[7%]">
              <Splide
                options={{
                  type: 'loop',
                  autoWidth: true,
                  arrows: false,
                  gap: '1.5rem',
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
                <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev -top-6.5! translate-y-0! bg-transparent!">
                    <svg
                      className="h-3.25! w-2.5!"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-0.000161171 1.05997L1.06084 -2.86102e-05L6.83984 5.77697C6.93299 5.86954 7.00692 5.97961 7.05737 6.10086C7.10782 6.22212 7.13379 6.35214 7.13379 6.48347C7.13379 6.6148 7.10782 6.74483 7.05737 6.86608C7.00692 6.98733 6.93299 7.0974 6.83984 7.18997L1.06084 12.97L0.000838757 11.91L5.42484 6.48497L-0.000161171 1.05997Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button className="splide__arrow splide__arrow--next -top-6.5! translate-y-0! bg-transparent!">
                    <svg
                      className="h-3.25! w-2.5!"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-0.000161171 1.05997L1.06084 -2.86102e-05L6.83984 5.77697C6.93299 5.86954 7.00692 5.97961 7.05737 6.10086C7.10782 6.22212 7.13379 6.35214 7.13379 6.48347C7.13379 6.6148 7.10782 6.74483 7.05737 6.86608C7.00692 6.98733 6.93299 7.0974 6.83984 7.18997L1.06084 12.97L0.000838757 11.91L5.42484 6.48497L-0.000161171 1.05997Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <SplideTrack>
                  <SplideSlide>
                    <Link
                      href="/"
                      className="block overflow-hidden max-md:w-[44.8vw]"
                    >
                      <Image
                        src="/assets/images/topic-01.png"
                        alt=""
                        width={292}
                        height={207}
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  </SplideSlide>
                  <SplideSlide>
                    <Link
                      href="/"
                      className="block overflow-hidden max-md:w-[44.8vw]"
                    >
                      <Image
                        src="/assets/images/topic-02.png"
                        alt=""
                        width={292}
                        height={207}
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  </SplideSlide>
                  <SplideSlide>
                    <Link
                      href="/"
                      className="block overflow-hidden max-md:w-[44.8vw]"
                    >
                      <Image
                        src="/assets/images/topic-03.png"
                        alt=""
                        width={292}
                        height={207}
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  </SplideSlide>
                  <SplideSlide>
                    <Link
                      href="/"
                      className="block overflow-hidden max-md:w-[44.8vw]"
                    >
                      <Image
                        src="/assets/images/topic-04.png"
                        alt=""
                        width={292}
                        height={207}
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  </SplideSlide>
                </SplideTrack>
              </Splide>
            </div>
          </div>
        </div>
      </div>

      {/* Topics */}
      {/* <div className="bg-black/65 pt-2 pb-3 md:pt-4 md:pb-9 absolute bottom-0 inset-x-0">
        <p className="font-bebas-neue mb-1 text-center text-[26px] tracking-widest text-white md:mb-4 md:text-[44px]">
          TOPICS
        </p>
        <div className="topics-slider md:pl-[7%]">
          <Splide
            options={{
              type: 'loop',
              autoWidth: true,
              arrows: false,
              gap: '1.5rem',
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
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev -top-6.5! translate-y-0! bg-transparent!">
                <svg
                  className="h-3.25! w-2.5!"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.000161171 1.05997L1.06084 -2.86102e-05L6.83984 5.77697C6.93299 5.86954 7.00692 5.97961 7.05737 6.10086C7.10782 6.22212 7.13379 6.35214 7.13379 6.48347C7.13379 6.6148 7.10782 6.74483 7.05737 6.86608C7.00692 6.98733 6.93299 7.0974 6.83984 7.18997L1.06084 12.97L0.000838757 11.91L5.42484 6.48497L-0.000161171 1.05997Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="splide__arrow splide__arrow--next -top-6.5! translate-y-0! bg-transparent!">
                <svg
                  className="h-3.25! w-2.5!"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.000161171 1.05997L1.06084 -2.86102e-05L6.83984 5.77697C6.93299 5.86954 7.00692 5.97961 7.05737 6.10086C7.10782 6.22212 7.13379 6.35214 7.13379 6.48347C7.13379 6.6148 7.10782 6.74483 7.05737 6.86608C7.00692 6.98733 6.93299 7.0974 6.83984 7.18997L1.06084 12.97L0.000838757 11.91L5.42484 6.48497L-0.000161171 1.05997Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <SplideTrack>
              <SplideSlide>
                <Link
                  href="/"
                  className="block overflow-hidden max-md:w-[44.8vw]"
                >
                  <Image
                    src="/assets/images/topic-01.png"
                    alt=""
                    width={292}
                    height={207}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link
                  href="/"
                  className="block overflow-hidden max-md:w-[44.8vw]"
                >
                  <Image
                    src="/assets/images/topic-02.png"
                    alt=""
                    width={292}
                    height={207}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link
                  href="/"
                  className="block overflow-hidden max-md:w-[44.8vw]"
                >
                  <Image
                    src="/assets/images/topic-03.png"
                    alt=""
                    width={292}
                    height={207}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link
                  href="/"
                  className="block overflow-hidden max-md:w-[44.8vw]"
                >
                  <Image
                    src="/assets/images/topic-04.png"
                    alt=""
                    width={292}
                    height={207}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </div> */}
    </div>
  );
};

export default HomeFv;
