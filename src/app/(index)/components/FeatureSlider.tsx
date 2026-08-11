'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import Image from 'next/image';

const TAGS = {
  channel: {
    label: 'チャンネル',
    icon: '/assets/icons/ic-channel.svg',
    color: 'bg-[#DD4141]',
  },
  drop: {
    label: 'ドロップ',
    icon: '/assets/icons/ic-drop.svg',
    color: 'bg-[#5538C8]',
  },
};

export type FeatureContent = {
  image: string;
  tag: keyof typeof TAGS;
  text: string;
};

type FeatureSliderProps = {
  contents: FeatureContent[];
  label: string;
};

const FeatureSlider = ({ contents, label }: FeatureSliderProps) => {
  return (
    <Splide
      hasTrack={false}
      aria-label={label}
      options={{
        type: 'loop',
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: '40px',
        perMove: 1,
        breakpoints: {
          767: { gap: '20px' },
        },
      }}
      className="-mr-5 overflow-hidden rounded-[12px] md:-mr-15"
    >
      <div className="splide__track">
        <ul className="splide__list">
          {contents.map((content, index) => {
            const tag = TAGS[content.tag];

            return (
              <SplideSlide key={index} className="w-[280px] md:w-[320px]">
                <div className="flex flex-col gap-5">
                  <div className="relative aspect-[359/360] w-full overflow-hidden rounded-xl bg-[#E0E0E0]">
                    <Image
                      src={content.image}
                      alt=""
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`flex w-fit items-center gap-2 rounded-full px-3 py-0.5 ${tag.color}`}
                  >
                    <Image
                      src={tag.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                    />
                    <span className="text-[15px] leading-[1.87] font-medium tracking-[0.04em] text-white">
                      {tag.label}
                    </span>
                  </div>
                  <p className="line-clamp-4 text-[16px] leading-[1.8] font-medium tracking-[0.04em] text-[#242424] md:text-[20px]">
                    {content.text}
                  </p>
                </div>
              </SplideSlide>
            );
          })}
        </ul>
      </div>
    </Splide>
  );
};

export default FeatureSlider;
