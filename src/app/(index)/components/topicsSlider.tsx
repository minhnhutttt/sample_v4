'use client';

import { ReactNode } from 'react';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

import { TransitionLink } from '@/components/navigation/TransitionLink';

const SliderItem = ({
  text,
  link,
  image,
}: {
  text: ReactNode;
  link: string;
  image: string;
}) => (
  <SplideSlide>
    <TransitionLink
      href={link}
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
    </TransitionLink>
  </SplideSlide>
);

export type TopicItem = {
  link: string;
  text: string;
  image: string;
};

const TopicsSlider = ({ items }: { items: TopicItem[] }) => {
  return (
    <div className="topics-slider relative z-30">
      <Splide
        options={{
          type: 'loop',
          autoWidth: true,
          arrows: false,
          focus: 'center',
          gap: '1.5rem',
          autoplay: true,
          pagination: false,
        }}
        hasTrack={false}
      >
        <SplideTrack>
          {items.map((item, i) => (
            <SliderItem
              key={i}
              link={item.link}
              text={item.text}
              image={item.image}
            />
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default TopicsSlider;
