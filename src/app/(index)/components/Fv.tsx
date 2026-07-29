import Image from 'next/image';

import FvButton from './FvButton';

const Fv = () => {
  return (
    <section className="relative overflow-x-clip bg-[url(/assets/images/fv/bg.png)] bg-cover">
      <div className="@container-[size] relative mx-auto aspect-375/667 w-full max-w-[480px] md:aspect-1280/720 md:max-w-[1280px]">
        <div className="absolute top-[4cqw] left-[3.5cqw] flex h-[28px] items-center gap-[2.188cqw] gap-[30px] md:top-[5cqh] md:left-[6.25cqw] md:h-[5cqh]">
          <Image
            src="/assets/images/fv/logo-mark.svg"
            alt="試食BAR アサクサ"
            width={114}
            height={36}
            className="h-full w-auto"
          />
          <Image
            src="/assets/images/fv/logo-foodbuyers.svg"
            alt="food buyers HUB"
            width={153}
            height={36}
            className="h-full w-auto"
          />
        </div>

        <Image
          src="/assets/images/fv/photo-collage.png"
          alt="浅草の店舗内観と、商品を紹介する笑顔のスタッフ"
          width={1572}
          height={1440}
          priority
          className="absolute top-0 right-[-7.813cqw] w-[61.406cqw] max-md:hidden"
        />
        <Image
          src="/assets/images/fv/photo-collage-sp.png"
          alt="浅草の店舗内観と、商品を紹介する笑顔のスタッフ"
          width={786}
          height={668}
          priority
          className="absolute top-[365px] right-[-44px] w-[393px] max-w-none md:hidden"
        />

        <div className="absolute top-[74px] left-[16px] flex -rotate-5 items-center justify-center gap-[0.781cqw] rounded-full bg-[#434f8e] px-[20px] py-[2px] opacity-85 md:top-[18cqh] md:left-[6.094cqw] md:px-[2.5cqw] md:py-[0.556cqh]">
          <span className="-skew-x-[5deg] text-[15px] leading-[1.58] font-bold tracking-[0.066cqw] text-white md:text-[2.188cqw]">
            試食
          </span>
          <Image
            src="/assets/images/fv/tail-tasting.svg"
            alt=""
            aria-hidden
            width={18}
            height={14}
            className="absolute bottom-[-1.528cqh] left-1/2 -translate-x-1/2 rotate-180"
          />
        </div>

        <div className="absolute top-[64px] left-[106px] flex -rotate-5 items-center justify-center gap-[0.781cqw] rounded-full bg-[#434f8e] px-[20px] py-[2px] opacity-85 md:top-[15cqh] md:left-[18.203cqw] md:px-[2.5cqw] md:py-[0.556cqh]">
          <span className="-skew-x-[5deg] text-[15px] leading-[1.58] font-bold tracking-[0.066cqw] text-white md:text-[2.188cqw]">
            アンケート
          </span>
          <Image
            src="/assets/images/fv/tail-survey.svg"
            alt=""
            aria-hidden
            width={18}
            height={14}
            className="absolute bottom-[-1.389cqh] left-1/2 -translate-x-1/2 rotate-180"
          />
        </div>

        <h1 className="sr-only">“食べる”で売れる！！</h1>

        <Image
          src="/assets/images/fv/fv-text.svg"
          alt="“食べる”で売れる！！"
          aria-hidden
          width={561}
          height={289}
          className="absolute top-[100px] left-[10px] w-[305px] md:top-[23.5cqh] md:left-[5.469cqw] md:w-[43.828cqw]"
        />

        <div className="absolute top-[270px] left-[20px] flex flex-col text-[16px] leading-[1.8] font-medium tracking-[0.063cqw] text-[#1c213b] md:top-[68cqh] md:left-[6.25cqw] md:w-[43cqw] md:text-[1.563cqw]">
          <p className="font-medium">
            今すぐ、浅草に「御社のマーケティング拠点」が持てる。
            <br className="max-md:hidden" />
            その場で販売＆アンケートデータ獲得！
          </p>
        </div>

        <Image
          src="/assets/images/fv/ai-badge.png"
          alt="AI補助金 適用可能！ ※詳しくはお問い合わせください"
          width={488}
          height={488}
          className="absolute top-[565px] left-[5px] w-[132px] md:top-[73cqh] md:left-[44.844cqw] md:w-[19.063cqw]"
        />

        <FvButton
          badge="無料"
          className="fixed bottom-5 left-1/2 max-md:-translate-x-1/2 md:absolute md:bottom-[5.556cqh] md:left-[6.25cqw]"
        >
          出展お問い合わせ
        </FvButton>
      </div>
    </section>
  );
};

export default Fv;
