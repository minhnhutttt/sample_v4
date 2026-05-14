'use client';

import { useEffect, useRef, useState } from 'react';

const VIDEOS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SLIDE_DURATION = 4000;

const HomeKv = () => {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const firstVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = firstVideoRef.current;
    if (!video) return;

    const handleReady = () => {
      setStarted(true);
    };

    if (video.readyState >= 3) {
      handleReady();
      return;
    }

    video.addEventListener('canplay', handleReady, { once: true });
    return () => video.removeEventListener('canplay', handleReady);
  }, []);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <div className="h-screen">
      <div className="slide relative h-full w-full overflow-hidden">
        {VIDEOS.map((num, index) => {
          const isActive = started && index === currentIndex;
          return (
            <div
              key={num}
              className="slide-image"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'scale(1)' : 'scale(1.2)',
                transition: isActive
                  ? 'opacity 1s ease-in, transform 4s ease-out'
                  : 'opacity 1s ease-out',
                zIndex: isActive ? 1 : 0,
              }}
            >
              <video
                ref={index === 0 ? firstVideoRef : undefined}
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={`/assets/movie/${num}.mp4`}
                autoPlay
                preload="auto"
                muted
                controls={false}
                loop
              />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 z-20 flex items-end">
        <div className="@container w-full max-w-[440px] pb-[8cqw] md:max-w-[1280px] md:pb-[4.688cqw]">
          <div className="space-y-[1cqw] px-[4.688cqw] max-md:text-center">
            <p className="inline-block bg-[#242424] px-[0.625cqw] text-[6cqw] font-bold text-[#D2D2D2] max-md:w-full md:text-[3.3cqw]">
              10万回の再生数より
            </p>
            <p className="inline-block bg-[#242424] px-[0.625cqw] text-[8cqw] font-black text-[#D2D2D2] max-md:w-full md:text-[5.94cqw]">
              <span className="u-text-gradient bg-[linear-gradient(94deg,#FFEEEE_0%,#FF8888_100%)]">
                あなたの動画
              </span>
              <span className="text-[6.6cqw] text-white md:text-[3.75cqw]">
                を
              </span>
              <br className="md:hidden" />
              <span className="u-text-gradient bg-[linear-gradient(266deg,#FFEEEE_0%,#FF8888_100%)]">
                愛してくれる
              </span>
            </p>
            <p className="inline-block bg-[#242424] px-[0.625cqw] text-[8cqw] font-black text-[#D2D2D2] max-md:w-full md:text-[5.94cqw]">
              <span className="u-text-gradient bg-[linear-gradient(94deg,#FFEEEE_0%,#FF8888_100%)]">
                100人
              </span>
              <span className="text-[6.6cqw] text-white md:text-[3.75cqw]">
                の
              </span>
              <span className="u-text-gradient -mx-[2.2cqw] bg-[linear-gradient(266deg,#FFF6EE_0%,#FF8888_100%)]">
                「視聴者」
              </span>
              <span className="text-[6.6cqw] text-white md:text-[3.75cqw]">
                と繋がろう。
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeKv;
