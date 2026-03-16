'use client';

import Link from "next/link";

const ITEMS = [
  { title: 'App \nIntroduction', src: '/assets/video/video-01.mp4' },
  { title: 'Download \nKIVO', src: '/assets/video/video-02.mp4' },
  { title: 'Premium \nBenefits', src: '/assets/video/video-03.mp4' },
  { title: 'Support', src: '/assets/video/video-04.mp4' },
  { title: 'KIVO \nvs Other', src: '/assets/video/video-01.mp4' },
  { title: 'Announcements', src: '/assets/video/video-02.mp4' },
  { title: 'We are \nKIVO', src: '/assets/video/video-03.mp4' },
  { title: 'Brand asset', src: '/assets/video/video-04.mp4' },
  { title: 'Terms of Use', src: '/assets/video/video-01.mp4' },
  { title: 'Privacy Policy', src: '/assets/video/video-02.mp4' },
];

const CardItem = ({ title, src }: { title: string; src: string }) => {
  const [line1, line2] = title.split('\n');
  return (
    <Link href="#" className="group js-projects relative col-span-2 block aspect-[16/9] overflow-clip rounded-md text-[40px] md:col-span-1 md:rounded-lg md:text-[100px]">
      <div className="title-text absolute inset-0 bg-black/20 z-10 flex scale-[0.96] items-center justify-center text-center text-white font-bold leading-snug duration-300 group-hover:scale-100 group-hover:opacity-100 md:opacity-0">
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
  <div className="bg-[#f78629] p-5 md:p-10 mb-30 md:mb-40">
    <div className="grid grid-cols-2 gap-5">
      {ITEMS.map((item) => (
        <CardItem key={item.title} {...item} />
      ))}
    </div>
  </div>
);

export default Categories;