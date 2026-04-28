'use client';

import { useAppDispatch } from '@/store/hooks';

const HomeStarted = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-[#F78629] pt-25 pb-30 text-white md:pt-[168px] md:pb-[180px]">
      <div className="mb-16 px-5 md:mb-20">
        <h3 className="text-center text-[36px] font-bold md:text-[72px]">
          さっそくはじめる
        </h3>
        <p className="mt-6 text-center text-[18px] font-medium md:mt-10 md:text-[24px]">
          「自分にはなにもない」と思っていても「誰かにとっては価値」があります。
          <br />
          気軽にSNSにのせたコンテンツを、ついでにKIVOにものせてみませんか？
          <br />
          いつもの日常を誰かの価値ある楽しみにしましょう。
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="loopSlide">
          <ul>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/s-01.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/s-02.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/s-03.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/s-04.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/s-05.png" alt="" />
            </li>
          </ul>
          <ul>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/s-01.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/s-02.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/s-03.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/s-04.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/s-05.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center gap-5 max-md:flex-col md:mt-20">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="max-md:w-[200px]"
        >
          <img src="/assets/images/appstore.png" alt="App Store" />
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="max-md:w-[200px]"
        >
          <img src="/assets/images/google-play.png" alt="Google Play" />
        </a>
      </div>
    </div>
  );
};

export default HomeStarted;
