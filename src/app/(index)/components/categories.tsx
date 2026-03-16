'use client';

import Link from 'next/link';

const ITEMS = [
  { title: 'KIVOって、\nどんなアプリ？', src: '/assets/video/m-1.mp4' },
  { title: 'まずはここから\n始めよう', src: '/assets/video/m-4.mp4' },
  { title: '本気で稼ぐなら、\nPremiumへ', src: '/assets/video/m-3.mp4' },
  { title: '困ったときは\nお気軽に', src: '/assets/video/m-2.mp4' },
  { title: '他と何が違うの？\n正直に答えます', src: '/assets/video/m-1.mp4' },
  { title: '最新情報は\nここでチェック', src: '/assets/video/m-4.mp4' },
  { title: 'KIVOをつくって\nいる人たち', src: '/assets/video/m-3.mp4' },
  { title: 'ロゴや素材は\nこちらからどうぞ', src: '/assets/video/m-2.mp4' },
  { title: 'ご利用前に\nご確認ください', src: '/assets/video/m-1.mp4' },
  { title: '大切な情報の\n扱い方について', src: '/assets/video/video-02.mp4' },
];

const CardItem = ({ title, src }: { title: string; src: string }) => {
  const [line1, line2] = title.split('\n');
  return (
    <Link
      href="#"
      className="group js-projects relative col-span-2 block aspect-[16/9] overflow-clip rounded-md text-[40px] md:col-span-1 md:rounded-lg md:text-[4cqw]"
    >
      <div className="title-text font-shippori absolute inset-0 z-10 flex items-center justify-center bg-black/30 p-5 text-center leading-snug font-bold text-white duration-300">
        {line1} <br /> {line2}
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
