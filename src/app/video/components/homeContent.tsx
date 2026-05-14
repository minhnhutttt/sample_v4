'use client';

import { ReactNode, useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

type Section = {
  id: number;
  image: string;
  title: ReactNode;
  note?: ReactNode;
  align: 'left' | 'right';
};

const sections: Section[] = [
  {
    id: 1,
    image: '/assets/images/video-grapher/section-01.png',
    title: (
      <>
        再生数を稼ぐための「動画の長さ」や「投稿頻度」はもう気にしなくていい。一本の動画に込めた魂をそのままの価値で。
      </>
    ),
    note: <></>,
    align: 'left',
  },
  {
    id: 2,
    image: '/assets/images/video-grapher/section-02.png',
    title: (
      <>
        動画は「見られて終わり」の消費物ではありません。 魔法のカギ
        <span className="text-[16px] md:text-[20px]">(※)</span>
        が「タダ見」を許さないから、
        あなたの映像は、選ばれた人だけが持てる「限定品」へとアップデートされます。
      </>
    ),
    note: '※アプリ内のスクリーンショットを防止',
    align: 'right',
  },
  {
    id: 3,
    image: '/assets/images/video-grapher/section-03.png',
    title: (
      <>
        4Kの傑作から、スマホで撮った10秒の日常まで。 どんなコンテンツ
        <span className="text-[16px] md:text-[20px]">(※)</span>も一つの場所で
        KIVO TALKはあなたの映像作品を資産に変えます。
      </>
    ),
    note: '※画像、動画、音声、PDFデータのコンテンツに対応',
    align: 'left',
  },
  {
    id: 4,
    image: '/assets/images/video-grapher/section-04.png',
    title: (
      <>
        編集会議そのものをエンターテインメントに。
        視聴者と一緒に悩んだり笑ったりした時間が、そのまま次の「作りたい！」をかなえる力になります。
      </>
    ),
    note: '',
    align: 'right',
  },
];

export default function HomeContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray<HTMLElement>('.parallax-image');

      images.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-black">
      {sections.map((section) => (
        <section
          key={section.id}
          className="relative h-[600px] w-full overflow-hidden md:h-[900px]"
        >
          <div className="parallax-image absolute inset-0 -top-[15%] h-[130%]">
            <Image
              src={section.image}
              alt=""
              fill
              priority={section.id === 1}
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div
            className={`relative z-10 flex h-full px-5 py-[120px] md:px-15 ${
              section.align === 'left' ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className="max-w-[580px] text-white">
              <h2 className="text-[22px] font-bold md:text-[40px]">
                {section.title}
              </h2>
              {section.note && (
                <p className="mt-5 text-[16px] opacity-80 md:mt-7 md:text-[20px]">
                  {section.note}
                </p>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
