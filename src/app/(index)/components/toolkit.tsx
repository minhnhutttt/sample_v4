'use client'

import { VideoModal } from '@/app/detail/components/Videomodal'
import { memo, useState } from 'react'

const VIDEOS = [
  { src: '/assets/video/video-01.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-02.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-03.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-04.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-01.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-02.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-03.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-04.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-01.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-02.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-03.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-04.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-01.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-02.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-03.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-04.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-01.mp4', label: 'Pixelate Image Render Effect' },
  { src: '/assets/video/video-02.mp4', label: 'Pixelate Image Render Effect' },
]

const POSTER = '/assets/images/kv.png'

interface VideoCardProps {
  src: string
  label: string
}

const VideoCard = memo(({ src, label }: VideoCardProps) => (
  <div className="flex flex-col p-2.5 bg-white rounded-xl">
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
    <div className="text-black md:text-[18px] pt-3 pb-1 text-[13px] font-bold">
      {label}
    </div>
  </div>
))
VideoCard.displayName = 'VideoCard'

const MarqueeItem = memo(({ src, label }: VideoCardProps) => (
  <div className="radial-marquee__item w-[13em] md:w-[24em]">
    <VideoCard src={src} label={label} />
  </div>
))
MarqueeItem.displayName = 'MarqueeItem'

const Toolkit = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const REEL_SRC = '/assets/video/video-01.mp4'

  return (
    <div className="text-white relative">
      {/* Header */}
      <div className="p-10 max-md:px-5">
        <div className="flex flex-col gap-[5svh]">
          <div className="flex justify-center items-center gap-5 max-md:flex-col">
            <div
              className="md:text-[104px] text-[50px] whitespace-nowrap font-bold text-right"
              aria-hidden="true"
            >
              KIVO
            </div>
            <img src="/assets/images/logo.svg" alt="KIVO logo" />
            <div
              className="md:text-[104px] text-[40px] whitespace-nowrap font-bold"
              aria-hidden="true"
            >
              THE CONTRACT
            </div>
          </div>

          <p
            data-load-reveal=""
            className="text-center md:text-[30px] text-[20px] font-shippori"
          >
            発信する時代は終わった。 確定させる時代が来た。
            <br />
            KIVOは、情報の価値が契約によって成立する、 最初のプラットフォームである。
          </p>
        </div>
      </div>

      {/* Radial Marquee */}
      <div className="overflow-hidden md:py-20 py-16">
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
        <div className="py-60 md:py-80 px-5 md:px-10 relative">
          <p className="text-center md:text-[30px] text-[20px] font-shippori mb-50">
            SNSはフォロワーを最大化する。KIVOは価値を最大化する。
            <br />
            <br />
            クリエイターに必要だったのは、 フォロワーではなく、契約者だ。拡散ではなく、保護だ。
            <br />
            <br />
            アプリの外に流出させない。クリエイターの情報を守る。それが、設計の最重要思想である。
          </p>

          <div className="flex justify-center">
            <div>
              {/* Reel Player — clickable to open modal */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group relative flex justify-center pt-10 pb-4 md:py-20 gap-6 items-center cursor-pointer"
                aria-label="Play reel video"
              >
                <div className="absolute size-[460px] md:size-[600px]">
                  <img
                    src="/assets/images/reel-circle-deco.svg"
                    alt=""
                    className="absolute w-full h-full inset-0 object-contain transition-transform duration-700 group-hover:rotate-[15deg]"
                  />
                </div>
                <div className="absolute w-full h-px bg-white/10 left-0 top-1/2 -translate-y-1/2" />

                <p className="md:text-[100px] text-[40px] font-bold text-white/60 max-md:hidden duration-300 group-hover:text-white/90 group-hover:-translate-x-5">
                  Play
                </p>

                <div className="md:w-[340px] w-[320px] relative">
                  <div className="absolute inset-0 flex items-center justify-between px-5 text-[20px] md:text-[24px] z-10">
                    <p>Osmo in use</p>
                    <p>00:48</p>
                  </div>

                  <video
                    className="h-full w-full object-cover aspect-video transition-opacity duration-300  group-hover:opacity-70"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={POSTER}
                    src={REEL_SRC}
                  />
                </div>

                <p className="md:text-[100px] text-[40px] font-bold text-white/60 max-md:hidden duration-300 group-hover:text-white/90 group-hover:translate-x-5">
                  Reel
                </p>
              </button>

              <div className="flex justify-end">
                <img src="/assets/images/blocked.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center divider */}
      <div className="absolute h-full w-px bg-white/10 top-0 left-1/2 -translate-x-1/2" />

      {/* Video Modal */}
      <VideoModal
        src={REEL_SRC}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}

export default Toolkit