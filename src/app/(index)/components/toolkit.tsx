'use client';

import { memo } from 'react';

const VIDEOS = [
  { src: '/assets/video/m-4.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-3.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-2.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-1.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-4.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-3.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-2.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-1.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-4.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-3.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-2.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-1.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-4.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-3.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-2.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-1.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-4.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/m-3.mp4', label: 'Pixelate Image Render Effect' },
];

const POSTER = '/assets/images/kv.png';

interface VideoCardProps {
  src: string;
  label: string;
}

const VideoCard = memo(({ src, label }: VideoCardProps) => (
  <div className="flex flex-col rounded-xl bg-white p-2.5">
    <div className="flex aspect-8/5">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={POSTER}
        src={src}
      />
    </div>
    <div className="pt-3 pb-1 text-[13px] font-bold text-black md:text-[18px]">
      {label}
    </div>
  </div>
));
VideoCard.displayName = 'VideoCard';

const MarqueeItem = memo(({ src, label }: VideoCardProps) => (
  <div className="radial-marquee__item w-[13em] md:w-[24em]">
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
              KIVO
            </div>
            <img src="/assets/images/logo.svg" alt="KIVO logo" />
            <div
              className="text-[40px] font-bold whitespace-nowrap md:text-[104px]"
              aria-hidden="true"
            >
              THE CONTRACT
            </div>
          </div>

          <p
            data-load-reveal=""
            className="font-shippori text-center text-[20px] md:text-[30px]"
          >
            発信する時代は終わった。 確定させる時代が来た。
            <br />
            KIVOは、情報の価値が契約によって成立する
            <br /> 最初のプラットフォームである。
          </p>
        </div>
      </div>

      {/* Radial Marquee */}
      <div className="overflow-hidden py-16 md:py-20">
        <div className="pointer-events-none relative flex aspect-5/1 w-full justify-center">
          <div className="absolute flex w-[110em] items-start justify-center md:w-[190em]">
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
        <div className="relative px-5 pt-30 md:px-10 md:pt-40">
          <p className="font-shippori text-center text-[20px] md:text-[30px]">
            SNSはフォロワーを最大化する。
            <br />
            KIVOは価値を最大化する。
            <br />
            <br />
            クリエイターに必要だったのは、
            <br />
            フォロワーではなく契約者。
            <br />
            拡散ではなく保護。
            <br />
            <br />
            アプリの外に流出させない。
            <br />
            クリエイターの情報を守る。
            <br />
            それが、設計の最重要思想。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
