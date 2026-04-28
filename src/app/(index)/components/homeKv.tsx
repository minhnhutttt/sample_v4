const HomeKv = () => {
  return (
    <>
      <style>{`
        @keyframes scrollUp {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        .col-scroll {
          animation: scrollUp 10s linear infinite;
        }
      `}</style>

      <div className="relative h-screen overflow-hidden bg-black">
        <div className="absolute left-1/2 h-full">
          <div className="flex gap-3 overflow-hidden md:gap-5">
            <div className="col-scroll flex shrink-0 flex-col max-md:w-[120px] [&>img]:mb-3 md:[&>img]:mb-5">
              <img src="/assets/images/slider-01.png" alt="" />
              <img src="/assets/images/slider-02.png" alt="" />
              <img src="/assets/images/slider-03.png" alt="" />
              <img src="/assets/images/slider-04.png" alt="" />
              {/* duplicate */}
              <img src="/assets/images/slider-01.png" alt="" />
              <img src="/assets/images/slider-02.png" alt="" />
              <img src="/assets/images/slider-03.png" alt="" />
              <img src="/assets/images/slider-04.png" alt="" />
            </div>

            <div className="-mt-[100px] shrink-0 md:-mt-[165px]">
              <div className="col-scroll flex shrink-0 flex-col max-md:w-[120px] [&>img]:mb-3 md:[&>img]:mb-5">
                <img src="/assets/images/slider-05.png" alt="" />
                <img src="/assets/images/slider-06.png" alt="" />
                <img src="/assets/images/slider-07.png" alt="" />
                <img src="/assets/images/slider-08.png" alt="" />
                {/* duplicate */}
                <img src="/assets/images/slider-05.png" alt="" />
                <img src="/assets/images/slider-06.png" alt="" />
                <img src="/assets/images/slider-07.png" alt="" />
                <img src="/assets/images/slider-08.png" alt="" />
              </div>
            </div>

            <div className="col-scroll flex shrink-0 flex-col max-md:w-[120px] [&>img]:mb-3 md:[&>img]:mb-5">
              <img src="/assets/images/slider-09.png" alt="" />
              <img src="/assets/images/slider-10.png" alt="" />
              <img src="/assets/images/slider-11.png" alt="" />
              <img src="/assets/images/slider-12.png" alt="" />
              {/* duplicate */}
              <img src="/assets/images/slider-09.png" alt="" />
              <img src="/assets/images/slider-10.png" alt="" />
              <img src="/assets/images/slider-11.png" alt="" />
              <img src="/assets/images/slider-12.png" alt="" />
            </div>

            <div className="-mt-[100px] shrink-0 md:-mt-[165px]">
              <div className="col-scroll flex shrink-0 flex-col max-md:w-[120px] [&>img]:mb-3 md:[&>img]:mb-5">
                <img src="/assets/images/slider-13.png" alt="" />
                <img src="/assets/images/slider-14.png" alt="" />
                <img src="/assets/images/slider-15.png" alt="" />
                <img src="/assets/images/slider-16.png" alt="" />
                {/* duplicate */}
                <img src="/assets/images/slider-13.png" alt="" />
                <img src="/assets/images/slider-14.png" alt="" />
                <img src="/assets/images/slider-15.png" alt="" />
                <img src="/assets/images/slider-16.png" alt="" />
              </div>
            </div>

            <div className="col-scroll flex shrink-0 flex-col max-md:w-[120px] [&>img]:mb-3 md:[&>img]:mb-5">
              <img src="/assets/images/slider-17.png" alt="" />
              <img src="/assets/images/slider-18.png" alt="" />
              <img src="/assets/images/slider-19.png" alt="" />
              <img src="/assets/images/slider-20.png" alt="" />
              {/* duplicate */}
              <img src="/assets/images/slider-17.png" alt="" />
              <img src="/assets/images/slider-18.png" alt="" />
              <img src="/assets/images/slider-19.png" alt="" />
              <img src="/assets/images/slider-20.png" alt="" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="@container w-full max-w-[440px] md:max-w-[1280px]">
            <div className="p-[4.688cqw]">
              <div className="mb-[0.94cqw]">
                <p className="inline-block bg-[#242424] px-[2cqw] py-[2cqw] text-[5cqw] font-black text-white max-md:w-full md:px-[0.625cqw] md:py-[0.94cqw] md:text-[2.188cqw]">
                  SNSにのせたコンテンツを
                </p>
              </div>
              <div className="mb-[2.813cqw]">
                <p className="inline-block space-x-[0.8cqw] bg-[#242424] px-[2cqw] py-[2cqw] font-black md:px-[0.625cqw] md:py-[0.94cqw]">
                  <span className="u-text-gradient bg-[linear-gradient(90deg,_#FFA7F3_0%,_#FFA5A5_50%,_#FF953D_100%)] align-middle text-[8cqw] md:text-[4.688cqw]">
                    “ついでに”
                  </span>
                  <span className="align-middle">
                    <img
                      className="inline max-md:w-[20cqw]"
                      src="/assets/images/logo.svg"
                      alt=""
                    />
                  </span>
                  <span className="align-middle text-[5cqw] font-black text-white md:text-[2.656cqw]">
                    にも置いてみた。
                  </span>
                </p>
              </div>
              <div className="mb-[0.94cqw]">
                <p className="inline-block bg-[#242424] px-[2cqw] py-[2cqw] text-[5cqw] font-black text-white max-md:w-full md:px-[0.625cqw] md:py-[0.94cqw] md:text-[2.188cqw]">
                  SNSでは”いいね”がもらえたけど、
                </p>
              </div>
              <div className="mb-[5.313cqw]">
                <p className="inline-block space-x-[0.8cqw] bg-[#242424] px-[2cqw] py-[2cqw] font-black md:px-[0.625cqw] md:py-[0.94cqw]">
                  <span className="align-middle">
                    <img
                      className="inline max-md:w-[20cqw]"
                      src="/assets/images/logo.svg"
                      alt=""
                    />
                  </span>
                  <span className="align-middle text-[5cqw] font-black text-white md:text-[2.656cqw]">
                    では誰かに
                  </span>
                  <span className="u-text-gradient bg-[linear-gradient(90deg,_#FFA7F3_0%,_#FFA5A5_50%,_#FF953D_100%)] align-middle text-[8cqw] md:text-[4.688cqw]">
                    “買って”
                  </span>
                  <br className="md:hidden" />
                  <span className="align-middle text-[5cqw] font-black text-white md:text-[2.656cqw]">
                    もらえた。
                  </span>
                </p>
              </div>
              <div className="">
                <p className="text-[4cqw] font-medium text-[#B7B7B7] md:text-[1.875cqw]">
                  ただの「日常」だったはずのものが、
                  <br />
                  誰かの「楽しみ」になった日
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeKv;
