import Image from 'next/image';

import Parallax from '@/components/parallax';

const Fv = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black px-5 pt-36 pb-20 md:min-h-198 md:px-15">
      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(247,134,41,0.40)_0%,rgba(247,82,41,0.80)_100%)] opacity-50 mix-blend-hard-light"></div>
      <Parallax
        speed={0.5}
        respectReducedMotion={false}
        className="absolute top-0 right-0 w-[730px]"
      >
        <Image
          src="/assets/images/fv-image.webp"
          width={1462}
          height={1578}
          alt=""
          className="w-full"
        />
      </Parallax>
      <div className="relative w-full max-w-[1120px]">
        <h1 className="text-[40px] font-black text-white md:text-[80px]">
          お金を払わずに、大好きな作家を直接応援する。
        </h1>
        <p className="mt-12 max-w-[580px] text-[15px] leading-loose text-white md:mt-18 md:text-[18px]">
          「続きが読みたい。でも、お財布には負担をかけたくない」
          <br className="max-md:hidden" />
          ——KIVO TALKなら、その両方が叶います。
          <br />
          <br />
          ゲームやアンケートで無料ポイントを貯めて、限定作品をアンロック。しかもポイント分は手数料なしで100%、そのまま作家の収入に。あなたのスキマ時間が、作家への一番ダイレクトな支援になります。
        </p>
      </div>
    </div>
  );
};

export default Fv;
