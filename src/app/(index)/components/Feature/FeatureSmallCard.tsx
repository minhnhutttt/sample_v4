import Image from 'next/image';

type FeatureSmallCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};

const FeatureSmallCard = ({
  image,
  imageAlt,
  title,
  description,
}: FeatureSmallCardProps) => {
  return (
    <div className="relative flex w-[354px] flex-col items-center overflow-hidden pt-[100px] md:pt-[140px]">
      <div className="absolute top-0 z-10 size-[220px] shrink-0 overflow-hidden rounded-full md:size-[280px]">
        <div className="relative size-full overflow-hidden rounded-full">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-[16px] bg-[url(/assets/images/feature/ichimatsu.png)] pt-32 md:rounded-[28px] md:pt-40">
        <div className="relative flex h-full w-full flex-col items-center gap-[16px] bg-[#434f8e] px-[24px] pt-[20px] pb-[32px] text-left before:absolute before:top-[-100px] before:aspect-square before:w-[440px] before:rounded-full before:bg-[#434f8e] md:px-[40px] md:pt-[12px] md:before:w-[454px]">
          <div className="relative flex items-center gap-[10px]">
            <Image
              src="/assets/images/feature/bullet-icon-white.svg"
              alt=""
              aria-hidde
              width={33}
              height={32}
              className="absolute -top-[10px] -left-[32px]"
            />
            <p className="text-[22px] font-bold text-white md:text-[24px]">
              {title}
            </p>
          </div>
          <p className="relative text-[15px] leading-loose font-medium text-[#eeeff7] md:text-[18px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSmallCard;
