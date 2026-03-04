'use client';

import { useEffect, useRef } from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function GameSlider() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mainRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const thumbsRef = useRef<any>(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const images = [
    '/assets/images/game-img-01.png',
    '/assets/images/game-img-02.png',
    '/assets/images/game-img-03.png',
    '/assets/images/game-img-04.png',
  ];

  return (
    <div className="md:w-[558px]">
      {/* Slider chính */}
      <Splide
        options={{
          type: 'fade',
          rewind: true,
          pagination: false,
          arrows: false,
        }}
        ref={mainRef}
      >
        {images.map((src, index) => (
          <SplideSlide key={index}>
            <img src={src} className="h-auto w-full rounded-lg" />
          </SplideSlide>
        ))}
      </Splide>

      {/* Thumbnail slider */}
      <Splide
        options={{
          gap: 10,
          rewind: true,
          pagination: false,
          isNavigation: true,
          focus: 'center',
          arrows: false,
          perPage: 4,
        }}
        ref={thumbsRef}
        className="mt-4"
      >
        {images.map((src, index) => (
          <SplideSlide key={index}>
            <img
              src={src}
              className="h-full w-full cursor-pointer rounded-md object-cover"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
