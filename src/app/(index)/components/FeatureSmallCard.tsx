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
    <div className="relative flex w-full max-w-[510px] flex-col items-center pt-[100px] md:pt-[140px]">
      <div className="absolute top-0 size-[160px] shrink-0 overflow-hidden rounded-full md:size-[280px]">
        <div className="relative size-full overflow-hidden rounded-full">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-[16px] rounded-[24px] bg-[#434f8e] px-[24px] pt-[40px] pb-[32px] text-center md:rounded-[40px] md:px-[40px] md:pt-[68px]">
        <div className="relative flex items-center gap-[10px]">
          <Image
            src="/assets/images/feature/bullet-icon.svg"
            alt=""
            aria-hidden
            width={24}
            height={23}
            className="absolute -top-[6px] -left-[24px] -rotate-30"
          />
          <p className="text-[18px] font-bold tracking-[0.36px] text-white md:text-[24px] md:tracking-[0.72px]">
            {title}
          </p>
        </div>
        <p className="text-[13px] leading-[2] font-medium tracking-[0.52px] text-[#eeeff7] md:text-[18px] md:tracking-[0.72px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureSmallCard;
