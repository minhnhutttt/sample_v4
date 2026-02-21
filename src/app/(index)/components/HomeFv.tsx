'use client';

import { useEffect, useRef } from 'react';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import type { Splide as SplideInstance } from '@splidejs/splide';
import Image from 'next/image';

const HomeFv = () => {
  const splideLeft = useRef<{ splide: SplideInstance } | null>(null);
  const splideCenter = useRef<{ splide: SplideInstance } | null>(null);
  const splideRight = useRef<{ splide: SplideInstance } | null>(null);

  useEffect(() => {
    if (splideLeft.current && splideCenter.current && splideRight.current) {
      // lấy instance thật của splide
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
  };

  return (
    <div className="relative flex justify-center overflow-hidden bg-[url(/assets/images/fv-bg.png)] bg-cover py-2 md:pt-10 md:pb-16.5">
      <span className="absolute top-4 right-4 max-md:hidden">
        <Image
          src="/assets/images/united.png"
          alt=""
          width={66}
          height={33}
          className=""
        />
      </span>
      {/* LEFT */}
      <div className="fv-slider absolute aspect-906/510 w-[63vw] origin-[right_center] translate-x-[calc(-100%-4.86111vw)] scale-[.667] opacity-70 max-md:hidden">
        <Splide options={options} hasTrack={false} ref={splideLeft}>
          <SplideTrack>
            <SplideSlide>
              <div className="slide-clip">
                <Image
                  src="/assets/images/banner-03.png"
                  alt=""
                  width={906}
                  height={510}
                  className="w-[63vw]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide-clip">
                <Image
                  src="/assets/images/banner-01.png"
                  alt=""
                  width={906}
                  height={510}
                  className="w-[63vw]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide-clip">
                <Image
                  src="/assets/images/banner-02.png"
                  alt=""
                  width={906}
                  height={510}
                  className="w-[63vw]"
                />
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>

      {/* CENTER */}
      <div className="fv-slider w-[calc(100vw-16px)] md:w-[63vw]">
        <Splide
          options={{ ...options, pagination: true }}
          hasTrack={false}
          ref={splideCenter}
        >
          <SplideTrack>
            <SplideSlide>
              <div className="slide-clip">
                <Image
                  src="/assets/images/banner-01.png"
                  alt=""
                  width={906}
                  height={510}
                  className="w-[calc(100vw-16px)] md:w-[63vw]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide-clip">
                <Image
                  src="/assets/images/banner-02.png"
                  alt=""
                  width={906}
                  height={510}
                  className="w-[calc(100vw-16px)] md:w-[63vw]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide-clip">
                <Image
                  src="/assets/images/banner-03.png"
                  alt=""
                  width={906}
                  height={510}
                  className="w-[calc(100vw-16px)] md:w-[63vw]"
                />
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>

      {/* RIGHT */}
      <div className="fv-slider absolute aspect-906/510 w-[63vw] origin-[left_center] translate-x-[calc(100%+4.86111vw)] scale-[.667] opacity-70 max-md:hidden">
        <Splide options={options} hasTrack={false} ref={splideRight}>
          <SplideTrack>
            <SplideSlide>
              <div className="slide-clip">
                <Image
                  src="/assets/images/banner-02.png"
                  alt=""
                  width={906}
                  height={510}
                  className="w-[63vw]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide-clip">
                <Image
                  src="/assets/images/banner-03.png"
                  alt=""
                  width={906}
                  height={510}
                  className="w-[63vw]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="slide-clip">
                <Image
                  src="/assets/images/banner-01.png"
                  alt=""
                  width={906}
                  height={510}
                  className="w-[63vw]"
                />
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
    </div>
  );
};

export default HomeFv;
