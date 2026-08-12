import Image from 'next/image';

import Parallax from '@/components/parallax';

import FvFloatingCta from './FvFloatingCta';

const Fv = () => {
  return (
    <div className="relative overflow-hidden bg-black px-5 pt-36 pb-20 max-md:px-4 max-md:pt-21 max-md:pb-21 md:min-h-198 md:px-15">
      <Parallax
        speed={0.5}
        respectReducedMotion={false}
        className="absolute top-0 right-0 w-[730px] max-md:hidden"
      >
        <Image
          src="/assets/images/fv-image.webp"
          width={1462}
          height={1578}
          alt=""
          className="w-full"
        />
      </Parallax>
      <Parallax
        speed={0.5}
        respectReducedMotion={false}
        className="absolute inset-0 md:hidden"
      >
        <div className="absolute bottom-[-64px] left-1/2 w-full -translate-x-1/2">
          <Image
            src="/assets/images/fv-image-sp.webp"
            width={850}
            height={907}
            alt=""
            className="size-full object-cover"
          />
        </div>
      </Parallax>
      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(247,134,41,0.40)_0%,rgba(247,82,41,0.80)_100%)] opacity-50 mix-blend-hard-light max-md:top-16 max-md:bg-[linear-gradient(105deg,rgba(247,134,41,0.20)_0%,rgba(247,82,41,0.70)_100%)]"></div>
      <div className="relative w-full max-w-[1120px]">
        <h1 className="text-[40px] font-black text-white max-md:leading-[1.46] max-md:tracking-[0.8px] max-md:[text-shadow:0_0_12px_rgba(40,22,0,0.2)] md:text-[80px]">
          お金を払わずに、大好きな作家を直接応援する。
        </h1>
        <div className="mt-12 flex max-w-[580px] flex-col gap-9 text-[15px] leading-loose text-white max-md:mt-5 max-md:max-w-[280px] max-md:gap-4 max-md:text-justify max-md:leading-[1.87] max-md:font-medium max-md:tracking-[0.6px] max-md:[text-shadow:0_0_10px_rgba(40,22,0,0.7)] md:mt-18 md:text-[18px]">
          <p>
            「続きが読みたい。でも、お財布には負担をかけたくない」
            <br className="max-md:hidden" />
            ——KIVO TALKなら、その両方が叶います。
          </p>
          <p>
            ゲームやアンケートで無料ポイントを貯めて、限定作品をアンロック。しかもポイント分は手数料なしで100%、そのまま作家の収入に。あなたのスキマ時間が、作家への一番ダイレクトな支援になります。
          </p>
        </div>
      </div>
      <FvFloatingCta />
    </div>
  );
};

export default Fv;
