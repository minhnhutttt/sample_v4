import Image from 'next/image';

type FeatureCardProps = {
  image: string;
  imageAlt: string;
  label: string;
  title: string;
  description: string;
};

const FeatureCard = ({
  image,
  imageAlt,
  label,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="flex w-full flex-col items-center md:max-w-[510px]">
      <div className="relative w-full max-w-[510px] md:max-w-none">
        <div className="relative">
          <Image
            src="/assets/images/feature/card-bg.png"
            alt=""
            width={1079}
            height={641}
            className="absolute top-1/2 -left-[3%] w-[105%] max-w-none -translate-y-1/2 md:-right-2.5 md:-left-5 md:w-[540px]"
          />
          <Image
            src={image}
            alt={imageAlt}
            width={510}
            height={300}
            className="relative w-full rounded-[999px]"
          />
        </div>
        <div className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 md:bottom-[-48px]">
          <div className="min-w-[280px] rounded-[16px] bg-white px-5 py-[10px] text-center [box-shadow:4px_4px_0_0_rgba(67,_79,_142,_0.70)] md:min-w-[320px] md:py-[12px]">
            <p className="text-[22px] font-bold whitespace-nowrap text-[#434f8e] md:text-[36px]">
              {label}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[60px] flex flex-col items-center gap-[16px] md:mt-[72px] md:items-start">
        <div className="flex w-full justify-center">
          <div className="relative flex items-center justify-center gap-[10px]">
            <Image
              src="/assets/images/feature/bullet-icon.svg"
              alt=""
              aria-hidden
              width={24}
              height={23}
              className="absolute -top-[6px] -left-[24px] -rotate-30 max-md:w-5"
            />
            <p className="text-center text-[20px] font-bold text-[#434f8e] md:text-[28px]">
              {title}
            </p>
          </div>
        </div>
        <p className="text-center text-[16px] leading-[1.8] font-medium tracking-[-0.01em] text-[#1c213b] md:text-left md:text-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
