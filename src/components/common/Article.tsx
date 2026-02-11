import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface ArticleType {
  image: string;
  title: string;
  text: ReactNode;
  sm?: boolean;
  md?: boolean;
  isAnimating?: boolean;
}

const Article = ({ image, title, text, sm, md, isAnimating }: ArticleType) => {
  return (
    <Link
      href="/"
      className={`z-30 flex flex-col items-center rounded-[10px] border border-white/20 bg-[rgba(255,255,255,0.02)] p-7.5 [box-shadow:0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.5px] backdrop-filter ${md ? 'max-w-[360px] md:max-w-[710px]' : ''}`}
    >
      <Image
        src={image}
        alt={title}
        width={650}
        height={450}
        className={`transition-transform duration-1000 ease-out ${isAnimating ? 'scale-[0.98]' : 'scale-100'} `}
      />
      <h4
        className={`my-5 font-black md:mt-[63px] md:mb-[50px] ${sm || md ? 'text-[30px] md:text-[35px]' : 'text-[24px] md:text-[50px]'}`}
      >
        {title}
      </h4>
      <p
        className={`max-w-[370px] text-left text-[18px] font-medium text-[#888888] md:${md ? 'pb-5 md:pb-[66px]' : ''}`}
      >
        {text}
      </p>
    </Link>
  );
};
export default Article;
