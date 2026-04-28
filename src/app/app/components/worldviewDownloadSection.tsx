'use client';

const mainFont = { fontFamily: 'var(--font-family-main, Inter)' };

const WorldviewDownloadSection = () => {
  return (
    <section className="relative z-30 h-[1374px] overflow-hidden bg-[#242424] max-xl:h-auto">
      <div className="relative mx-auto h-full w-full max-w-[1280px]">
        <div className="absolute top-[140px] left-[60px] aspect-[188/237] h-[740px] w-[587px] drop-shadow-[-40px_40px_40px_rgba(0,0,0,0.6)] max-xl:relative max-xl:top-auto max-xl:left-auto max-xl:mx-auto max-xl:mt-[120px] max-xl:h-auto max-xl:w-[min(587px,calc(100vw-32px))]">
          <img
            src="/assets/images/app-img.png"
            alt="KIVO app preview"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="absolute top-[340px] left-[776px] flex flex-col items-start gap-[120px] max-xl:relative max-xl:top-auto max-xl:left-auto max-xl:mx-auto max-xl:w-full max-xl:max-w-[680px] max-xl:items-center max-xl:gap-[72px] max-xl:px-[16px] max-xl:pt-[72px] max-xl:pb-[180px]">
          <img
            src="/assets/images/logo.svg"
            alt="KIVO"
            className="h-[246px] w-[364px] object-contain max-md:h-[170px] max-md:w-[252px]"
          />

          <div className="flex flex-col items-start gap-[32px] max-xl:w-full max-xl:items-center">
            <p
              className="text-[40px] leading-[150%] font-bold tracking-[0.8px] text-white max-xl:text-center max-md:text-[30px]"
              style={mainFont}
            >
              <span className="block whitespace-nowrap">
                価値が動いている場所を
              </span>
              <span className="block whitespace-nowrap">
                見にいきましょう！
              </span>
            </p>

            <p
              className="w-[444px] text-[20px] leading-[180%] font-normal tracking-[0.8px] text-white max-xl:w-full max-xl:max-w-[520px] max-xl:text-center max-md:text-[17px]"
              style={mainFont}
            >
              クリエイターやふつうの人たちが何を届けているか。
              <br />
              買った人たちがどんな言葉を残しているか。
              <br />
              アプリで見れます。今すぐダウンロードして
              <br />
              チェックしよう！
            </p>

            <div className="flex items-start gap-[21px] max-md:flex-col">
              <img
                src="/assets/images/btn-appstore.png"
                alt="Download on the App Store"
                className="h-[60px] w-[201px] object-contain"
              />
              <img
                src="/assets/images/btn-google.png"
                alt="Get it on Google Play"
                className="h-[60px] w-[199px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldviewDownloadSection;
