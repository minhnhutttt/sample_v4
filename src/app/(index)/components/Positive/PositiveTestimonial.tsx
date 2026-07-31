import type { ReactNode } from 'react';

import Image from 'next/image';

import FadeIn from '@/components/common/fade-in';

type PositiveTestimonialProps = {
  avatar: string;
  avatarAlt: string;
  quote: ReactNode;
  attribution: string;
};

const PositiveTestimonial = ({
  avatar,
  avatarAlt,
  quote,
  attribution,
}: PositiveTestimonialProps) => {
  const photo = (
    <div className="relative size-[72px] shrink-0 overflow-hidden rounded-full border border-[#016cbb] bg-[#e6f4ff] shadow-[8px_8px_0px_0px_rgba(1,108,187,0.15)] md:size-[200px] lg:size-[280px]">
      <Image src={avatar} alt={avatarAlt} fill className="object-cover" />
    </div>
  );

  const card = (
    <div className="relative flex w-full flex-col items-end gap-[8px] rounded-[24px] bg-[#434f8e] p-[20px] md:w-[600px] md:rounded-[40px] md:p-[40px]">
      <p className="text-[15px] leading-[1.85] text-[#eeeff7] md:text-[20px] md:leading-[1.8]">
        {quote}
      </p>
      <p className="text-[14px] leading-[2] tracking-[0.52px] text-[#eeeff7] md:text-[16px] md:tracking-[0.64px]">
        {attribution}
      </p>
      <div
        aria-hidden
        className="absolute top-10 h-[16px] w-[20px] -translate-y-1/2 group-odd:-left-[14px] group-even:-right-[14px] group-even:rotate-180 md:top-1/2 md:h-[22px] md:w-[27px] md:group-odd:-left-[20px] md:group-even:-right-[20px]"
      >
        <Image
          src="/assets/images/positive/quote-tail.svg"
          alt=""
          fill
          className="group-even:-scale-y-100"
        />
      </div>
    </div>
  );

  return (
    <FadeIn className="group flex w-full flex-row gap-[24px] even:flex-col-reverse even:flex-row-reverse md:max-w-[940px] md:items-center md:justify-between md:gap-[60px]">
      {photo}
      {card}
    </FadeIn>
  );
};

export default PositiveTestimonial;
