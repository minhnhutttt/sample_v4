'use client';

import Link from 'next/link';

const ITEMS = [
  {
    link: '/app',
    title: 'App \nIntroduction',
    text: 'KIVOって、どんなアプリ？',
    src: '/assets/video/video-01.mp4',
  },
  {
    link: '/download',
    title: 'Download \nKIVO',
    text: 'まずはここから始めよう',
    src: '/assets/video/video-02.mp4',
  },
  {
    link: '#',
    title: 'Premium \nBenefits',
    text: '本気で稼ぐなら、Premiumへ',
    src: '/assets/video/video-03.mp4',
  },
  {
    link: '#',
    title: 'Support',
    text: '困ったときはお気軽に',
    src: '/assets/video/video-04.mp4',
  },
  {
    link: '#',
    title: 'KIVO \nvs Other',
    text: '他と何が違うの？正直に答えます',
    src: '/assets/video/video-01.mp4',
  },
  {
    link: '#',
    title: 'Announcements',
    text: '最新情報はここでチェック',
    src: '/assets/video/video-02.mp4',
  },
  {
    link: '/company',
    title: 'We are \nKIVO',
    text: 'KIVOをつくっている人たち',
    src: '/assets/video/video-03.mp4',
  },
  {
    link: '#',
    title: 'Brand asset',
    text: 'ロゴや素材はこちらからどうぞ',
    src: '/assets/video/video-04.mp4',
  },
  {
    link: '#',
    title: 'Terms of Use',
    text: 'ご利用前にご確認ください',
    src: '/assets/video/video-01.mp4',
  },
  {
    link: '#',
    title: 'Privacy Policy',
    text: '大切な情報の扱い方について',
    src: '/assets/video/video-02.mp4',
  },
];

const CardItem = ({
  title,
  text,
  src,
}: {
  title: string;
  text: string;
  src: string;
}) => {
  const [line1, line2] = title.split('\n');
  return (
    <Link
      href="#"
      className="group js-projects relative col-span-2 block aspect-[16/9] overflow-clip rounded-md text-[40px] md:col-span-1 md:rounded-lg md:text-[4cqw]"
    >
      <div className="title-text font-shippori absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 p-5 text-center leading-snug font-bold text-white duration-300">
        <p>
          {line1} <br /> {line2}
        </p>
        <p className="mt-1.5 text-[19px] md:mt-[1cqw] md:text-[2cqw]">{text}</p>
      </div>
      <div className="overflow-hidden">
        <video
          src={src}
          autoPlay
          muted
          preload="metadata"
          className="absolute inset-0 duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  );
};

const Categories = () => (
  <div className="relative bg-[#f78629] p-5 md:p-10">
    <div className="@container grid grid-cols-2 gap-5">
      {ITEMS.map((item) => (
        <CardItem key={item.title} {...item} />
      ))}
    </div>
  </div>
);

export default Categories;
