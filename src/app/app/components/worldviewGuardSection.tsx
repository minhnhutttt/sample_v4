'use client';

import { useEffect, useRef, useState } from 'react';

const mainFont = { fontFamily: 'var(--font-family-main, Inter)' };
const STICKY_BG_HEIGHT = 717;
const subPrimaryBg = 'var(--_color-primary-10, #FFF8F2)';

const WorldviewGuardSection = () => {
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
        className="relative z-20 h-[3486px] overflow-hidden max-lg:h-auto"
        style={{ backgroundColor: subPrimaryBg }}
      >
        <div
          className={`pointer-events-none z-[2] h-[717px] w-[1280px] overflow-hidden ${
            bgMode === 'fixed'
              ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              : 'absolute left-1/2 -translate-x-1/2'
          }`}
          style={
            bgMode === 'after'
              ? { top: 'calc(100% - 717px)', backgroundColor: subPrimaryBg }
              : bgMode === 'before'
                ? { top: 0, backgroundColor: subPrimaryBg }
                : { backgroundColor: subPrimaryBg }
          }
        >
          <img
            src="/assets/images/app/bg-app-worldview.svg"
            alt=""
            className="absolute top-1/2 left-1/2 h-[637px] w-[1280px] -translate-x-1/2 -translate-y-1/2 opacity-[1.3]"
            style={{ mixBlendMode: 'color-burn' }}
          />
        </div>

        <div className="relative z-10 mx-auto h-full w-full max-w-[1280px]">
          <img
            src="/assets/images/app/worldview-curve-guard.svg"
            alt=""
            className="pointer-events-none absolute top-[-76px] left-[calc(50%-355px)] h-[2932px] w-[708px] max-md:hidden"
          />

          <div className="absolute top-[388px] left-[60px] w-[1160px] max-lg:hidden">
            <p
              className="absolute top-4 left-[82px] text-center text-[20px] leading-[1.5] font-medium tracking-[40px] text-[#555555] max-lg:top-[-16px] max-lg:left-1/2 max-lg:-translate-x-[220px] max-lg:tracking-[24px] max-md:-translate-x-[150px]"
              style={mainFont}
            >
              SNS
            </p>

            <p
              className="w-[1160px] pt-[38px] text-[48px] leading-[1.5] font-bold tracking-[0.96px] text-[#242424] max-lg:w-full max-lg:pt-0 max-lg:text-center max-md:text-[30px]"
              style={mainFont}
            >
              <span className="block whitespace-nowrap max-lg:whitespace-normal">
                “今のゲームのルール”では、
              </span>
              <span className="block whitespace-nowrap max-lg:whitespace-normal">
                あなたの価値は守られない…
              </span>
            </p>

            <div className="mt-[60px] flex w-[1160px] justify-end max-lg:w-full max-lg:justify-center">
              <div className="inline-flex items-center gap-[10px] rounded-[6px] bg-[#F98528] px-[20px] py-[12px]">
                <p
                  className="text-[120px] leading-[114%] font-black tracking-[0] whitespace-nowrap text-white max-lg:text-center max-lg:text-[68px] max-lg:whitespace-normal max-md:text-[52px]"
                  style={mainFont}
                >
                  でも、KIVOなら
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-[1291px] left-[60px] w-[1160px] max-lg:hidden">
            <p
              className="w-full text-[28px] leading-[158%] font-medium tracking-[0.84px] text-[#242424] max-lg:text-center max-md:text-[18px]"
              style={mainFont}
            >
              SNSは、フォロワーを増やすゲームになりました。
              <br />
              投稿は広告の間に沈み、価値は「いいね」の数に
              <br />
              還元されます。
            </p>

            <p
              className="mt-[160px] w-full text-[28px] leading-[158%] font-medium tracking-[0.84px] text-[#242424] max-lg:text-center max-md:text-[18px]"
              style={mainFont}
            >
              あなたのコンテンツはスクリーンショットされ、
              <br />
              転送され、加工されて、無料で消費されていきます。
              <br />
              あなたの知らない場所で。
              <br />
              誰の許可も取られることなく。
            </p>

            <div className="relative mt-[244px] flex h-[110px] w-[1160px] items-center gap-[10px] rounded-[6px] bg-[#242424] px-[20px] pt-[36px] pb-[12px] max-lg:h-auto max-lg:w-full max-lg:justify-center max-lg:pt-[36px] max-lg:pb-[20px]">
              <p
                className="absolute top-[10px] left-[101px] text-[20px] leading-[1.5] font-medium tracking-[40px] text-white/70 max-lg:top-[8px] max-lg:left-1/2 max-lg:-translate-x-[340px] max-lg:tracking-[24px] max-md:-translate-x-[170px]"
                style={mainFont}
              >
                SNS
              </p>
              <p
                className="text-[46px] leading-[134%] font-bold tracking-[-0.92px] whitespace-nowrap text-white max-lg:text-center max-lg:whitespace-normal max-md:text-[24px]"
                style={mainFont}
              >
                <span>“今のゲームの</span>
                <span className="tracking-[-2.3px]">ルール</span>
                <span>”</span>
                <span className="tracking-[-0.46px]">では</span>
                <span className="tracking-[-18.4px]">、</span>
                <span>あなたの価値は守られない。</span>
              </p>
            </div>
          </div>

          <div className="relative z-30 hidden flex-col px-[16px] max-lg:flex">
            <div className="relative mt-[300px] w-[262px]">
              <p
                className="absolute top-[-24px] left-[82px] text-[20px] leading-[150%] font-medium tracking-[40px] text-[#555555]"
                style={mainFont}
              >
                SNS
              </p>
              <p
                className="w-[262px] text-left text-[26px] leading-[119%] font-bold tracking-[0] text-[#242424]"
                style={mainFont}
              >
                “今のゲームのルール”では、あなたの価値は守られない…
              </p>
            </div>

            <div className="mt-[89px] flex justify-end">
              <div className="inline-flex items-center rounded-[6px] bg-[#F98528] px-[20px] py-[12px]">
                <p
                  className="text-left text-[40px] leading-[1.2] font-black tracking-[0.4px] text-white"
                  style={mainFont}
                >
                  <span className="block">でも、</span>
                  <span className="block">KIVOなら</span>
                </p>
              </div>
            </div>

            <p
              className="mt-[300px] w-[263px] text-left text-[18px] leading-[158%] font-medium tracking-[0.54px] text-[#242424]"
              style={mainFont}
            >
              SNSは、フォロワーを増やすゲームになりました。投稿は広告の間に沈み、価値は「いいね」の数に還元されます。
            </p>

            <p
              className="mt-[140px] w-[263px] text-left text-[18px] leading-[158%] font-medium tracking-[0.54px] text-[#242424]"
              style={mainFont}
            >
              あなたのコンテンツはスクリーンショットされ、転送され、加工されて、無料で消費されていきます。あなたの知らない場所で。誰の許可も取られることなく。
            </p>

            <div className="mt-[300px] flex justify-center">
              <div className="relative flex w-full max-w-[680px] items-center justify-center gap-[10px] rounded-[6px] bg-[#242424] px-[20px] py-[20px]">
                <p
                  className="absolute top-[10px] left-[82px] text-[20px] leading-[150%] font-medium tracking-[40px] text-white/70"
                  style={mainFont}
                >
                  SNS
                </p>
                <p
                  className="pt-[28px] text-center text-[28px] leading-[134%] font-bold tracking-[-0.56px] text-white"
                  style={mainFont}
                >
                  “今のゲームのルール”では、あなたの価値は守られない。
                </p>
              </div>
            </div>

            <div className="relative mt-[300px] h-[928px] w-full overflow-visible">
              <img
                src="/assets/images/app/ellipse-02.svg"
                alt=""
                className="pointer-events-none absolute top-1/2 left-1/2 z-[0] h-[928px] w-screen max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-top"
              />
              <div className="relative z-[2] mx-auto mt-[140px] h-[680px] w-full max-w-[680px] px-[20px] text-center">
                <svg
                  className="absolute top-0 left-0 h-[40px] w-[45px]"
                  viewBox="0 0 45 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.0271191 23.9502C0.0181749 19.2414 0.0263735 11.2772 0.0274915 10.175C0.036063 1.78034 -0.0203963 1.78071 0.00811318 1.05119C0.0125853 0.936707 0.0464983 0.0651528 0.999798 0.0171261C1.32216 0.000744861 39.898 -0.00502614 41.9918 0.00483981C44.5883 0.0171257 44.6736 -0.032204 44.8778 0.252978C45.0931 0.553424 44.9593 3.96891 44.9552 6.82482C44.954 7.48193 44.6444 7.44302 44.2275 7.46369C43.0663 7.52102 43.0665 7.51339 29.6938 7.4877C19.5897 7.46834 12.6738 7.51469 9.01005 7.50594C8.33308 7.50445 7.81339 7.3788 7.69916 7.75259C7.65109 7.90951 7.6632 7.91007 7.66004 9.80285C7.65519 12.7183 7.65668 12.7142 7.65575 12.9672C7.63041 20.2723 7.6619 37.8004 7.66171 38.47C7.66171 39.6282 7.78786 40.0077 6.95903 39.9955C5.20579 39.9694 3.96032 40.0105 1.92943 39.9973C0.383022 39.9873 0.0658766 40.1083 0.038485 39.402C0.017988 38.8724 0.0263737 25.1865 0.0271191 23.9502Z"
                    fill="#242424"
                  />
                </svg>
                <svg
                  className="absolute top-0 right-0 h-[40px] w-[45px]"
                  viewBox="0 0 45 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.9729 23.9502C44.9818 19.2414 44.9736 11.2772 44.9725 10.175C44.9639 1.78034 45.0204 1.78071 44.9919 1.05119C44.9874 0.936707 44.9535 0.0651528 44.0002 0.0171261C43.6778 0.000744861 5.10202 -0.00502614 3.00815 0.00483981C0.411736 0.0171257 0.326393 -0.032204 0.122166 0.252978C-0.0930519 0.553424 0.0407372 3.96891 0.0448341 6.82482C0.0459518 7.48193 0.355644 7.44302 0.77248 7.46369C1.93373 7.52102 1.93355 7.51339 15.3062 7.4877C25.4103 7.46834 32.3262 7.51469 35.99 7.50594C36.6669 7.50445 37.1866 7.3788 37.3008 7.75259C37.3489 7.90951 37.3368 7.91007 37.34 9.80285C37.3448 12.7183 37.3433 12.7142 37.3443 12.9672C37.3696 20.2723 37.3381 37.8004 37.3383 38.47C37.3383 39.6282 37.2121 40.0077 38.041 39.9955C39.7942 39.9694 41.0397 40.0105 43.0706 39.9973C44.617 39.9873 44.9341 40.1083 44.9615 39.402C44.982 38.8724 44.9736 25.1865 44.9729 23.9502Z"
                    fill="#242424"
                  />
                </svg>
                <svg
                  className="absolute bottom-0 left-0 h-[40px] w-[45px]"
                  viewBox="0 0 45 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.0271191 16.0498C0.0181749 20.7586 0.0263735 28.7228 0.0274915 29.825C0.036063 38.2197 -0.0203963 38.2193 0.00811318 38.9488C0.0125853 39.0633 0.0464983 39.9348 0.999798 39.9829C1.32216 39.9993 39.898 40.005 41.9918 39.9952C44.5883 39.9829 44.6736 40.0322 44.8778 39.747C45.0931 39.4466 44.9593 36.0311 44.9552 33.1752C44.954 32.5181 44.6444 32.557 44.2275 32.5363C43.0663 32.479 43.0665 32.4866 29.6938 32.5123C19.5897 32.5317 12.6738 32.4853 9.01005 32.4941C8.33308 32.4955 7.81339 32.6212 7.69916 32.2474C7.65109 32.0905 7.6632 32.0899 7.66004 30.1972C7.65519 27.2817 7.65668 27.2858 7.65575 27.0328C7.63041 19.7277 7.6619 2.19963 7.66171 1.53005C7.66171 0.371822 7.78786 -0.00773621 6.95903 0.00454712C5.20579 0.0306091 3.96032 -0.0105247 1.92943 0.00268936C0.383022 0.0127449 0.0658766 -0.108253 0.038485 0.598C0.017988 1.12759 0.0263737 14.8135 0.0271191 16.0498Z"
                    fill="#242424"
                  />
                </svg>
                <svg
                  className="absolute right-0 bottom-0 h-[40px] w-[45px]"
                  viewBox="0 0 45 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.9729 16.0498C44.9818 20.7586 44.9736 28.7228 44.9725 29.825C44.9639 38.2197 45.0204 38.2193 44.9919 38.9488C44.9874 39.0633 44.9535 39.9348 44.0002 39.9829C43.6778 39.9993 5.10202 40.005 3.00815 39.9952C0.411736 39.9829 0.326393 40.0322 0.122166 39.747C-0.0930519 39.4466 0.0407372 36.0311 0.0448341 33.1752C0.0459518 32.5181 0.355644 32.557 0.77248 32.5363C1.93373 32.479 1.93355 32.4866 15.3062 32.5123C25.4103 32.5317 32.3262 32.4853 35.99 32.4941C36.6669 32.4955 37.1866 32.6212 37.3008 32.2474C37.3489 32.0905 37.3368 32.0899 37.34 30.1972C37.3448 27.2817 37.3433 27.2858 37.3443 27.0328C37.3696 19.7277 37.3381 2.19963 37.3383 1.53005C37.3383 0.371822 37.2121 -0.00773621 38.041 0.00454712C39.7942 0.0306091 41.0397 -0.0105247 43.0706 0.00268936C44.617 0.0127449 44.9341 -0.108253 44.9615 0.598C44.982 1.12759 44.9736 14.8135 44.9729 16.0498Z"
                    fill="#242424"
                  />
                </svg>

                <div className="absolute inset-x-0 top-[180px] bottom-[180px] flex flex-col items-center justify-center px-[18px]">
                  <p
                    className="text-center text-[38px] leading-[123%] font-black tracking-[0.38px] text-[#242424]"
                    style={mainFont}
                  >
                    <span className="block">でもKIVOなら、</span>
                    <span className="block">あなたの価値を守り切ります。</span>
                  </p>
                  <p
                    className="mt-[40px] text-center text-[38px] leading-[123%] font-black tracking-[0.38px] text-[#242424]"
                    style={mainFont}
                  >
                    <span className="block">
                      価値を積み上げるゲームへシフト
                    </span>
                    <span className="block">できる、唯一の場所です。</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-20 h-[1346px] w-full overflow-hidden max-lg:hidden">
          <svg
            className="pointer-events-none absolute top-[50px] left-1/2 -translate-x-1/2"
            width="2110"
            height="1904"
            viewBox="0 0 2110 1904"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1055 407.5C1637.66 407.5 2110 225.056 2110 0V1904H0V0C0 225.056 472.34 407.5 1055 407.5Z"
              fill="#F98528"
            />
          </svg>

          <div className="relative mx-auto mt-[589px] h-[520px] w-[1160px] max-lg:mt-[520px] max-lg:h-auto max-lg:min-h-[420px] max-lg:w-[calc(100vw-32px)]">
            <svg
              className="absolute top-0 left-0 h-[40px] w-[45px]"
              viewBox="0 0 45 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.0271191 23.9502C0.0181749 19.2414 0.0263735 11.2772 0.0274915 10.175C0.036063 1.78034 -0.0203963 1.78071 0.00811318 1.05119C0.0125853 0.936707 0.0464983 0.0651528 0.999798 0.0171261C1.32216 0.000744861 39.898 -0.00502614 41.9918 0.00483981C44.5883 0.0171257 44.6736 -0.032204 44.8778 0.252978C45.0931 0.553424 44.9593 3.96891 44.9552 6.82482C44.954 7.48193 44.6444 7.44302 44.2275 7.46369C43.0663 7.52102 43.0665 7.51339 29.6938 7.4877C19.5897 7.46834 12.6738 7.51469 9.01005 7.50594C8.33308 7.50445 7.81339 7.3788 7.69916 7.75259C7.65109 7.90951 7.6632 7.91007 7.66004 9.80285C7.65519 12.7183 7.65668 12.7142 7.65575 12.9672C7.63041 20.2723 7.6619 37.8004 7.66171 38.47C7.66171 39.6282 7.78786 40.0077 6.95903 39.9955C5.20579 39.9694 3.96032 40.0105 1.92943 39.9973C0.383022 39.9873 0.0658766 40.1083 0.038485 39.402C0.017988 38.8724 0.0263737 25.1865 0.0271191 23.9502Z"
                fill="#242424"
              />
            </svg>
            <svg
              className="absolute top-0 right-0 h-[40px] w-[45px]"
              viewBox="0 0 45 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.9729 23.9502C44.9818 19.2414 44.9736 11.2772 44.9725 10.175C44.9639 1.78034 45.0204 1.78071 44.9919 1.05119C44.9874 0.936707 44.9535 0.0651528 44.0002 0.0171261C43.6778 0.000744861 5.10202 -0.00502614 3.00815 0.00483981C0.411736 0.0171257 0.326393 -0.032204 0.122166 0.252978C-0.0930519 0.553424 0.0407372 3.96891 0.0448341 6.82482C0.0459518 7.48193 0.355644 7.44302 0.77248 7.46369C1.93373 7.52102 1.93355 7.51339 15.3062 7.4877C25.4103 7.46834 32.3262 7.51469 35.99 7.50594C36.6669 7.50445 37.1866 7.3788 37.3008 7.75259C37.3489 7.90951 37.3368 7.91007 37.34 9.80285C37.3448 12.7183 37.3433 12.7142 37.3443 12.9672C37.3696 20.2723 37.3381 37.8004 37.3383 38.47C37.3383 39.6282 37.2121 40.0077 38.041 39.9955C39.7942 39.9694 41.0397 40.0105 43.0706 39.9973C44.617 39.9873 44.9341 40.1083 44.9615 39.402C44.982 38.8724 44.9736 25.1865 44.9729 23.9502Z"
                fill="#242424"
              />
            </svg>
            <svg
              className="absolute bottom-0 left-0 h-[40px] w-[45px]"
              viewBox="0 0 45 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.0271191 16.0498C0.0181749 20.7586 0.0263735 28.7228 0.0274915 29.825C0.036063 38.2197 -0.0203963 38.2193 0.00811318 38.9488C0.0125853 39.0633 0.0464983 39.9348 0.999798 39.9829C1.32216 39.9993 39.898 40.005 41.9918 39.9952C44.5883 39.9829 44.6736 40.0322 44.8778 39.747C45.0931 39.4466 44.9593 36.0311 44.9552 33.1752C44.954 32.5181 44.6444 32.557 44.2275 32.5363C43.0663 32.479 43.0665 32.4866 29.6938 32.5123C19.5897 32.5317 12.6738 32.4853 9.01005 32.4941C8.33308 32.4955 7.81339 32.6212 7.69916 32.2474C7.65109 32.0905 7.6632 32.0899 7.66004 30.1972C7.65519 27.2817 7.65668 27.2858 7.65575 27.0328C7.63041 19.7277 7.6619 2.19963 7.66171 1.53005C7.66171 0.371822 7.78786 -0.00773621 6.95903 0.00454712C5.20579 0.0306091 3.96032 -0.0105247 1.92943 0.00268936C0.383022 0.0127449 0.0658766 -0.108253 0.038485 0.598C0.017988 1.12759 0.0263737 14.8135 0.0271191 16.0498Z"
                fill="#242424"
              />
            </svg>
            <svg
              className="absolute right-0 bottom-0 h-[40px] w-[45px]"
              viewBox="0 0 45 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.9729 16.0498C44.9818 20.7586 44.9736 28.7228 44.9725 29.825C44.9639 38.2197 45.0204 38.2193 44.9919 38.9488C44.9874 39.0633 44.9535 39.9348 44.0002 39.9829C43.6778 39.9993 5.10202 40.005 3.00815 39.9952C0.411736 39.9829 0.326393 40.0322 0.122166 39.747C-0.0930519 39.4466 0.0407372 36.0311 0.0448341 33.1752C0.0459518 32.5181 0.355644 32.557 0.77248 32.5363C1.93373 32.479 1.93355 32.4866 15.3062 32.5123C25.4103 32.5317 32.3262 32.4853 35.99 32.4941C36.6669 32.4955 37.1866 32.6212 37.3008 32.2474C37.3489 32.0905 37.3368 32.0899 37.34 30.1972C37.3448 27.2817 37.3433 27.2858 37.3443 27.0328C37.3696 19.7277 37.3381 2.19963 37.3383 1.53005C37.3383 0.371822 37.2121 -0.00773621 38.041 0.00454712C39.7942 0.0306091 41.0397 -0.0105247 43.0706 0.00268936C44.617 0.0127449 44.9341 -0.108253 44.9615 0.598C44.982 1.12759 44.9736 14.8135 44.9729 16.0498Z"
                fill="#242424"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-[90px] text-center max-lg:px-[16px]">
              <p
                className="text-center text-[72px] leading-[123%] font-black tracking-[0.72px] text-[#242424] max-lg:text-[44px] max-md:text-[36px]"
                style={mainFont}
              >
                <span className="block whitespace-nowrap max-lg:whitespace-normal">
                  でもKIVOなら、
                </span>
                <span className="block whitespace-nowrap max-lg:whitespace-normal">
                  あなたの価値を守り切ります。
                </span>
              </p>
              <p
                className="mt-[80px] text-center text-[72px] leading-[123%] font-black tracking-[0.72px] text-[#242424] max-lg:text-[44px] max-md:text-[36px]"
                style={mainFont}
              >
                <span className="block whitespace-nowrap max-lg:whitespace-normal">
                  価値を積み上げるゲームへシフト
                </span>
                <span className="block whitespace-nowrap max-lg:whitespace-normal">
                  できる、唯一の場所です。
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden">
        <div className="mx-auto w-full max-w-[720px]">
          <p
            className="text-[36px] leading-[1.35] font-bold tracking-[0.4px] text-[#242424] max-md:text-[30px]"
            style={mainFont}
          >
            <span className="max-md:inline md:block">
              “今のゲームのルール”では、
            </span>
            <span className="max-md:inline md:block">
              あなたの価値は守られない…
            </span>
          </p>

          <div className="mt-[32px] inline-flex rounded-[6px] bg-[#F98528] px-[16px] py-[10px]">
            <p
              className="text-[46px] leading-[1.14] font-black text-white max-md:text-[34px]"
              style={mainFont}
            >
              でも、KIVOなら
            </p>
          </div>

          <div
            className="mt-[72px] space-y-[48px] text-[20px] leading-[1.7] font-medium tracking-[0.4px] text-[#242424] max-md:text-[17px]"
            style={mainFont}
          >
            <p>
              SNSは、フォロワーを増やすゲームになりました。投稿は広告の間に沈み、価値は「いいね」の数に還元されます。
            </p>
            <p>
              あなたのコンテンツはスクリーンショットされ、転送され、加工されて、無料で消費されていきます。
            </p>
          </div>

          <div className="mt-[72px] rounded-[6px] bg-[#242424] px-[16px] py-[20px]">
            <p
              className="text-[28px] leading-[1.4] font-bold tracking-[-0.3px] text-white max-md:text-[22px]"
              style={mainFont}
            >
              “今のゲームのルール”では、あなたの価値は守られない。
            </p>
          </div>

          <div className="mt-[80px] rounded-[16px] bg-[#F98528] px-[20px] py-[40px] text-center">
            <p
              className="text-[44px] leading-[1.23] font-black tracking-[0.5px] text-[#242424] max-md:text-[30px]"
              style={mainFont}
            >
              <span className="block">でもKIVOなら、</span>
              <span className="block">あなたの価値を守り切ります。</span>
            </p>
            <p
              className="mt-[28px] text-[44px] leading-[1.23] font-black tracking-[0.5px] text-[#242424] max-md:text-[30px]"
              style={mainFont}
            >
              <span className="block">価値を積み上げるゲームへシフト</span>
              <span className="block">できる、唯一の場所です。</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorldviewGuardSection;
