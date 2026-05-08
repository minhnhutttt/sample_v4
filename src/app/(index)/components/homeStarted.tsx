'use client';

import Modal from '@/components/modal';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';

const HomeStarted = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-[#F78629] pt-25 pb-30 text-white md:pt-[168px] md:pb-[180px]">
      <div className="mb-16 px-5 md:mb-20">
        <h3 className="text-center text-[36px] font-bold md:text-[72px]">
          さっそくはじめる
        </h3>
        <p className="mt-6 text-center text-[18px] font-medium md:mt-10 md:text-[24px]">
          KIVOは、あなたの知識を「消費」させない。
          <br />
          あなたの思考のすべてのプロセスを「一生モノの資産」に変える。
          <br />
          希望を形にする人の世界へようこそ。
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="loopSlide">
          <ul>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/slider-01.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/slider-02.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/slider-03.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/slider-04.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/slider-05.png" alt="" />
            </li>
          </ul>
          <ul>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/slider-01.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/slider-02.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/slider-03.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/slider-04.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/slider-05.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center md:mt-20">
        <button
          onClick={() => dispatch(openModal({ name: 'join' }))}
          className="relative mx-auto flex h-20 w-[300px] items-center justify-center rounded-[12px] bg-white font-bold text-[#F78629] duration-200 hover:opacity-70 md:h-[136px] md:w-[680px] md:text-[24px]"
        >
          はじめる
          <img
            className="absolute right-[20px] md:right-[35px]"
            src="/assets/images/arrow-alt-or.svg"
            alt=""
          />
        </button>
      </div>
      <Modal modalName="join">
        <div className="relative w-full max-w-[750px] min-w-[330px] overflow-hidden p-8 md:min-w-[500px] md:p-12">
          <div className="absolute inset-0 rounded-[20px] border border-white/80 bg-white/20 backdrop-blur-2xl backdrop-filter"></div>
          <div className="relative flex flex-col items-center justify-center">
            <p className="text-center text-[20px] font-bold text-white md:text-[36px]">
              KIVOで投稿者として登録しよう！
            </p>
            <div className="py-7 md:py-10">
              <img
                className="max-md:w-[200px]"
                src="/assets/images/qr.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center gap-6 max-md:flex-col">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img
                  className="max-md:max-w-[200px]"
                  src="/assets/images/appstore.png"
                  alt=""
                />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img
                  className="max-md:max-w-[200px]"
                  src="/assets/images/google-play.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomeStarted;
