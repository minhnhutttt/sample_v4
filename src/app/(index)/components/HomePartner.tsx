'use client';

import useScrollAnimations from '@/app/hooks/useScrollAnimations';
import ButtonCta from '@/components/buttonCta';

const HomePartner = () => {
  const ref = useScrollAnimations();
  return (
    <div
      ref={ref}
      className="bg-[url(/assets/images/partner-bg.png)] bg-cover px-5 py-32 md:py-[305px]"
    >
      <div className="relative mx-auto w-full max-w-[1120px] max-md:pb-7">
        <p className="fade-up text-center text-[20px] font-black md:text-[36px]">
          今日からPALが、あなたの広告パートナー。
        </p>
        <p className="fade-up my-10 text-center text-[18px] font-medium md:my-[69px] md:text-[24px]">
          URLを渡して、広告を始めよう。
        </p>
        <ButtonCta />
        <div className="absolute max-lg:top-full lg:bottom-0">
          <img
            src="/assets/images/partner-deco.png"
            alt=""
            className="max-md:w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePartner;
