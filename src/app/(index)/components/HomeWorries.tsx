'use client';

import useScrollAnimations from '@/app/hooks/useScrollAnimations';

const HomeWorries = () => {
  const ref = useScrollAnimations();
  return (
    <div ref={ref} className="relative px-5 pt-25">
      <div className="absolute inset-0 bg-[url(/assets/images/worries.png)] bg-cover bg-center"></div>
      <div className="mx-auto w-full max-w-[800px]">
        <div className="fade-up mb-9 flex md:mb-13">
          <p className="font-inter bg-[#7C7C7C] text-[24px] font-bold text-white md:text-[32px]">
            こんな悩み、ありませんか？
          </p>
        </div>
        <div className="relative">
          <div className="bg-[#F2F2F2] px-5 py-7 md:px-20 md:py-10">
            <ul className="space-y-7.5">
              {[
                '広告を出したいが、何から始めればいいか分からない',
                '代理店に頼むほどの予算はない。でも失敗はしたくない',
                '広告文やキーワードを考える時間がない',
                '投稿後の改善が続かず、結局止まってしまう',
              ].map((text) => (
                <li
                  key={text}
                  className="fade-up flex gap-2.5 text-[18px] font-medium md:text-[20px]"
                >
                  <span className="mt-1">
                    <svg
                      className="w-5 md:w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1333 13.8667L7.26667 11C7.02222 10.7556 6.71111 10.6333 6.33333 10.6333C5.95555 10.6333 5.64444 10.7556 5.4 11C5.15556 11.2444 5.03333 11.5556 5.03333 11.9333C5.03333 12.3111 5.15556 12.6222 5.4 12.8667L9.2 16.6667C9.46666 16.9333 9.77778 17.0667 10.1333 17.0667C10.4889 17.0667 10.8 16.9333 11.0667 16.6667L18.6 9.13333C18.8444 8.88889 18.9667 8.57778 18.9667 8.2C18.9667 7.82222 18.8444 7.51111 18.6 7.26667C18.3556 7.02222 18.0444 6.9 17.6667 6.9C17.2889 6.9 16.9778 7.02222 16.7333 7.26667L10.1333 13.8667ZM2.66667 24C1.93333 24 1.30578 23.7391 0.784 23.2173C0.262222 22.6956 0.000888889 22.0676 0 21.3333V2.66667C0 1.93333 0.261333 1.30578 0.784 0.784C1.30667 0.262222 1.93422 0.000888889 2.66667 0H21.3333C22.0667 0 22.6947 0.261333 23.2173 0.784C23.74 1.30667 24.0009 1.93422 24 2.66667V21.3333C24 22.0667 23.7391 22.6947 23.2173 23.2173C22.6956 23.74 22.0676 24.0009 21.3333 24H2.66667Z"
                        fill="#666666"
                      />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-up relative bg-[linear-gradient(94deg,_#CAF1FF_-4.54%,_#D9E7FF_97.79%)] p-7 text-[20px] font-medium after:absolute after:top-full after:left-1/2 after:mx-auto after:block after:aspect-132/36 after:w-[80px] after:-translate-x-1/2 after:bg-[url(/assets/images/tri.png)] after:bg-cover md:p-10 md:text-[36px] md:after:w-[132px]">
            <div className="">
              PALは
              <span className="border-gradient inline bg-[linear-gradient(#FFA5D6,_#FFA5D6)] [background-size:0%_0.6em] bg-position-[0_90%] bg-no-repeat [transition:background-size_.75s_cubic-bezier(.19,_1,_.22,_1)]">
                「<span className="font-bold">最初の面倒</span>」
              </span>
              と
              <span className="border-gradient inline bg-[linear-gradient(#A5C1FF,_#A5C1FF)] [background-size:0%_0.6em] bg-position-[0_90%] bg-no-repeat [transition:background-size_.75s_cubic-bezier(.19,_1,_.22,_1)]">
                「<span className="font-bold">続かない運用</span>」
              </span>
              を シンプルに解決します！
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWorries;
