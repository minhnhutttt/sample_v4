'use client';

import { useRef, useState } from 'react';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

import Article from '@/components/common/Article';
import Button from '@/components/common/Button';

const HomeSlider = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const splideRef = useRef(null);

  const triggerScale = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  return (
    <div className="my-16 px-2 text-center md:my-[170px]">
      <h3 className="mb-8 text-[35px] font-black md:text-[70px]">
        KIVOを選んでいるのは、
        <br className="md:hidden" />
        こんな方たちです。
      </h3>

      <div className="drag-slider">
        <Splide
          ref={splideRef}
          options={{
            type: 'slide',
            gap: '0.5rem',
            autoWidth: true,
            drag: true,
            snap: false,
            speed: 2000,
            focus: 'center',
            arrows: false,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          hasTrack={false}
          onDrag={triggerScale}
        >
          <SplideTrack>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <SplideSlide key={item}>
                <div
                  className={`transition-transform duration-1000 ease-out ${isAnimating ? 'scale-[0.98]' : 'scale-100'} `}
                >
                  <Article
                    md
                    isAnimating={isAnimating}
                    image="/assets/images/dummy.png"
                    title="専門性を、軽く扱われたくない人"
                    text={
                      <>
                        仕事や経験から得た知識を、「軽く扱われたくない」と感じている人。
                      </>
                    }
                  />
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>

      <div className="my-[65px] md:my-[170px]">
        <p className="text-center text-[18px] font-semibold md:text-[30px]">
          KIVOは価値ある情報を、
          <br className="md:hidden" />
          大切に、そして正しく届けるための場所です。
        </p>
        <div className="mt-[35px] md:mt-[90px]">
          <Button />
        </div>
      </div>

      <div className="splide-slider mx-auto w-full max-w-[1440px] px-2">
        <h3 className="text-[24px] font-black md:text-[50px]">
          あ、余談ですが、
          <br className="md:hidden" />
          こんな方にも…
        </h3>
        <div className="my-20 md:my-[150px]">
          <Splide
            ref={splideRef}
            options={{
              arrows: false,
            }}
            hasTrack={false}
          >
            <SplideTrack>
              {[1, 2, 3, 4].map((item) => (
                <SplideSlide key={item}>
                  <Image
                    src={`/assets/images/${`card-0${item}`}.jpg`}
                    alt="phone"
                    width={1440}
                    height={854}
                  />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </div>
      <p className="text-center text-[18px] font-bold md:text-[30px]">
        いつでも安心です。
      </p>
    </div>
  );
};

export default HomeSlider;
