'use client';

import useScrollAnimations from '@/app/hooks/useScrollAnimations';

const HomeStart = () => {
  const ref = useScrollAnimations();
  return (
    <div ref={ref} className="px-5 py-20 md:py-50">
      <div className="relative mx-auto w-full max-w-[1120px] pb-35 min-[1110px]:pb-22">
        <div className="fade-up mb-2.5 flex flex-col items-center justify-center">
          <p className="font-inter flex aspect-248/74 w-[248px] animate-bounce justify-center bg-[url(/assets/images/bubble-04.png)] bg-cover pt-4 text-[18px] font-bold md:pt-3 md:text-[24px]">
            URLを入れるだけ！
          </p>
          <div className="flex items-center justify-center gap-3 max-md:w-full md:gap-9">
            <span className="h-1 flex-1 bg-[#00BDC7] md:w-[160px]"></span>
            <span className="font-inter text-[38px] font-bold md:text-[64px]">
              PALの<span className="u-text-gradient">始め方</span>
            </span>
            <span className="h-1 flex-1 bg-[#00BDC7] md:w-[160px]"></span>
          </div>
        </div>
        <div className="fade-up relative py-[40px] md:py-[50px]">
          <div className="relative mb-5 flex items-center gap-10 rounded-[20px] bg-[#EBEBEB] px-5 py-5 after:absolute after:top-full after:left-1/2 after:z-30 after:mx-auto after:block after:aspect-65/36 after:w-[40px] after:-translate-x-1/2 after:bg-[url(/assets/images/tri2.png)] after:bg-cover md:gap-25 md:rounded-[50px] md:px-7.5 md:after:w-[65px]">
            <div className="flex size-[60px] flex-col items-center justify-center rounded-full bg-white leading-snug md:size-[84px]">
              <span className="text-[14px] font-medium md:text-[18px]">
                step
              </span>
              <span className="text-[24px] font-bold md:text-[32px]">01</span>
            </div>
            <div className="flex-1 space-y-2.5">
              <p className="text-[24px] font-bold md:text-[32px]">
                アカウント登録
              </p>
              <p className="text-[15px] md:text-[18px]">
                PALのアカウントにご登録ください。
              </p>
            </div>
          </div>
          <div className="relative mb-5 flex items-center gap-10 rounded-[20px] bg-[#EBEBEB] px-5 py-5 after:absolute after:top-full after:left-1/2 after:z-30 after:mx-auto after:block after:aspect-65/36 after:w-[40px] after:-translate-x-1/2 after:bg-[url(/assets/images/tri2.png)] after:bg-cover md:gap-25 md:rounded-[50px] md:px-7.5 md:after:w-[65px]">
            <div className="flex size-[60px] flex-col items-center justify-center rounded-full bg-white leading-snug md:size-[84px]">
              <span className="text-[14px] font-medium md:text-[18px]">
                step
              </span>
              <span className="text-[24px] font-bold md:text-[32px]">02</span>
            </div>
            <div className="flex-1 space-y-2.5">
              <p className="text-[24px] font-bold md:text-[32px]">
                URLを入れてレビュー
              </p>
              <p className="text-[15px] md:text-[18px]">
                AIがページの内容を解析して広告内容のサンプルをお見せします。
              </p>
            </div>
          </div>
          <div className="relative flex items-center gap-10 rounded-[20px] bg-[#EBEBEB] px-5 py-5 md:gap-25 md:rounded-[50px] md:px-7.5">
            <div className="flex size-[60px] flex-col items-center justify-center rounded-full bg-white leading-snug md:size-[84px]">
              <span className="text-[14px] font-medium md:text-[18px]">
                step
              </span>
              <span className="text-[24px] font-bold md:text-[32px]">03</span>
            </div>
            <div className="flex-1 space-y-2.5">
              <p className="text-[24px] font-bold md:text-[32px]">
                お支払い→アカウント連携で本番へ
              </p>
              <p className="text-[15px] md:text-[18px]">
                お支払い後、Google広告アカウントをPALと連携。本格的な運用を開始します。
              </p>
            </div>
          </div>
          <div className="absolute inset-y-0 left-23 w-3 rounded-[30px] bg-[linear-gradient(154deg,_#CAF1FF_16.85%,_#D9E7FF_83.95%)] md:left-[144px] md:w-10"></div>
        </div>
        <div className="absolute right-0 bottom-0">
          <img className="fade-up" src="/assets/images/deco.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeStart;
