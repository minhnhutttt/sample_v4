'use client';

import { memo } from 'react';

const VIDEOS = [
  { src: '/assets/images/toolkit-01.png', label: 'Discover' },
  { src: '/assets/images/toolkit-02.png', label: 'Drop' },
  { src: '/assets/images/toolkit-03.png', label: 'Channel' },
  { src: '/assets/images/toolkit-04.png', label: 'Chat' },
  { src: '/assets/images/toolkit-01.png', label: 'Discover' },
  { src: '/assets/images/toolkit-02.png', label: 'Drop' },
  { src: '/assets/images/toolkit-03.png', label: 'Channel' },
  { src: '/assets/images/toolkit-04.png', label: 'Chat' },
  { src: '/assets/images/toolkit-01.png', label: 'Discover' },
  { src: '/assets/images/toolkit-02.png', label: 'Drop' },
  { src: '/assets/images/toolkit-03.png', label: 'Channel' },
  { src: '/assets/images/toolkit-04.png', label: 'Chat' },
  { src: '/assets/images/toolkit-01.png', label: 'Discover' },
  { src: '/assets/images/toolkit-02.png', label: 'Drop' },
  { src: '/assets/images/toolkit-03.png', label: 'Channel' },
  { src: '/assets/images/toolkit-04.png', label: 'Chat' },
  { src: '/assets/images/toolkit-01.png', label: 'Discover' },
  { src: '/assets/images/toolkit-02.png', label: 'Drop' },
];

interface VideoCardProps {
  src: string;
  label: string;
}

const VideoCard = memo(({ src, label }: VideoCardProps) => (
  <div className="flex flex-col rounded-xl bg-white p-2.5">
    <div className="flex aspect-393/852">
      <img className="h-full w-full object-cover" src={src} alt="" />
    </div>
    <div className="pt-3 pb-1 text-[13px] font-bold text-black md:text-[18px]">
      {label}
    </div>
  </div>
));
VideoCard.displayName = 'VideoCard';

const MarqueeItem = memo(({ src, label }: VideoCardProps) => (
  <div className="radial-marquee__item w-[10em] md:w-[19em]">
    <VideoCard src={src} label={label} />
  </div>
));
MarqueeItem.displayName = 'MarqueeItem';

const Toolkit = () => {
  return (
    <div className="js-header-color relative z-20 bg-stone-900 text-white">
      {/* Header */}
      <div className="p-10 max-md:px-5">
        <div className="flex flex-col gap-[5svh]">
          <div className="flex flex-wrap items-center justify-center gap-5 max-md:flex-col">
            <div
              className="text-right text-[50px] font-bold whitespace-nowrap md:text-[104px]"
              aria-hidden="true"
            >
              KIVO TALK
            </div>
            <div className="bg-[#D2D2D2]">
              <img
                className="max-md:w-25 md:w-30"
                src="/assets/images/kivo-talk.png"
                alt="KIVO logo"
              />
            </div>
            <div
              className="text-[40px] font-bold whitespace-nowrap md:text-[100px]"
              aria-hidden="true"
            >
              THE CONTRACT
            </div>
          </div>

          <p
            data-load-reveal=""
            className="font-shippori text-center text-[20px] md:text-[30px]"
          >
            メッセージを送る。
            <br />
            コンテンツを売る。チャンネルを開く。
            <br />
            全部できる、そして守られる。
            <br />
            KIVO TALKはクリエイターのためのアプリです。
          </p>
        </div>
      </div>

      {/* Radial Marquee */}
      <div className="overflow-hidden py-16 md:py-20">
        <div className="pointer-events-none relative flex aspect-5/1 w-full justify-center">
          <div className="absolute flex w-[110em] items-start justify-center md:w-[205em]">
            <img
              src="/assets/images/radial-marquee-circle-deco.svg"
              alt=""
              className="aspect-ratio:2120_/_1060.31 absolute bottom-0 w-[90%]"
            />
            <div className="pt-[50%]" />
            <div className="absolute flex aspect-2/1 w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(#000_75%,_#0000_100%)] [flex-flow:column]">
              <div className="absolute top-0 aspect-square w-full -rotate-90 [will-change:transform]">
                <div className="absolute top-0 left-0 h-full w-full [will-change:transform]">
                  <div className="absolute top-0 flex h-full w-full origin-[center_center] animate-[rotateMarquee_90s_linear_infinite] items-center justify-center [will-change:transform]">
                    {VIDEOS.map((video, i) => (
                      <MarqueeItem key={`${video.src}-${i}`} {...video} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative px-5 pt-100 md:px-10 md:pt-130">
          <p className="font-shippori text-center text-[20px] md:text-[30px]">
            あなたのコンテンツ、
            <br />
            タダで広まっていることに気づいてますか？
            <br />
            <br />
            KIVO TALKならその問題を根本から解決できます。
            <br />
            <br />
            スクリーンショット不可。
            <br />
            ダウンロード不可。転送不可。
            <br />
            <br />
            コンテンツを守るから、価値が生まれる。
            <br />
            価値があるから、対価が生まれる。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
