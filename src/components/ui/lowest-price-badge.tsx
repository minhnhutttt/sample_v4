import Image from 'next/image';

type LowestPriceBadgeProps = {
  className?: string;
};

const LowestPriceBadge = ({ className = '' }: LowestPriceBadgeProps) => (
  <div
    className={['relative flex min-h-[61px] w-[220px] items-end', className]
      .filter(Boolean)
      .join(' ')}
  >
    <Image
      src="/assets/images/trainer-badge.png"
      alt=""
      width={52}
      height={61}
      className="absolute top-0 left-0 z-10 h-[61px] w-[52px] object-cover object-bottom"
    />

    {/* The tag artwork stretches to whatever the label needs. */}
    <div className="relative ml-[30px] flex min-h-[37px] w-[190px] items-center">
      <Image
        src="/assets/images/badge-tag.svg"
        alt=""
        width={190}
        height={37}
        className="absolute inset-0 h-full w-full"
      />
      <p className="relative pl-[24px] leading-[1.8] font-bold tracking-[0.72px]">
        <span className="text-[18px]">地域</span>
        <span className="text-[15px]">で</span>
        <span className="text-[18px]">価格最安！</span>
      </p>
    </div>
  </div>
);

export default LowestPriceBadge;
