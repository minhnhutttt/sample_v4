import { Allura } from 'next/font/google';
import Image from 'next/image';

import StoryStepRing from './StoryStepRing';

const allura = Allura({ weight: '400', subsets: ['latin'] });

type StoryStepProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  photoShadow?: boolean;
  ringClassName?: string;
};

const StoryStep = ({
  number,
  title,
  description,
  image,
  imageAlt,
  photoShadow = false,
  ringClassName,
}: StoryStepProps) => {
  const photo = (
    <div className="relative order-1 shrink-0 lg:group-even:order-2">
      <div
        className={`relative size-[280px] overflow-hidden rounded-full bg-[#d3d3d3] md:size-[440px] ${photoShadow ? 'shadow-[6px_6px_0px_0px_rgba(0,52,87,0.25)] md:shadow-[10px_10px_0px_0px_rgba(0,52,87,0.25)]' : ''}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 440px, 200px"
          className="object-cover"
        />
      </div>
      <StoryStepRing className={ringClassName} />
    </div>
  );

  const content = (
    <div className="order-2 flex w-full flex-col items-start gap-[16px] md:w-[420px] md:gap-[28px] lg:group-even:order-1">
      <div className="relative flex w-full items-center justify-center rounded-full rounded-tl-full rounded-r-full bg-white px-[24px] py-[16px] group-even:rounded-tr-full md:px-[40px] md:py-[20px] md:group-even:rounded-l-full md:group-even:rounded-tl-none md:group-even:rounded-r-none">
        <p className="text-[28px] font-bold tracking-[0.4px] text-[#434f8e] md:text-[40px] md:tracking-[0.8px]">
          {title}
        </p>
        <span
          className={`absolute bottom-[calc(100%-16px)] left-1/2 -translate-x-1/2 text-[60px] leading-none text-white md:bottom-[calc(100%-24px)] md:text-[40px] md:text-[80px] ${allura.className}`}
          aria-hidden
        >
          {number}
        </span>
      </div>
      <p className="text-[20px] leading-[1.67] font-medium tracking-[0.42px] text-white md:text-[24px] md:tracking-[0.72px]">
        {description}
      </p>
    </div>
  );

  return (
    <div className="group flex w-full items-center justify-center gap-[60px] max-lg:flex-wrap max-md:flex-col md:max-w-[940px] md:gap-[24px] md:gap-[80px] lg:justify-between">
      {photo}
      {content}
    </div>
  );
};

export default StoryStep;
