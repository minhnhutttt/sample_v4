const WorldviewSection = () => {
  return (
    <section className="relative z-20 h-[1000px] overflow-hidden bg-[#242424]">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/app/bg-app.png"
          alt=""
          className="pointer-events-none absolute -top-[120px] left-[calc(50%+67px)] aspect-[287/265] h-[1434.149px] w-[1553.219px] max-w-none rotate-[15deg] object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-[rgba(36,36,36,0.06)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pt-[160px] md:px-[60px]">
        <p
          className="w-full text-[44px] leading-[120%] font-black tracking-[0.8px] text-white md:text-[80px]"
          style={{ fontFamily: 'var(--font-family-main, Inter)' }}
        >
          <span className="max-md:inline md:block">自分が普通だと</span>
          <span className="max-md:inline md:block">思っていたことに、</span>
          <span className="max-md:inline md:block">誰かがお金を払う。</span>
        </p>

        <p className="mt-[56px] text-[22px] leading-[1.58] tracking-[0.03em] text-white md:text-[28px]">
          何かを売れる人が、
          <br />
          最初からクリエイターだったわけじゃない。
        </p>

        <div className="mt-[68px] flex flex-wrap items-start gap-[21px]">
          <a href="#" aria-label="Download on the App Store">
            <img
              src="/assets/images/btn-appstore.png"
              alt="Download on the App Store"
              className="h-[60px] w-[201px]"
            />
          </a>
          <a href="#" aria-label="Get it on Google Play">
            <img
              src="/assets/images/btn-google.png"
              alt="Get it on Google Play"
              className="h-[60px] w-[199px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorldviewSection;
