'use client';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';

import Title from '@/components/common/Title';

const HomePartner = () => {
  return (
    <div className="px-5 pt-20 pb-[160px] md:pt-27 md:pb-[280px]">
      <div className="mx-auto w-full max-w-[1200px]">
        <Title title="PARTNER" sub="パートナー" />
        <div className="my-10 md:my-25">
          <Splide
            options={{
              type: 'loop',
              perPage: 1,
              autoplay: true,
              interval: 7000,
              arrows: false,
              pagination: false,
            }}
            hasTrack={false}
          >
            <SplideTrack>
              <SplideSlide>
                <div className="flex flex-wrap gap-[3%] gap-y-5 md:gap-[45px]">
                  {Array.from({ length: 31 }, (_, i) => {
                    const index = String(i + 1).padStart(2, '0');
                    const imgSrc = `/assets/images/partner-01-${index}.png`;

                    return (
                      <div key={index} className="block max-md:max-w-[30%]">
                        <img src={imgSrc} alt={`partner-${index}`} />
                      </div>
                    );
                  })}
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex flex-wrap gap-[3%] gap-y-5 md:gap-[45px]">
                  {Array.from({ length: 32 }, (_, i) => {
                    const index = String(i + 1).padStart(2, '0');
                    const imgSrc = `/assets/images/partner-02-${index}.png`;

                    return (
                      <div key={index} className="block max-md:max-w-[30%]">
                        <img src={imgSrc} alt={`partner-${index}`} />
                      </div>
                    );
                  })}
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex flex-wrap gap-[3%] gap-y-5 md:gap-[45px]">
                  {Array.from({ length: 27 }, (_, i) => {
                    const index = String(i + 1).padStart(2, '0');
                    const imgSrc = `/assets/images/partner-03-${index}.png`;

                    return (
                      <div key={index} className="block max-md:max-w-[30%]">
                        <img src={imgSrc} alt={`partner-${index}`} />
                      </div>
                    );
                  })}
                </div>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
        <div className="flex justify-center">
          <Link
            href="/partners"
            className="flex h-14 w-[260px] items-center justify-center gap-5 bg-[#FF4E4E] text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[70px] md:w-[300px] md:text-[20px]"
          >
            パートナー企業一覧
            <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
              <img
                src="/assets/images/btn-arrow.svg"
                className="max-md:w-4"
                alt=""
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePartner;
