import Image from 'next/image';

type LowestPriceBadgeProps = {
  className?: string;
  variant?: 'pc' | 'sp';
};

const LowestPriceBadge = ({
  className = '',
  variant = 'pc',
}: LowestPriceBadgeProps) => {
  const isSp = variant === 'sp';

  return (
    <div
      className={['relative flex min-h-[61px] w-[220px] items-end', className]
        .filter(Boolean)
        .join(' ')}
    >
      <Image
        src="/assets/images/trainer-badge.png"
        alt=""
        width={isSp ? 60 : 52}
        height={isSp ? 70 : 61}
        className={`absolute bottom-0 z-10 object-cover object-bottom ${
          isSp ? 'left-[-24px] h-[70px] w-[60px]' : 'left-0 h-[61px] w-[52px]'
        }`}
      />

      <div
        className={`relative flex min-h-[37px] shrink-0 items-center ${
          isSp ? 'ml-[14px] w-[229px]' : 'ml-[30px] w-[190px]'
        }`}
      >
        <Image
          src={
            isSp
              ? '/assets/images/badge-tag-wide.svg'
              : '/assets/images/badge-tag.svg'
          }
          alt=""
          width={isSp ? 229 : 190}
          height={37}
          className="absolute inset-0 h-full w-full"
        />
        <p className="relative pl-[24px] leading-[1.8] font-bold tracking-[0.72px]">
          <span className={isSp ? 'text-[22px]' : 'text-[18px]'}>地域</span>
          <span className={isSp ? 'text-[18px]' : 'text-[15px]'}>で</span>
          <span className={isSp ? 'text-[22px]' : 'text-[18px]'}>
            価格最安！
          </span>
        </p>
      </div>
    </div>
  );
};

export default LowestPriceBadge;
