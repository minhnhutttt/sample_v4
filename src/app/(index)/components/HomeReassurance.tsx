'use client';

import useScrollAnimations from '@/app/hooks/useScrollAnimations';

const HomeReassurance = () => {
  const ref = useScrollAnimations();
  return (
    <div
      ref={ref}
      className="bg-[linear-gradient(94deg,_#CAF1FF_-4.54%,_#D9E7FF_97.79%)] px-5 py-20 md:py-50"
    >
      <div className="mx-auto w-full max-w-[440px] md:max-w-[1120px]">
        <div>
          <div className="fade-up flex">
            <figure>
              <img
                className="max-md:w-25"
                src="/assets/images/avatar-01.png"
                alt=""
              />
            </figure>
            <div className="relative mt-5 max-md:w-[240px]">
              <p className="absolute inset-0 pt-3 pl-7 text-[16px] font-medium md:pt-8 md:pl-20 md:text-[24px]">
                とはいえ
                <br />
                全部おまかせしていいの？
              </p>
              <img src="/assets/images/chat-01.png" alt="" />
            </div>
          </div>
          <div className="mt-4 flex justify-end md:-mt-10 lg:-mt-34">
            <div className="fade-up flex gap-2">
              <div className="relative mt-5 max-md:w-[240px] md:mt-20">
                <p className="absolute inset-0 pt-2 pl-4 text-[16px] font-medium md:pt-8 md:pl-16 md:text-[24px]">
                  はい！おまかせください！
                  <br />
                  安心機能を用意しています。
                </p>
                <img src="/assets/images/chat-02.png" alt="" />
              </div>
              <figure>
                <img
                  className="max-md:w-25"
                  src="/assets/images/avatar-02.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="fade-up flex items-center justify-center py-12">
          <img src="/assets/images/arrows.svg" alt="" className="max-md:w-12" />
        </div>
        <div className="fade-up flex items-center justify-center">
          <span className="font-inter text-[38px] font-bold md:text-[64px]">
            PALの<span className="u-text-gradient02">安心機能</span>
          </span>
        </div>
        <div className="fade-up mt-8 flex items-center gap-5 max-md:flex-col md:mt-13">
          <figure>
            <img
              src="/assets/images/reassurance-deco.png"
              alt=""
              className="max-md:w-[280px]"
            />
          </figure>
          <div className="">
            <ul className="space-y-8 text-[16px] md:space-y-12.5 md:text-[20px]">
              <li>
                ・スイッチでONに切り替えるまでは勝手に広告を出すことはありません。
              </li>
              <li>・スイッチをオフにしたら、すぐに広告が止まります。</li>
              <li>・導入チェックリストで設定もわかりやすく。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReassurance;
