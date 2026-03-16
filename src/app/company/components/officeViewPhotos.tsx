'use client'

import ModalGallery from '@/components/animation/modalGallery'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'

const OfficeViewPhotos = () => {
  useInfiniteScroll()

  const images = [
    {
      image: '/assets/images/office-img-01.png',
      title: 'オフィス',
    },
    {
      image: '/assets/images/office-img-02.png',
      title: '環境',
    },
    {
      image: '/assets/images/office-img-03.png',
      title: '仕事',
    },
    {
      image: '/assets/images/office-img-04.png',
      title: 'チーム',
    },
    {
      image: '/assets/images/office-img-05.png',
      title: 'キャリア',
    },
  ]
  return (
    <div>
      <div className="relative flex h-screen bg-black max-lg:flex-col">
        <div className="grid flex-[0_0_50%] items-center justify-center">
          <div className="relative col-[1] row-[1] h-full">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <ModalGallery images={images} openButtonLabel="Xem Gallery" />
            </div>

            <div className="relative h-full w-full">
              <img
                className="h-full w-full object-cover"
                src="/assets/images/office-img-01.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="relative bg-[#F78629]">
            <div className="flex items-center md:flex-col">
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-center gap-[max(30px,30px+100vw*.0529)] [animation-duration:24s] [animation-iteration-count:infinite] [animation-name:loop-horizontal] [animation-play-state:running] [animation-timing-function:linear] md:[animation-name:loop] md:[writing-mode:vertical-rl]"
                >
	                  <p className="text-[max(41px,41px+100vw*.1112)] font-bold tracking-tighter whitespace-nowrap uppercase">
	                    KIVO OFFICE 
	                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="relative flex h-full w-full flex-row items-start justify-start overflow-hidden text-[clamp(18px,17.415px+100vw*.0015,20px)] font-bold text-white uppercase md:h-max md:flex-col">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="h-full [animation-duration:20s] [animation-iteration-count:infinite] [animation-name:loop-horizontal-reverse] [animation-play-state:running] [animation-timing-function:linear] max-md:flex md:[animation-name:loop-reverse]"
              >
                <div className="relative h-full w-[40vw] md:h-[max(50px,50px+100vw*.1588)] md:w-full">
                  <img
                    className="object-cover max-md:h-full max-md:w-full"
                    src="/assets/images/office-img-01.png"
                    alt=""
                  />
                  <div className="absolute inset-0 z-10 flex items-end bg-black/20 p-5">
                    オフィス
                  </div>
                </div>
                <div className="relative h-full w-[40vw] md:h-[max(50px,50px+100vw*.1588)] md:w-full">
                  <img
                    className="object-cover max-md:h-full max-md:w-full"
                    src="/assets/images/office-img-02.png"
                    alt=""
                  />
                  <div className="absolute inset-0 z-10 flex items-end bg-black/20 p-5">
                    環境
                  </div>
                </div>
                <div className="relative h-full w-[40vw] md:h-[max(50px,50px+100vw*.1588)] md:w-full">
                  <img
                    className="object-cover max-md:h-full max-md:w-full"
                    src="/assets/images/office-img-03.png"
                    alt=""
                  />
                  <div className="absolute inset-0 z-10 flex items-end bg-black/20 p-5">
                    仕事
                  </div>
                </div>
                <div className="relative h-full w-[40vw] md:h-[max(50px,50px+100vw*.1588)] md:w-full">
                  <img
                    className="object-cover max-md:h-full max-md:w-full"
                    src="/assets/images/office-img-04.png"
                    alt=""
                  />
                  <div className="absolute inset-0 z-10 flex items-end bg-black/20 p-5">
                    チーム
                  </div>
                </div>
                <div className="relative h-full w-[40vw] md:h-[max(50px,50px+100vw*.1588)] md:w-full">
                  <img
                    className="object-cover max-md:h-full max-md:w-full"
                    src="/assets/images/office-img-05.png"
                    alt=""
                  />
                  <div className="absolute inset-0 z-10 flex items-end bg-black/20 p-5">
                    キャリア
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  )
}

export default OfficeViewPhotos
