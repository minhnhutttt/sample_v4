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
            href="/"
            className="flex h-14 w-[260px] items-center justify-center gap-5 bg-[#FF4E4E] text-[16px] font-bold text-white md:h-[70px] md:w-[300px] md:text-[20px]"
          >
            パートナー企業一覧
            <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
              <svg
                className="size-4 md:size-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_5030_4"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_5030_4)">
                  <path
                    d="M12.3592 10.0003L6.08188 3.72303C5.91633 3.55748 5.8357 3.36039 5.84001 3.13178C5.84431 2.90317 5.92924 2.70602 6.0948 2.54033C6.26035 2.37477 6.45744 2.29199 6.68605 2.29199C6.91466 2.29199 7.11181 2.37477 7.27751 2.54033L13.6573 8.93303C13.8079 9.08373 13.9195 9.25255 13.9921 9.43949C14.0649 9.62644 14.1013 9.81338 14.1013 10.0003C14.1013 10.1873 14.0649 10.3742 13.9921 10.5612C13.9195 10.7481 13.8079 10.9169 13.6573 11.0676L7.26459 17.4603C7.09904 17.6259 6.9041 17.7065 6.6798 17.7022C6.45535 17.6979 6.26035 17.613 6.0948 17.4474C5.92924 17.2819 5.84647 17.0848 5.84647 16.8562C5.84647 16.6275 5.92924 16.4304 6.0948 16.2647L12.3592 10.0003Z"
                    fill="#FF5757"
                  />
                </g>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePartner;
