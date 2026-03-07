'use client';

import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '@/components/button';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: 'acorn',
    iconBg: '#4AA3A6',
    icon: '/assets/images/acorn.png',
    title: 'Acorn Creator Suite',
    description:
      'Connect with vetted creators to craft authentic content that drives engagement, amplifies reach, and fuels measurable growth across digital and retail channels.',
    image: '/assets/images/solution-01.png',
  },
  {
    id: 'donut',
    iconBg: '#d65522',
    icon: '/assets/images/donut.png',
    title: 'Donut Studios',
    description:
      'Create audience-first, performance-driven content—from short-form videos to premium campaigns—that captivates, converts, and scales across digital platforms.',
    image: '/assets/images/solution-02.png',
  },
  {
    id: 'digital',
    iconBg: '#4AA3A6',
    icon: '/assets/images/acorn.png',
    title: 'Digital Media',
    description:
      'Create audience-first, performance-driven content—from short-form videos to premium campaigns—that captivates, converts, and scales across digital platforms.',
    image: '/assets/images/solution-03.png',
  },
  {
    id: 'commerce',
    iconBg: '#4AA3A6',
    icon: '/assets/images/acorn.png',
    title: 'Commerce Intelligence',
    description:
      'Create audience-first, performance-driven content—from short-form videos to premium campaigns—that captivates, converts, and scales across digital platforms.',
    image: '/assets/images/solution-04.png',
  },
];

const HomeSolutions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<
    Array<{ content: HTMLDivElement | null; image: HTMLDivElement | null }>
  >([]);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const initAnimation = () => {
      ctx?.revert();
      ctx = null;

      const isDesktop = window.matchMedia('(min-width: 768px)').matches;

      if (!isDesktop) {
        itemRefs.current.forEach(({ image, content }) => {
          if (image) gsap.set(image, { clearProps: 'all' });
          if (content) gsap.set(content, { clearProps: 'all' });
        });
        return;
      }

      ctx = gsap.context(() => {
        itemRefs.current.forEach(({ content, image }) => {
          if (!content || !image) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: content,
              start: 'top 60%',
              end: 'bottom 20%',
              scrub: 2.5,
            },
          });

          gsap.set(image, {
            y: gsap.utils.random(0, 400),
            x: gsap.utils.random(0, 40),
            rotation: gsap.utils.random(-4, 12),
          });
          tl.to(
            image,
            {
              y: gsap.utils.random(-115, 0),
              x: gsap.utils.random(0, 10),
              opacity: 0.2,
              rotation: gsap.utils.random(-2, 2),
              ease: 'none',
            },
            0,
          );
          tl.to(
            content,
            { opacity: 0.2, y: gsap.utils.random(-30, 0), ease: 'none' },
            0,
          );
        });
      }, sectionRef);
    };

    initAnimation();

    const mq = window.matchMedia('(min-width: 768px)');
    mq.addEventListener('change', initAnimation);

    return () => {
      mq.removeEventListener('change', initAnimation);
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-2 w-full bg-[#242424] pt-[9rem] pb-[9rem] text-white md:pt-[17.5rem] md:pb-[20rem]"
    >
      <div className="site-max">
        <div className="flex flex-col items-center gap-y-[2.5rem] text-center md:gap-y-[3.5rem]">
          <h2 className="h7 font-bold">Solutions</h2>
          <h3 className="h2 w-full md:max-w-[145rem]">
            Our marketing solutions turn engagement into measurable growth.
          </h3>
        </div>

        <div className="relative z-2 w-full space-y-[10rem] py-[10rem] md:mx-auto md:max-w-[125rem]">
          {solutions.map((sol, i) => (
            <div
              key={sol.id}
              className="flex justify-between gap-[2.5rem] max-md:flex-col-reverse md:gap-[4rem]"
            >
              {/* Content left */}
              <div
                ref={(el) => {
                  if (!itemRefs.current[i])
                    itemRefs.current[i] = { content: null, image: null };
                  itemRefs.current[i].content = el;
                }}
                className="flex w-full flex-col gap-y-[5rem] md:max-w-[50rem]"
              >
                <div className="flex flex-col items-start md:py-[10rem]">
                  <div
                    className="hexagon-mask relative mb-[4rem] flex h-[15rem] w-[13.5rem] items-center justify-center overflow-hidden max-md:hidden"
                    style={{ backgroundColor: sol.iconBg }}
                  >
                    <div className="media-contain relative size-[7rem]">
                      <img
                        src={sol.icon}
                        alt=""
                        className="absolute inset-0 object-contain"
                      />
                    </div>
                  </div>
                  <p className="h3 font-bold">{sol.title}</p>
                  <p className="h4 mt-[.8rem]">{sol.description}</p>
                  <div className="btn bg-pink radius-global relative mt-[4rem] inline-flex overflow-hidden text-black md:mt-[6rem]">
                    <Button href="#" text="Learn more" />
                  </div>
                </div>
              </div>

              {/* Image right */}
              <div
                ref={(el) => {
                  if (!itemRefs.current[i])
                    itemRefs.current[i] = { content: null, image: null };
                  itemRefs.current[i].image = el;
                }}
                className="flex w-full flex-col gap-y-[5rem] will-change-transform md:max-w-[50rem]"
              >
                <img src={sol.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSolutions;
