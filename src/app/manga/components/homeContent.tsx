'use client';

import { type ReactNode, useLayoutEffect, useRef } from 'react';

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
    image: '/assets/images/manga/section-01.png',
    title: (
      <>
        連載の締め切りや単行本の枠に縛られず、あなたの「1話」や「ネーム」を最も輝く形で
      </>
    ),
    note: <></>,
    align: 'left',
  },
  {
    id: 2,
    image: '/assets/images/manga/section-02.png',
    title: (
      <>
        KIVO TALKなら、あなたの魂の原稿を魔法のカギ
        <span className="text-[16px] md:text-[20px]">(※)</span>
        が海賊版から徹底的に守ります
      </>
    ),
    note: '※アプリ内のスクリーンショットを防止',
    align: 'right',
  },
  {
    id: 3,
    image: '/assets/images/manga/section-03.png',
    title: (
      <>
        ネーム、下書き、完成原稿、どんな状態の作品コンテンツ
        <span className="text-[16px] md:text-[20px]">(※)</span>
        もひとつの場所でストレスなく販売可能。
      </>
    ),
    note: '※画像、動画、音声、PDFデータのコンテンツに対応',
    align: 'left',
  },
  {
    id: 4,
    image: '/assets/images/manga/section-04.png',
    title: (
      <>
        ファンと話したネームのアイデアさえも、すべてが売れていく資産に変わります。
      </>
    ),
    note: '',
    align: 'right',
  },
];

const HomeContent = () => {
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
              {section.note ? (
                <p className="mt-5 text-[16px] opacity-80 md:mt-7 md:text-[20px]">
                  {section.note}
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomeContent;
