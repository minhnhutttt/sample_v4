import Image from 'next/image';

type LowestPriceBadgeProps = {
  className?: string;
};

const LowestPriceBadge = ({ className = '' }: LowestPriceBadgeProps) => (
  <div className={['relative h-[61px] w-[220px]', className].join(' ')}>
    <Image
      src="/assets/images/trainer-badge.png"
      alt=""
      width={52}
      height={61}
      className="absolute top-0 left-0 z-10 h-[61px] w-[52px] object-cover object-bottom"
    />
    <Image
      src="/assets/images/badge-tag.svg"
      alt=""
      width={190}
      height={37}
      className="absolute top-[24px] left-[30px] h-[37px] w-[190px]"
    />
    <p className="absolute top-[26px] left-[54px] w-[153px] leading-[1.8] font-bold tracking-[0.72px]">
      <span className="text-[18px]">地域</span>
      <span className="text-[15px]">で</span>
      <span className="text-[18px]">価格最安！</span>
    </p>
  </div>
);

export default LowestPriceBadge;
