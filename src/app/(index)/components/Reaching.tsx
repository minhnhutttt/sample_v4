import Image from 'next/image';

const gradientText =
  'bg-gradient-to-r from-[#ffdad4] via-white to-[#ffdad4] bg-clip-text text-transparent drop-shadow-[0px_0px_20px_rgba(0,104,149,0.3)]';

const Reaching = () => {
  return (
    <section className="relative overflow-hidden rounded-t-[40px] bg-[url(/assets/images/reaching/bg.png)] bg-cover pt-24 pb-40 md:rounded-t-[80px] md:pt-34 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-20 mix-blend-overlay md:bottom-70"
      >
        <div className="animate-marquee flex w-max">
          <span className="skew-x-[-8deg] px-10 text-[120px] leading-none font-black whitespace-nowrap text-white opacity-10 md:text-[240px]">
            Reaching Everyone. Reaching Everyone. Reaching Everyone. Reaching
            Everyone.
          </span>
          <span className="skew-x-[-8deg] px-10 text-[120px] leading-none font-black whitespace-nowrap text-white opacity-10 md:text-[240px]">
            Reaching Everyone. Reaching Everyone. Reaching Everyone. Reaching
            Everyone.
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1120px] px-5">
        <div className="relative">
          <p className="skew-x-[-10deg] leading-[1.2] font-black whitespace-nowrap">
            <span className={`text-[32px] md:text-[80px] ${gradientText}`}>
              御社の素敵な商品
            </span>
            <span className="text-[29px] text-white md:text-[64px]">を</span>
          </p>
          <p className="skew-x-[-10deg] text-[24px] leading-[1.5] font-black text-white md:text-[48px]">
            私たちが多くの方に
            <br className="md:hidden" />
            お届けします！
          </p>
          <Image
            src="/assets/images/reaching/sparkle.svg"
            alt=""
            aria-hidden
            width={133}
            height={163}
            className="absolute top-[-10px] left-[740px]"
          />
        </div>

        <div className="mt-11 flex items-start gap-10 max-md:flex-col md:mt-25">
          <div className="text-[16px] leading-[1.67] text-white md:w-110 md:shrink-0 md:text-[24px]">
            <p>
              私たちが大切な商品をしっかり案内し、
              <br />
              売上までの最短ルートを整えます。
            </p>
            <p className="mt-10">
              多数のアンケートデータやWEB・メディア露出という強力な武器を、ぜひ手にしてください。
            </p>
          </div>
          <Image
            src="/assets/images/reaching/photo-collage.png"
            alt="試食BARアサクサの店舗外観、来店客の様子、フードバイヤーズハブのWEBサイト画面、店内の商品陳列"
            width={680}
            height={734}
            className="w-full max-w-none md:flex-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Reaching;
