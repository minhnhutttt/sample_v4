'use client';

import Image from 'next/image';

const PageHead = ({
  title,
  en,
  image,
}: {
  title: string;
  en: string;
  image: string;
}) => {
  return (
    <div className="relative z-10 min-h-screen px-10 pt-16 md:pt-20.5">
      <div className="absolute inset-0 z-10 bg-[#03234E]/65 mix-blend-hard-light"></div>
      <Image
        src={image}
        alt="logo"
        width={1280}
        height={920}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-20 mx-auto w-full max-w-[1200px] pt-[30%] md:pt-[10%]">
        <div className="w-full max-w-[450px] leading-[1.6]">
          <h1 className="mb-5 border-b border-white pb-7 text-[24px] font-medium md:text-[40px]">
            {title}
          </h1>
          <p className="font-dm text-[36px] md:text-[60px]">{en}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHead;
