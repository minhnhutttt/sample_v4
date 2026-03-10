'use client';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

const News = () => {
  return (
    <div className="absolute right-0 bottom-0 flex h-[60px] justify-end">
      <div className="w-[61.25vw] bg-white">
        <Splide hasTrack={false} className="relative h-[60px] pr-[120px]">
          <SplideTrack>
            <SplideSlide>
              <div className="flex h-[60px] items-center gap-5 pr-20 pl-[35px] text-[14px]">
                <span className="w-[85px] text-center">2025.07.31</span>
                <span className="font-bold text-[#709cf3]">プレスリリース</span>
                <span className="">
                  株式会社OPExPARK
                  の医療⽤スマートレコーダー「OPeDrive®」に関する事業譲渡について
                </span>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex h-[60px] items-center gap-5 pr-20 pl-[35px] text-[14px]">
                <span className="w-[85px] text-center">2025.07.31</span>
                <span className="font-bold text-[#709cf3]">プレスリリース</span>
                <span className="">
                  株式会社OPExPARK
                  の医療⽤スマートレコーダー「OPeDrive®」に関する事業譲渡について
                </span>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex h-[60px] items-center gap-5 pr-20 pl-[35px] text-[14px]">
                <span className="w-[85px] text-center">2025.07.31</span>
                <span className="font-bold text-[#709cf3]">プレスリリース</span>
                <span className="">
                  株式会社OPExPARK
                  の医療⽤スマートレコーダー「OPeDrive®」に関する事業譲渡について
                </span>
              </div>
            </SplideSlide>
          </SplideTrack>
          <div className="splide__arrows absolute right-0 bottom-0 h-[60px] bg-white">
            <button className="splide__arrow splide__arrow--prev size-[60px]! border border-[#e2e9e9]">
              &#8592;
            </button>
            <button className="splide__arrow splide__arrow--next size-[60px]! border border-[#e2e9e9]">
              {' '}
              &#8594;
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default News;
