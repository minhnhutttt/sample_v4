'use client';

import { memo, useState } from 'react';

import { VideoModal } from '@/app/detail/components/Videomodal';

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
  const [modalOpen, setModalOpen] = useState(false);
  const REEL_SRC = '/assets/video/m-4.mp4';

  return (
    <div className="js-header-color relative bg-stone-900 text-white">
      {/* Header */}
      <div className="p-10 max-md:px-5">
        <div className="flex flex-col gap-[5svh]">
          <div className="flex items-center justify-center gap-5 max-md:flex-col">
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
        <div className="relative px-5 py-30 md:px-10 md:py-40">
          <p className="font-shippori mb-50 text-center text-[20px] md:text-[30px]">
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

          <div className="flex justify-center">
            <div>
              {/* Reel Player — clickable to open modal */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group relative flex cursor-pointer items-center justify-center gap-6 pt-10 pb-4 md:py-10"
                aria-label="Play reel video"
              >
                <div className="absolute size-[460px] md:size-[600px]">
                  <img
                    src="/assets/images/reel-circle-deco.svg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:rotate-[15deg]"
                  />
                </div>
                <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/10" />

                <p className="text-[40px] font-bold text-white/60 duration-300 group-hover:-translate-x-5 group-hover:text-white/90 max-md:hidden md:text-[100px]">
                  Play
                </p>

                <div className="relative w-[320px] md:w-[340px]">
                  <div className="absolute inset-0 z-10 flex items-center justify-between px-5 text-[20px] md:text-[24px]">
                    <p>Osmo in use</p>
                    <p>00:48</p>
                  </div>

                  <video
                    className="aspect-video h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-70"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={POSTER}
                    src={REEL_SRC}
                  />
                </div>

                <p className="text-[40px] font-bold text-white/60 duration-300 group-hover:translate-x-5 group-hover:text-white/90 max-md:hidden md:text-[100px]">
                  Reel
                </p>
              </button>

              <div className="flex justify-end">
                <p className="font-caveat text-[20px] text-[#f84131] md:text-[32px]">
                  Screenshots are blocked!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center divider */}
      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-white/10" />

      {/* Video Modal */}
      <VideoModal
        src={REEL_SRC}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Toolkit;
