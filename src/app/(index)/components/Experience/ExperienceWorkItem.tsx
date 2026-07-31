import Image from 'next/image';

import FadeIn from '@/components/common/fade-in';

type ExperienceWorkItemProps = {
  number: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const ExperienceWorkItem = ({
  number,
  badge,
  title,
  description,
  image,
  imageAlt,
}: ExperienceWorkItemProps) => {
  return (
    <FadeIn className="group relative flex w-full flex-col items-center gap-8 max-md:pr-5 md:flex-row md:justify-between md:gap-10 md:even:flex-row-reverse">
      <div className="relative flex flex-col items-start gap-3 rounded-[28px] bg-white/70 bg-contain bg-no-repeat px-5 pt-10 pb-6 text-left group-odd:bg-top-right group-even:bg-top-left md:w-[78%] md:max-w-[870px] md:gap-5 md:pt-12 md:pb-10 md:pl-16 md:group-odd:bg-[url(/assets/images/experience/ichimatsu-box-right.png)] md:group-odd:pr-[200px] md:group-even:bg-[url(/assets/images/experience/ichimatsu-box-left.png)] md:group-even:pl-[200px] lg:group-odd:pr-[250px] lg:group-even:pl-[250px]">
        <span className="font-allura absolute -top-7 text-[52px] leading-none text-[#434f8e] md:-top-9 md:text-[72px]">
          {number}
        </span>
        <span className="rounded-full bg-[#434f8e] px-6 py-1 text-[14px] font-bold whitespace-nowrap text-white md:px-8 md:py-2 md:text-[18px]">
          {badge}
        </span>
        <p className="text-[18px] font-black text-[#434f8e] max-md:leading-loose md:text-[24px]">
          {title}
        </p>
        <p className="text-[15px] leading-[1.8] font-medium text-[#1c213b] max-md:tracking-wider md:text-[18px]">
          {description}
        </p>
      </div>
      <div className="absolute -right-4 w-[175px] max-md:top-[-110px] md:w-[37.5%] md:group-odd:right-0 md:group-even:left-0">
        <Image
          src="/assets/images/experience/experience-item-bg.png"
          alt=""
          width={986}
          height={779}
          className="absolute top-1/2 right-[-15px] left-[-15px] w-[calc(100%+30px)] max-w-none -translate-y-1/2 md:right-[-36px] md:left-[-36px] md:w-[calc(100%+72px)] md:group-even:scale-x-[-1]"
        />
        <Image
          src={image}
          alt={imageAlt}
          width={840}
          height={840}
          className="relative w-full max-w-[175px] rounded-full md:max-w-[420px]"
        />
      </div>
    </FadeIn>
  );
};

export default ExperienceWorkItem;
