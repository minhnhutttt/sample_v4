'use client';

import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const HomeFv = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animaRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      !containerRef.current ||
      !animaRef.current ||
      !coverRef.current ||
      !logoRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=4000',
          scrub: true,
          pin: true,
          onLeave: () => {
            document.body.classList.add('loaded-fv');
          },
        },
      });

      tl.from(logoRef.current, {
        filter: 'blur(20px)',
        duration: 0.2,
        ease: 'none',
      })
        .to(animaRef.current, {
          skewX: 5,
          xPercent: -100,
          duration: 0.2,
          ease: 'none',
        })
        .to(animaRef.current, {
          skewX: 0,
          xPercent: 0,
          width: '100%',
          duration: 0.2,
          ease: 'none',
        })
        .to(animaRef.current, {
          skewX: 0,
          width: '120%',
          duration: 0.2,
          ease: 'none',
        })
        .to(logoRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: 'none',
        })
        .to(animaRef.current, {
          skewX: 5,
          xPercent: -100,
          width: '60%',
          duration: 0.2,
          ease: 'none',
        })
        .to(
          coverRef.current,
          {
            opacity: 0,
            duration: 0.2,
            ease: 'none',
          },
          '<',
        )
        .to(animaRef.current, {
          skewX: -5,
          x: -50,
          width: '0%',
          boxShadow: 'none',
          duration: 0.2,
          ease: 'none',
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative pt-28 max-md:flex max-md:h-screen max-md:items-center md:pt-33.5"
    >
      <div
        ref={coverRef}
        className="fixed inset-0 z-20 flex h-screen items-center justify-center bg-black"
      >
        <div ref={logoRef}>
          <Image
            src="/assets/images/kivo.svg"
            alt=""
            width={331}
            height={225}
            className="w-40 md:w-75.75"
          />
        </div>
      </div>
      {/* anima */}
      <div
        ref={animaRef}
        className="fixed top-0 bottom-0 left-0 z-90 h-screen w-0 -translate-x-12.5 -skew-x-[5deg] bg-[#D9D9D9]"
      />

      <div className="relative mx-auto w-full max-w-120 px-5 pb-50 text-white md:max-w-360 md:px-16.25 md:pb-14">
        <div className="relative z-10 flex justify-end">
          <div className="w-full max-w-179">
            <div className="flex justify-end md:justify-center">
              <Image
                src="/assets/images/kivo.svg"
                alt=""
                width={331}
                height={225}
                className="w-22 md:w-75.75"
              />
            </div>

            <h1 className="mt-2.5 text-right text-[24px] font-bold md:mt-20 md:text-[48px]">
              あなたが届ける情報には、
              <br />
              かけがえのない価値があります。
            </h1>

            <p className="mt-2.5 text-right text-[16px] font-bold md:mt-18 md:text-[24px] xl:text-[30px]">
              その価値が、正しく受け取られる場所
              <br />
              それがKIVOです
            </p>

            <div className="mt-9 flex justify-end gap-2.5 md:mt-20">
              <Link href="#">
                <Image
                  src="/assets/images/btn-appstore.png"
                  alt=""
                  width={280}
                  height={84}
                  className="w-32 md:w-70"
                />
                <p className="mt-0.5 text-right text-[12px] md:text-[16px]">
                  無料で始められます
                </p>
              </Link>

              <Link href="#" className="max-md:hidden">
                <Image
                  src="/assets/images/btn-google.png"
                  alt=""
                  width={280}
                  height={84}
                  className="w-32 md:w-70"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 max-md:w-[281px] min-[1024px]:w-[35%] min-[1380px]:w-[45%] md:left-14">
          <Image
            src="/assets/images/fv-img.png"
            alt=""
            width={655}
            height={766}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeFv;
