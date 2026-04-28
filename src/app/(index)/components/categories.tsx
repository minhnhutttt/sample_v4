'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';

const ITEMS = [
  {
    link: '/app',
    title: 'APP \nWorldview',
    text: 'KIVOって、どんなアプリ？',
    src: '/assets/lottie/1.lottie',
  },
  {
    link: '/features',
    title: 'App \nFeatures',
    text: 'KIVO TALKの4つの使い方',
    src: '/assets/lottie/2.lottie',
  },
  {
    link: '/download',
    title: 'Download \nKIVO',
    text: 'まずはここから始めよう',
    src: '/assets/lottie/3.lottie',
  },
  {
    link: '/kivo-rank',
    title: 'KIVO \nPoint',
    text: 'KIVO Pointを貯めて特典獲得！',
    src: '/assets/lottie/4.lottie',
  },
  {
    link: '/subscription',
    title: 'Subscription \nPlan',
    text: 'クリエイターの可能性を広げる特典をチェック',
    src: '/assets/lottie/5.lottie',
  },
  {
    link: '/support',
    title: 'Support',
    text: '困ったときははお気軽に',
    src: '/assets/lottie/6.lottie',
  },
  {
    link: '/compare',
    title: 'KIVO \nvs Other',
    text: '他と何が違うの？正直に答えます',
    src: '/assets/lottie/7.lottie',
  },
  {
    link: '/announcements',
    title: 'Announcements',
    text: '最新情報はここでチェック',
    src: '/assets/lottie/8.lottie',
  },
  {
    link: '/company',
    title: 'We are \nKIVO',
    text: 'KIVOをつくっている人たち',
    src: '/assets/lottie/9.lottie',
  },
  {
    link: '/legal',
    title: 'LEGAL',
    text: 'ご利用前にご確認ください',
    src: '/assets/lottie/10.lottie',
  },
];

const CardItem = ({
  link,
  title,
  text,
  src,
}: {
  link: string;
  title: string;
  text: string;
  src: string;
}) => {
  const [line1, line2] = title.split('\n');
  return (
    <Link
      href={link}
      className="group js-projects relative col-span-2 block aspect-[16/9] overflow-clip rounded-md text-[40px] md:col-span-1 md:rounded-lg md:text-[4cqw]"
    >
      <div className="title-text font-shippori absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 p-5 text-center leading-snug font-bold text-white duration-300">
        <p>
          {line1} <br /> {line2}
        </p>
        <p className="mt-1.5 text-[19px] md:mt-[1cqw] md:text-[2cqw]">{text}</p>
      </div>
      <div className="overflow-hidden">
        <DotLottieReact key={text} src={src} loop autoplay />
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
