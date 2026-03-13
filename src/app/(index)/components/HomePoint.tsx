'use client';

import useScrollAnimations from '@/app/hooks/useScrollAnimations';

const HomePoint = () => {
  const ref = useScrollAnimations();
  return (
    <div
      ref={ref}
      className="bg-[url(/assets/images/bg-01.png)] bg-cover pt-25 pb-20 md:pt-40 md:pb-32"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="fade-up flex justify-center">
          <h2 className="flex items-end justify-center gap-3 text-[24px] leading-none font-bold md:gap-5 md:text-[36px]">
            あなたの相棒
            <img className="max-md:w-28" src="/assets/images/pal.svg" alt="" />
            なら
          </h2>
        </div>
        <div className="fade-up mx-auto mt-13 flex w-full max-w-[900px] flex-col items-center justify-center md:items-end md:justify-end">
          <div className="flex flex-col items-end justify-end">
            <div className="flex aspect-158/83 w-[158px] animate-bounce items-center justify-center bg-[url(/assets/images/bubble-02.png)] bg-cover pb-1.5 text-[20px] font-bold max-md:ml-auto md:text-[24px]">
              <span className="rotate-10">カンタン！</span>
            </div>
            <p className="text-[24px] leading-snug font-bold md:pr-13 md:text-[36px]">
              最初は”<span className="u-text-gradient">URLを入れる</span>”だけ！
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div className="fade-up relative mb-12">
            <div className="absolute top-5 right-0 left-0 ml-auto h-[360px] max-w-[1200px] bg-[url(/assets/images/point-bg-01.png)] bg-cover bg-no-repeat md:h-[461px]"></div>
            <div className="relative mx-auto flex max-w-[440px] items-start gap-5 px-5 max-md:flex-col-reverse md:max-w-[990px] md:gap-16 md:pb-22">
              <div className="flex-1 md:pt-36">
                <div className="flex">
                  <p className="border-b-[6px] border-[#00BDC7] text-[24px] leading-none font-bold md:text-[32px]">
                    point
                    <span className="relative text-[36px] font-black after:absolute after:-top-1 after:-right-4 after:aspect-53/45 after:w-8 after:bg-[url(/assets/images/title-deco.png)] after:bg-cover md:text-[77px] md:after:w-[53px]">
                      01
                    </span>
                  </p>
                </div>
                <div className="mt-4 pl-5 md:pl-10">
                  <h3 className="text-[32px] font-bold md:text-[48px]">
                    ページを解析
                  </h3>
                  <p className="mt-2.5 text-[15px] tracking-tight md:text-[18px]">
                    PAL AIがページ情報を読み込んで、
                    <br />
                    強み・特徴・伝えるべきポイントを整理します
                  </p>
                </div>
              </div>
              <div className="md:max-lg:w-1/2 lg:min-w-[466px]">
                <img src="/assets/images/point-01.png" alt="" />
              </div>
            </div>
          </div>
          <div className="fade-up relative max-md:mb-10">
            <div className="relative mx-auto flex max-w-[440px] gap-5 px-5 max-md:flex-col-reverse md:max-w-[1040px] md:flex-row-reverse md:items-start md:gap-16 md:pb-18">
              <div className="flex-1 md:pt-5">
                <div className="flex">
                  <p className="border-b-[6px] border-[#00BDC7] text-[24px] leading-none font-bold md:text-[32px]">
                    point
                    <span className="relative text-[36px] font-black after:absolute after:-top-1 after:-right-4 after:aspect-53/45 after:w-8 after:bg-[url(/assets/images/title-deco.png)] after:bg-cover md:text-[77px] md:after:w-[53px]">
                      02
                    </span>
                  </p>
                </div>
                <div className="mt-4 pl-5 md:pl-10">
                  <h3 className="text-[32px] font-bold md:text-[48px]">
                    広告・キーワードを
                    <br />
                    自動生成
                  </h3>
                  <p className="mt-2.5 text-[15px] tracking-tight md:text-[18px]">
                    整理した情報をもとに、最適な広告文・
                    <br />
                    キーワードを大量に作成します。
                  </p>
                </div>
              </div>
              <div className="flex justify-center max-md:w-full md:justify-end md:max-lg:w-1/2 lg:min-w-[460px]">
                <img src="/assets/images/point-02.png" alt="" />
              </div>
            </div>
          </div>
          <div className="fade-up relative max-md:mb-10">
            <div className="absolute top-0 right-0 left-0 h-[360px] max-w-[1200px] bg-[url(/assets/images/point-bg-01.png)] bg-cover bg-no-repeat md:h-[461px]"></div>
            <div className="relative mx-auto flex max-w-[440px] items-start gap-5 px-5 max-md:flex-col-reverse md:max-w-[990px] md:gap-16 md:pb-22">
              <div className="flex-1 md:pt-20">
                <div className="flex">
                  <p className="border-b-[6px] border-[#00BDC7] text-[24px] leading-none font-bold md:text-[32px]">
                    point
                    <span className="relative text-[36px] font-black after:absolute after:-top-1 after:-right-4 after:aspect-53/45 after:w-8 after:bg-[url(/assets/images/title-deco.png)] after:bg-cover md:text-[77px] md:after:w-[53px]">
                      03
                    </span>
                  </p>
                </div>
                <div className="mt-4 pl-5 md:pl-10">
                  <h3 className="text-[32px] font-bold md:text-[48px]">
                    Google広告へ
                    <br />
                    自動設定
                  </h3>
                  <p className="mt-2.5 text-[15px] tracking-tight md:text-[18px]">
                    面倒でわかりにくい管理画面を触らなくても、自動で設定が完了します。
                  </p>
                </div>
              </div>
              <div className="max-md:flex max-md:w-full max-md:justify-center md:pt-16 md:max-lg:w-1/2 lg:min-w-[466px]">
                <img src="/assets/images/point-03.png" alt="" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-13 flex w-full max-w-[900px] flex-col items-center justify-center max-md:px-5 md:items-end md:justify-end">
            <div className="fade-up">
              <div className="flex aspect-158/83 w-[158px] animate-bounce items-center justify-center bg-[url(/assets/images/bubble-03.png)] bg-cover pb-1.5 text-[20px] font-bold md:text-[24px]">
                <span className="-rotate-10">さらに</span>
              </div>
              <p className="text-[24px] leading-snug font-bold md:pr-13 md:text-[36px]">
                継続は”<span className="u-text-gradient">ボタンを押す</span>
                ”だけ！
              </p>
            </div>
          </div>

          <div className="fade-up relative mt-10 max-md:mb-10 md:mt-20">
            <div className="relative mx-auto flex max-w-[440px] gap-5 px-5 max-md:flex-col-reverse md:max-w-[1040px] md:flex-row-reverse md:items-start md:gap-16 md:pb-18">
              <div className="flex-1 md:pt-10">
                <div className="flex">
                  <p className="border-b-[6px] border-[#00BDC7] text-[24px] leading-none font-bold md:text-[32px]">
                    point
                    <span className="relative text-[36px] font-black after:absolute after:-top-1 after:-right-4 after:aspect-53/45 after:w-8 after:bg-[url(/assets/images/title-deco.png)] after:bg-cover md:text-[77px] md:after:w-[53px]">
                      04
                    </span>
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="text-[32px] font-bold md:text-[48px]">
                    設定の更新
                  </h3>
                  <p className="mt-2.5 text-[15px] tracking-tight md:text-[18px]">
                    広告の状況やページの更新状況を見て、
                    <br />
                    改めてキーワードや広告文を作成。広告設定を強化します。
                  </p>
                </div>
              </div>
              <div className="flex justify-center max-md:w-full md:justify-end md:max-lg:w-1/2 lg:min-w-[460px]">
                <img src="/assets/images/point-04.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePoint;
