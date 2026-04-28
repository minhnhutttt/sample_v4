'use client';

import { useEffect, useRef, useState } from 'react';

const mainFont = { fontFamily: 'var(--font-family-main, Inter)' };
const STICKY_BG_HEIGHT = 726;
const subPrimaryBg = 'var(--_color-primary-10, #FFF8F2)';

const WorldviewStorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [bgMode, setBgMode] = useState<'before' | 'fixed' | 'after'>('before');

  useEffect(() => {
    const onScroll = () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;
      const rect = sectionEl.getBoundingClientRect();

      if (rect.top > 0) {
        setBgMode('before');
        return;
      }
      if (rect.bottom > STICKY_BG_HEIGHT) {
        setBgMode('fixed');
        return;
      }
      setBgMode('after');
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative z-10 h-[4020px] overflow-hidden max-xl:h-[3680px] max-lg:h-auto max-lg:pb-[100px] max-md:h-auto"
        style={{ backgroundColor: subPrimaryBg }}
      >
        <div className="relative z-20 mx-auto h-full max-w-[1280px]">
          <div
            className={`pointer-events-none z-[2] h-[726px] w-[1280px] overflow-hidden ${
              bgMode === 'fixed'
                ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                : 'absolute left-1/2 -translate-x-1/2'
            }`}
            style={
              bgMode === 'after'
                ? { top: 'calc(100% - 726px)', backgroundColor: subPrimaryBg }
                : bgMode === 'before'
                  ? { top: 0, backgroundColor: subPrimaryBg }
                  : { backgroundColor: subPrimaryBg }
            }
          >
            <img
              src="/assets/images/app/bg-app-kivo.svg"
              alt=""
              className="absolute top-1/2 left-1/2 h-[706.206px] w-[1279.998px] -translate-x-1/2 -translate-y-1/2 opacity-[1.3]"
              style={{ mixBlendMode: 'color-burn' }}
            />
          </div>

          <svg
            className="pointer-events-none absolute bottom-[-210px] left-1/2 z-[5] -translate-x-1/2 max-lg:hidden"
            width="2110"
            height="815"
            viewBox="0 0 1280 605"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <ellipse cx="640" cy="407.5" rx="1055" ry="407.5" fill="#F98528" />
          </svg>
          <img
            src="/assets/images/app/ellipse-01.svg"
            alt=""
            className="pointer-events-none absolute top-[2140px] left-1/2 z-[5] hidden w-[920px] max-w-none -translate-x-1/2 max-md:top-[2140px] max-md:w-[760px]"
          />

          <div className="absolute inset-0 z-10 max-lg:relative max-lg:inset-auto max-lg:flex max-lg:flex-col max-lg:px-[16px]">
            <img
              src="/assets/images/app/worldview-curve.svg"
              alt=""
              className="pointer-events-none absolute top-[-70px] left-[calc(50%-800px)] h-[3495.5px] w-[1222.747px] max-lg:hidden"
            />
            <img
              src="/assets/images/app/worldview-curve-sp.svg"
              alt=""
              className="pointer-events-none absolute top-[92px] left-[-38px] z-[0] hidden h-[3300px] w-[760px] max-w-none max-lg:block max-md:h-[2684px] max-md:w-[384px]"
            />

            <div className="absolute top-[400px] left-[60px] max-xl:top-[280px] max-xl:right-[16px] max-xl:left-[16px] max-lg:relative max-lg:top-auto max-lg:right-auto max-lg:left-auto max-lg:mt-[300px]">
              <div className="inline-flex items-center rounded-[6px] bg-[#F98528] px-[20px] py-[12px] max-lg:px-[18px] max-lg:py-[10px] max-md:px-[16px] max-md:py-[8px]">
                <p
                  className="text-[80px] leading-[1.2] font-black tracking-[0.8px] text-white max-xl:text-[56px] max-lg:text-[44px] max-lg:tracking-[0.44px] max-md:text-[34px] max-md:tracking-[0.34px]"
                  style={mainFont}
                >
                  <span className="max-lg:block">それでも、</span>
                  <span className="max-lg:block">売れた。</span>
                </p>
              </div>
            </div>

            <div
              className="absolute top-[1020px] left-[60px] z-[15] flex flex-col gap-[160px] text-[28px] leading-[1.58] font-medium tracking-[0.84px] text-[#242424] max-xl:top-[760px] max-xl:right-[16px] max-xl:left-[16px] max-xl:w-auto max-xl:gap-[96px] max-xl:text-[22px] max-lg:relative max-lg:top-auto max-lg:right-auto max-lg:left-auto max-lg:mt-[300px] max-lg:text-[18px]"
              style={mainFont}
            >
              <p className="w-[762px] max-xl:w-full max-lg:w-[290px] max-md:w-[310px]">
                こんなので売れるのかな、と思いながら寝る前に値段をつけて投稿。
              </p>
              <p className="w-[762px] max-xl:w-full">
                翌朝、3人が買っていました。
              </p>
            </div>

            <div className="absolute top-[1812px] left-[60px] max-xl:top-[1400px] max-xl:right-[16px] max-xl:left-[16px] max-lg:relative max-lg:top-auto max-lg:right-auto max-lg:left-auto max-lg:mt-[300px]">
              <div className="inline-flex items-center rounded-[6px] bg-[#F98528] px-[20px] py-[12px]">
                <p
                  className="text-[80px] leading-[1.2] font-black tracking-[0.8px] text-white max-xl:text-[56px] max-md:text-[40px]"
                  style={mainFont}
                >
                  誰もがすでに、
                  <br />
                  クリエイターの手前にいます。
                </p>
              </div>
            </div>

            <div
              className="absolute top-[2514px] left-[638px] flex w-[578px] flex-col gap-[160px] text-[28px] leading-[1.58] font-medium tracking-[0.84px] text-[#242424] max-xl:top-[2120px] max-xl:right-[16px] max-xl:left-auto max-xl:w-[283px] max-xl:items-end max-xl:gap-[96px] max-xl:text-left max-xl:text-[22px] max-lg:relative max-lg:top-auto max-lg:right-auto max-lg:left-auto max-lg:mt-[300px] max-lg:w-full max-lg:items-end max-lg:gap-[140px] max-lg:text-[18px]"
              style={mainFont}
            >
              <p className="max-lg:w-[283px] max-lg:text-left">
                ただ、行動する人は少ない。努力やスキルが足りないからじゃない。その場所を知らなかっただけです。
              </p>
              <p className="max-lg:w-[283px] max-lg:text-left">
                知らないまま時間が過ぎると、生まれるはずだったファンとの出会いも、積み上がるはずだった収益も、誰にも届かないまま消えていく。
              </p>
            </div>

            <div className="absolute top-[3605px] left-1/2 -translate-x-1/2 max-xl:top-[3320px] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:mt-[426px] max-lg:translate-x-0">
              <img
                src="/assets/images/app/ellipse-01.svg"
                alt=""
                className="pointer-events-none absolute top-1/2 left-1/2 z-[0] h-[500px] w-screen max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-top"
              />
              <p
                className="relative z-[2] text-center text-[88px] leading-[119%] font-bold tracking-[0] text-[#242424] max-xl:w-[calc(100vw-32px)] max-xl:text-[48px] max-lg:text-[38px]"
                style={mainFont}
              >
                <span className="block whitespace-nowrap max-lg:inline max-lg:whitespace-normal">
                  あなたが届けられるものを、
                </span>
                <span className="block whitespace-nowrap max-lg:inline max-lg:whitespace-normal">
                  まだ眠らせておく理由は、
                </span>
                <span className="block whitespace-nowrap max-lg:inline max-lg:whitespace-normal">
                  あるでしょうか。
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-20 hidden flex-col px-[16px]">
          <div className="mt-[300px] inline-flex items-center self-start rounded-[6px] bg-[#F98528] px-[16px] py-[8px]">
            <p
              className="text-[34px] leading-[1.2] font-black tracking-[0.34px] text-white"
              style={mainFont}
            >
              <span className="block">それでも、</span>
              <span className="block">売れた。</span>
            </p>
          </div>

          <div
            className="mt-[300px] w-[283px] text-[18px] leading-[1.58] font-medium tracking-[0.84px] text-[#242424]"
            style={mainFont}
          >
            <p>
              こんなので売れるのかな、と思いながら寝る前に値段をつけて投稿。
            </p>
            <p className="mt-[140px]">翌朝、3人が買っていました。</p>
          </div>

          <div className="mt-[300px] inline-flex items-center self-start rounded-[6px] bg-[#F98528] px-[20px] py-[12px]">
            <p
              className="text-[40px] leading-[1.2] font-black tracking-[0.4px] text-white"
              style={mainFont}
            >
              誰もがすでに、
              <br />
              クリエイターの手前にいます。
            </p>
          </div>

          <div
            className="mt-[300px] flex w-full flex-col items-end gap-[140px] text-[17px] leading-[1.58] font-medium tracking-[0.84px] text-[#242424]"
            style={mainFont}
          >
            <p className="w-[283px] text-left">
              ただ、行動する人は少ない。努力やスキルが足りないからじゃない。その場所を知らなかっただけです。
            </p>
            <p className="w-[283px] text-left">
              知らないまま時間が過ぎると、生まれるはずだったファンとの出会いも、積み上がるはずだった収益も、誰にも届かないまま消えていく。
            </p>
          </div>

          <div className="relative mt-[426px] self-center">
            <img
              src="/assets/images/app/ellipse-01.svg"
              alt=""
              className="pointer-events-none absolute top-1/2 left-1/2 z-[0] w-[760px] max-w-none -translate-x-1/2 -translate-y-1/2"
            />
            <p
              className="relative z-[2] w-[calc(100vw-32px)] text-center text-[34px] leading-[119%] font-bold tracking-[0] text-[#242424]"
              style={mainFont}
            >
              あなたが届けられるものを、まだ眠らせておく理由は、あるでしょうか。
            </p>
          </div>
        </div>
      </section>

      <section className="hidden">
        <div className="mx-auto w-full max-w-[720px]">
          <div className="rounded-[6px] bg-[#F98528] px-[16px] py-[12px]">
            <p
              className="text-[42px] leading-[1.2] font-black tracking-[0.6px] text-white max-md:text-[34px]"
              style={mainFont}
            >
              それでも、売れた。
            </p>
          </div>

          <div
            className="mt-[52px] space-y-[40px] text-[18px] leading-[1.7] font-medium tracking-[0.4px] text-[#242424] max-md:text-[13px]"
            style={mainFont}
          >
            <p>
              こんなので売れるのかな、と思いながら寝る前に値段をつけて投稿。翌朝、3人が買っていました。
            </p>
            <p>誰もがすでに、クリエイターの手前にいます。</p>
            <p>
              努力やスキルが足りないからじゃない。その場所を知らなかっただけです。
            </p>
            <p>
              知らないまま時間が過ぎると、生まれるはずだった出会いも収益も、誰にも届かないまま消えていく。
            </p>
          </div>

          <p
            className="mt-[68px] text-center text-[40px] leading-[1.25] font-bold tracking-[0.4px] text-[#242424] max-md:text-[30px]"
            style={mainFont}
          >
            <span className="max-md:inline md:block">
              あなたが届けられるものを、
            </span>
            <span className="max-md:inline md:block">
              まだ眠らせておく理由は、
            </span>
            <span className="max-md:inline md:block">あるでしょうか。</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default WorldviewStorySection;
