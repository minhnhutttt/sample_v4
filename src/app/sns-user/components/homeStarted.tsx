'use client';

import { useState } from 'react';

import DownloadModal from '@/components/DownloadModal';

const HomeStarted = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div className="bg-[#F78629] pt-25 pb-30 text-white md:pt-[168px] md:pb-[180px]">
      <div className="mb-16 px-5 md:mb-20">
        <h3 className="text-center text-[36px] font-bold md:text-[72px]">
          さっそくはじめる
        </h3>
        <p className="mt-6 text-center text-[18px] font-medium md:mt-10 md:text-[24px]">
          KIVO TALKは、あなたの知識を「消費」させない。
          <br />
          あなたの思考のすべてのプロセスを「一生モノの資産」に変える。
          <br />
          あなたの作品が、あなたを支える場所へ。
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="loopSlide">
          <ul>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/sns-user/s-01.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/sns-user/s-02.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/sns-user/s-03.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/sns-user/s-04.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/sns-user/s-05.png" alt="" />
            </li>
          </ul>
          <ul>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/sns-user/s-01.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/sns-user/s-02.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/sns-user/s-03.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/sns-user/s-04.png" alt="" />
            </li>
            <li className="overflow-hidden rounded-[20px] max-md:w-[160px]">
              <img src="/assets/images/sns-user/s-05.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center md:mt-20">
        <button
          onClick={() => setIsDownloadModalOpen(true)}
          className="relative mx-auto flex h-20 w-[300px] items-center justify-center rounded-[12px] bg-white font-bold text-[#F78629] duration-200 hover:opacity-70 md:h-[136px] md:w-[680px] md:text-[24px]"
        >
          はじめる
          <img
            className="absolute right-[20px] md:right-[35px]"
            src="/assets/images/sns-user/arrow-alt-or.svg"
            alt=""
          />
        </button>
      </div>
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        title="KIVOで投稿者として登録しよう！"
      />
    </div>
  );
};

export default HomeStarted;
