'use client';

import { memo, useState } from 'react';

import { VideoModal } from '@/app/detail/components/Videomodal';

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

const Video = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const REEL_SRC = '/assets/video/m-4.mp4';

  return (
    <div className="js-header-color relative z-20 overflow-hidden bg-stone-900 text-white">
      {/* Header */}
      <div className="p-10 max-md:px-5">
        {/* Content Section */}
        <div className="relative px-5 py-30 md:px-10 md:py-40">
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

              <div className="flex items-end justify-end gap-2 max-md:mt-3">
                <figure className="relative -top-4 w-12 md:w-[70px]">
                  <img src="/assets/images/arr.svg" alt="" />
                </figure>
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

export default Video;
