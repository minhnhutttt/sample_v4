import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface ArticleType {
  link: string;
  image: string;
  title: ReactNode;
  text: ReactNode;
  sm?: boolean;
  md?: boolean;
  isAnimating?: boolean;
  active?: boolean;
}

const Article = ({
  link,
  image,
  title,
  text,
  sm,
  md,
  isAnimating,
  active,
}: ArticleType) => {
  return (
    <Link
      href={link}
      className={`z-30 flex flex-col items-center rounded-[10px] border border-white/20 bg-[rgba(255,255,255,0.02)] p-7.5 [box-shadow:0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.5px] backdrop-filter ${md ? 'max-w-[360px] md:max-w-[710px]' : ''} ${active && 'text-[#F78629]'}`}
    >
      <Image
        src={image}
        alt=""
        width={650}
        height={450}
        className={`transition-transform duration-1000 ease-out ${isAnimating ? 'scale-[0.98]' : 'scale-100'} `}
      />
      <h4
        className={`my-5 text-center font-black md:mt-[63px] md:mb-[50px] ${sm || md ? 'text-[30px] md:text-[35px]' : 'text-[24px] md:text-[50px]'}`}
      >
        {title}
      </h4>
      <p
        className={`max-w-[370px] text-left text-[18px] font-medium text-[#888888] md:${md ? 'max-w-[440px] pb-5 md:pb-[66px]' : ''} ${active && 'text-[#F78629]'}`}
      >
        {text}
      </p>
    </Link>
  );
};
export default Article;
