'use client';

import Image from 'next/image';

import useScrollAnimations from '@/hooks/useScrollAnimations';

const HomeVision = () => {
  const ref = useScrollAnimations();
  return (
    <div
      ref={ref}
      className="relative mt-[120px] overflow-hidden md:mt-[260px]"
    >
      <div className="@container mx-auto flex w-full justify-center max-md:flex-col max-md:gap-10 md:justify-end">
        <div className="top-[200px] z-10 mx-auto w-full max-w-[1280px] leading-[1.75] max-md:px-5 md:absolute md:left-1/2 md:ml-10 md:-translate-x-1/2">
          <h2 className="fade-up u-text-gradient text-[20px] font-medium md:text-[28px]">
            私たちの想い
          </h2>
          <p className="fade-up mt-8 max-w-[540px] text-[13px] md:mt-12 md:ml-20 md:text-[16px]">
            愛媛県新居浜市を拠点に、地域の企業・施設を支える総合建設会社として確かな実績を積み重ねています。
            <br />
            <br />
            工場設備のメンテナンスから公共施設の改修工事まで、幅広い現場で培った技術と経験をもとに、「現場第一」の姿勢でお客様の課題に真摯に向き合い、安心と信頼をお届けすることが私たちの使命です。
            <br />
            <br />
            小規模修繕から大型工事まで、地元で長年積み上げた信頼と実績で、お客様の「困った」に迅速にお応えします。
          </p>
        </div>
        <div className="fade-up">
          <Image
            src="/assets/images/home-vision-img.png"
            alt="私たちの想い"
            width={970}
            height={1050}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeVision;
