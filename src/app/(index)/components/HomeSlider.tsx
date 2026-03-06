'use client';

import { useEffect, useRef, useState } from 'react';

const DATA = [
  {
    img: '/assets/images/home-1.png',
    text: 'Manhattan',
    temp: '37°F',
    time: '4:34 AM',
  },
  {
    img: '/assets/images/home-2.png',
    text: 'Seattle',
    temp: '37°F',
    time: '4:34 AM',
  },
  {
    img: '/assets/images/home-3.png',
    text: 'Rogers',
    temp: '37°F',
    time: '4:34 AM',
  },
];

const DURATION = 4500;
const SLIDE_MS = 900;
const PARALLAX = 0.35;

export default function ImageSlider() {
  const [idx, setIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState<number | null>(null);
  const [captionVisible, setCaptionVisible] = useState(true);
  const [sliding, setSliding] = useState(false);
  const [progKey, setProgKey] = useState(0);
  const busyRef = useRef(false);
  const idxRef = useRef(0);

  useEffect(() => {
    idxRef.current = idx;
  }, [idx]);

  function advance(cur: number) {
    if (busyRef.current) return;
    busyRef.current = true;

    const next = (cur + 1) % DATA.length;
    setCaptionVisible(false);

    setTimeout(() => {
      setNextIdx(next);
      setSliding(false);

      requestAnimationFrame(() =>
        requestAnimationFrame(() => setSliding(true)),
      );

      setTimeout(() => {
        setIdx(next);
        setNextIdx(null);
        setSliding(false);
        setCaptionVisible(true);
        setProgKey((k) => k + 1);
        busyRef.current = false;
      }, SLIDE_MS);
    }, 400);
  }

  useEffect(() => {
    const t = setInterval(() => advance(idxRef.current), DURATION);
    return () => clearInterval(t);
  }, []);

  const ease = `${SLIDE_MS}ms cubic-bezier(0.77, 0, 0.23, 1)`;
  const pct = PARALLAX * 100;

  return (
    <div className="overflow-hidden bg-[#FAF2E8]">
      <div className="relative h-screen w-screen">
        <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              transform: sliding ? 'translateX(-100%)' : 'translateX(0%)',
              transition: sliding ? `transform ${ease}` : 'none',
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${DATA[idx].img})`,
                transform: sliding ? `translateX(${pct}%)` : 'translateX(0%)',
                transition: sliding ? `transform ${ease}` : 'none',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom,transparent 50%,rgba(0,0,0,0.45))',
                }}
              />
            </div>
          </div>

          {nextIdx !== null && (
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                transform: sliding ? 'translateX(0%)' : 'translateX(100%)',
                transition: sliding ? `transform ${ease}` : 'none',
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${DATA[nextIdx].img})`,
                  transform: sliding
                    ? 'translateX(0%)'
                    : `translateX(-${pct}%)`,
                  transition: sliding ? `transform ${ease}` : 'none',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom,transparent 50%,rgba(0,0,0,0.45))',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center overflow-hidden">
        <div className="site-max stack relative py-[2.5rem]">
          <div
            className="h7 flex w-full justify-between gap-4 text-center font-bold tracking-widest text-black"
            style={{
              opacity: captionVisible ? 1 : 0,
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <p className="flex-1">{DATA[idx].text}</p>
            <p>{DATA[idx].temp}</p>
            <p className="flex-1">{DATA[idx].time}</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes prog {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </div>
  );
}
