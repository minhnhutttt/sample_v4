'use client';

import { type ReactNode, useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

type Section = {
  id: number;
  image: string;
  titles: ReactNode[];
  note?: ReactNode;
  align: 'left' | 'right';
};

const sections: Section[] = [
  {
    id: 1,
    image: '/assets/images/sns-user/section-01.png',
    titles: [
      <>
        スマホの中にある、きれいな写真、料理のメモ（PDF）、歌の練習（音声）、短い動画。
      </>,
      <>
        “SNSにのせて終わりにするのはもったいないからKIVO
        TALKにも投稿してみたんです”
      </>,
      <>
        次の日には1人に買ってもらえた。
        <br />
        その次の日には5人に買ってもらえた。
      </>,
    ],
    note: <></>,
    align: 'left',
  },
  {
    id: 2,
    image: '/assets/images/sns-user/section-02.png',
    titles: [
      <>
        ダウンロード、スクリーンショットできない
        <br />
        仕様だから、KIVOTALKに投稿したコンテンツが勝手に広がる心配もないので安心して利用できます。
      </>,
    ],
    note: '※アプリ内でスクリーンショット、ダウンロードを完全制御',
    align: 'right',
  },
  {
    id: 3,
    image: '/assets/images/sns-user/section-03.png',
    titles: [
      <>
        なにかを新しく作る必要はありません。 スマホに眠っているもの
        <span className="text-[16px] md:text-[20px]">(※)</span>を“ついでに”KIVO
        TALKにも投稿するだけ。
      </>,
      <>
        何もしなくても発見の画面であなたのセンスを見つけてくれる人が必ずいます。
      </>,
    ],
    note: '※画像、動画、音声、PDFデータのコンテンツに対応',
    align: 'left',
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
            className={`relative z-10 flex h-full px-5 py-15 md:px-15 md:py-[120px] ${
              section.align === 'left' ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className="max-w-[580px] text-white">
              <h2 className="text-[20px] font-bold md:text-[28px]">
                {section.titles.map((title, index) => (
                  <span key={index} className="mb-8 block last:mb-0">
                    {title}
                  </span>
                ))}
              </h2>
              {section.note ? (
                <p className="mt-8 text-[16px] text-white md:mt-12 md:text-[18px]">
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
