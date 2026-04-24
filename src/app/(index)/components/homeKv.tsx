const HomeKv = () => {
  return (
    <div className="h-screen">
      <div className="slide h-full">
        <div className="slide-image bg-[url(/assets/images/kv-slider-01.png)]"></div>
        <div className="slide-image bg-[url(/assets/images/kv-slider-02.png)]"></div>
        <div className="slide-image bg-[url(/assets/images/kv-slider-03.png)]"></div>
      </div>
      <div className="absolute inset-0 flex items-end">
        <div className="@container w-full max-w-[440px] pb-[8cqw] md:max-w-[1280px] md:pb-[4.688cqw]">
          <div className="space-y-[1cqw] px-[4.688cqw] max-md:text-center">
            <p className="inline-block bg-[#242424] px-[0.625cqw] text-[6cqw] font-bold text-[#D2D2D2] max-md:w-full md:text-[3.3cqw]">
              タダ読みの「いいね」より、
            </p>
            <p className="inline-block bg-[#242424] px-[0.625cqw] text-[8cqw] font-black text-[#D2D2D2] max-md:w-full md:text-[5.94cqw]">
              <span className="u-text-gradient bg-[linear-gradient(94deg,#FFF6EE_0%,#FFAD68_100%)]">
                あなたの漫画
              </span>
              <span className="text-[6.6cqw] text-white md:text-[3.75cqw]">
                を
              </span>
              <br className="md:hidden" />
              <span className="u-text-gradient bg-[linear-gradient(266deg,#FFF6EE_0%,#FFAD68_100%)]">
                愛してくれる
              </span>
            </p>
            <p className="inline-block bg-[#242424] px-[0.625cqw] text-[8cqw] font-black text-[#D2D2D2] max-md:w-full md:text-[5.94cqw]">
              <span className="u-text-gradient bg-[linear-gradient(94deg,#FFF6EE_0%,#FFAD68_100%)]">
                100人
              </span>
              <span className="text-[6.6cqw] text-white md:text-[3.75cqw]">
                の
              </span>
              <span className="u-text-gradient -mx-[2.2cqw] bg-[linear-gradient(266deg,#FFF6EE_0%,#FFAD68_100%)]">
                「熱狂的な所有者」
              </span>
              <span className="text-[6.6cqw] text-white md:text-[3.75cqw]">
                と繋がる。
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeKv;
