import Image from 'next/image';

const Hero = () => (
  <section id="top" className="relative h-[640px] overflow-hidden bg-white">
    <div className="absolute inset-0">
      <Image
        src="/assets/images/hero-wall.png"
        alt="ピラティスマシンでレッスンを受ける女性"
        fill
        priority
        className="h-full w-full"
      />
    </div>

    <Image
      src="/assets/images/logo-alona.png"
      alt="ALONA"
      width={116}
      height={36}
      className="absolute top-[13px] left-[16px] h-[36.231px] w-[116px] object-contain"
    />

    <div className="absolute top-[55px] left-[16px] flex w-[365px] flex-col gap-[12px]">
      <p className="text-[18px] leading-[1.75] font-semibold tracking-[0.72px] text-[#070707]">
        パーソナル ピラティス
        <br />
        セミパーソナルトレーニング
        <br />
        パーソナルトレーニング
      </p>
      <h1 className="font-black tracking-[0.84px] text-white [text-shadow:0_3px_3px_#64d8df]">
        <span className="text-[32px] leading-[1.3]">続けられる価格</span>
        <span className="text-[25px] leading-[1.3]">だから、</span>
        <br />
        <span className="text-[32px] leading-[1.3]">変わり続けられる。</span>
      </h1>
    </div>
  </section>
);

export default Hero;
