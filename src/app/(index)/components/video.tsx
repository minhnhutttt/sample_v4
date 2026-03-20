'use client';

import { useVideoModal } from '@/providers/VideoModalProvider';

const POSTER = '/assets/images/kv.png';

const REEL_SRC = '/assets/video/m-4.mp4';

const Video = () => {
  const { openModal } = useVideoModal();

  return (
    <div className="js-header-color relative z-20 overflow-hidden bg-stone-900 text-white">
      {/* Header */}
      <div className="p-10 max-md:px-5">
        {/* Content Section */}
        <div className="relative px-5 py-10 md:px-10 md:py-10">
          <div className="flex justify-center">
            <div>
              {/* Reel Player — clickable to open modal */}
              <button
                type="button"
                onClick={() => openModal(REEL_SRC)}
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

                <div className="relative mx-auto w-[180px] md:w-[220px]">
                  <video
                    className="aspect-1170/2532 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-70"
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
                <figure className="relative -top-4 w-6 md:w-[70px]">
                  <img src="/assets/images/arr.svg" alt="" />
                </figure>
                <p className="font-caveat text-[16px] text-[#f84131] md:text-[32px]">
                  Screenshots are blocked!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-white/10" />
    </div>
  );
};

export default Video;
