'use client';

import { useEffect, useRef } from 'react';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import type { Splide as SplideInstance } from '@splidejs/splide';
import Image from 'next/image';
import Link from 'next/link';

const HomeFv = () => {
  const splideLeft = useRef<{ splide: SplideInstance } | null>(null);
  const splideCenter = useRef<{ splide: SplideInstance } | null>(null);
  const splideRight = useRef<{ splide: SplideInstance } | null>(null);

  useEffect(() => {
    if (splideLeft.current && splideCenter.current && splideRight.current) {
      const left = splideLeft.current.splide;
      const center = splideCenter.current.splide;
      const right = splideRight.current.splide;

      center.sync(left);
      center.sync(right);
    }
    const center = splideCenter.current?.splide;
    if (!center) return;

    const sliders = document.querySelectorAll('.fv-slider');

    center.on('move', () => {
      sliders.forEach((el) => el.classList.add('is-closing'));
    });

    center.on('moved', () => {
      setTimeout(() => {
        sliders.forEach((el) => el.classList.remove('is-closing'));
      }, 400);
    });
  }, []);

  const options = {
    type: 'fade',
    rewind: true,
    autoWidth: true,
    speed: 400,
    arrows: false,
    pagination: false,
    autoplay: true,
  };

  return (
    <div className="relative bg-[url(/assets/images/fv-bg.png)] bg-cover">
      <div className="relative flex justify-center overflow-hidden py-3 md:pt-10 md:pb-16.5">
        {/* LEFT */}
        <div className="fv-slider absolute aspect-906/510 w-[63vw] origin-[right_center] translate-x-[calc(-100%-4.86111vw)] scale-[.667] opacity-70 max-md:hidden">
          <Splide options={options} hasTrack={false} ref={splideLeft}>
            <SplideTrack>
              <SplideSlide>
                <Link href="/" className="slide-clip block">
                  <Image
                    src="/assets/images/banner-03.png"
                    alt=""
                    width={906}
                    height={510}
                    className="w-[63vw]"
                  />
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link href="/" className="slide-clip block">
                  <Image
                    src="/assets/images/banner-01.png"
                    alt=""
                    width={906}
                    height={510}
                    className="w-[63vw]"
                  />
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link href="/" className="slide-clip block">
                  <Image
                    src="/assets/images/banner-02.png"
                    alt=""
                    width={906}
                    height={510}
                    className="w-[63vw]"
                  />
                </Link>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>

        {/* CENTER */}
        <div className="fv-slider w-[calc(100vw-16px)] md:w-[63vw]">
          <Splide
            options={{
              ...options,
              pagination: true,
              breakpoints: { 767: { pagination: false } },
            }}
            hasTrack={false}
            ref={splideCenter}
          >
            <SplideTrack>
              <SplideSlide>
                <Link href="/" className="slide-clip block overflow-hidden">
                  <Image
                    src="/assets/images/banner-01.png"
                    alt=""
                    width={906}
                    height={510}
                    className="w-[calc(100vw-16px)] transition-transform duration-300 hover:scale-105 md:w-[63vw]"
                  />
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link href="/" className="slide-clip block overflow-hidden">
                  <Image
                    src="/assets/images/banner-02.png"
                    alt=""
                    width={906}
                    height={510}
                    className="w-[calc(100vw-16px)] transition-transform duration-300 hover:scale-105 md:w-[63vw]"
                  />
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link href="/" className="slide-clip block overflow-hidden">
                  <Image
                    src="/assets/images/banner-03.png"
                    alt=""
                    width={906}
                    height={510}
                    className="w-[calc(100vw-16px)] transition-transform duration-300 hover:scale-105 md:w-[63vw]"
                  />
                </Link>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>

        {/* RIGHT */}
        <div className="fv-slider absolute aspect-906/510 w-[63vw] origin-[left_center] translate-x-[calc(100%+4.86111vw)] scale-[.667] opacity-70 max-md:hidden">
          <Splide options={options} hasTrack={false} ref={splideRight}>
            <SplideTrack>
              <SplideSlide>
                <Link href="/" className="slide-clip block">
                  <Image
                    src="/assets/images/banner-02.png"
                    alt=""
                    width={906}
                    height={510}
                    className="w-[63vw]"
                  />
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link href="/" className="slide-clip block">
                  <Image
                    src="/assets/images/banner-03.png"
                    alt=""
                    width={906}
                    height={510}
                    className="w-[63vw]"
                  />
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link href="/" className="slide-clip block">
                  <Image
                    src="/assets/images/banner-01.png"
                    alt=""
                    width={906}
                    height={510}
                    className="w-[63vw]"
                  />
                </Link>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </div>

      {/* Topics */}
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
  );
};

export default HomeFv;
