import Image from 'next/image';

type LowestPriceBadgeProps = {
  className?: string;
};

const LowestPriceBadge = ({ className = '' }: LowestPriceBadgeProps) => {
  return (
    <div
      className={['relative flex items-end', className]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="relative">
        <span className="pointer-events-none absolute top-[-24px] left-[-6px] block h-[106px] w-[74px] overflow-hidden">
          <Image
            src="/assets/images/modal-promo-trainer.png"
            alt=""
            width={222}
            height={166}
            className="absolute top-[-36px] left-[-122px] z-10 max-w-none"
          />
        </span>
        <div className="relative ml-4.5">
          <Image
            src="/assets/images/badge-tag-wide.svg"
            alt=""
            width={234}
            height={65}
            className="block h-[65px] w-[234px]"
          />
          <p className="absolute inset-0 flex flex-col items-center justify-center text-center leading-[1.22] font-bold tracking-[0.8px] text-black">
            <span>
              <span className="text-[18px]">池尻大橋・中目黒</span>
              <span className="text-[14px]">で</span>
            </span>
            <span className="text-[20px]">価格最安</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LowestPriceBadge;
