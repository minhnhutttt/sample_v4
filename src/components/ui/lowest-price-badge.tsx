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
      className={[
        'relative flex items-end',
        isSp ? 'min-h-[82px] w-[296px]' : 'min-h-[61px] w-[220px]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Image
        src="/assets/images/trainer-badge.png"
        alt=""
        width={isSp ? 70 : 52}
        height={isSp ? 82 : 61}
        className={`absolute bottom-0 z-10 object-cover object-bottom ${
          isSp ? 'left-0 h-[82px] w-[70px]' : 'left-0 h-[61px] w-[52px]'
        }`}
      />

      <div
        className={`relative flex shrink-0 items-center ${
          isSp
            ? 'ml-[40px] min-h-[50px] w-[255px]'
            : 'ml-[30px] min-h-[37px] w-[190px]'
        }`}
      >
        <Image
          src={
            isSp
              ? '/assets/images/badge-tag-wide.svg'
              : '/assets/images/badge-tag.svg'
          }
          alt=""
          width={isSp ? 255 : 190}
          height={isSp ? 50 : 37}
          className="absolute inset-0 h-full w-full"
        />
        <p
          className={`relative leading-[1.8] font-bold ${
            isSp
              ? 'text-ink-soft pl-[32px] tracking-[0.04em]'
              : 'pl-[24px] tracking-[0.72px]'
          }`}
        >
          <span className={isSp ? 'text-[24px]' : 'text-[18px]'}>地域</span>
          <span className={isSp ? 'text-[20px]' : 'text-[15px]'}>で</span>
          <span className={isSp ? 'text-[24px]' : 'text-[18px]'}>
            価格最安！
          </span>
        </p>
      </div>
    </div>
  );
};

export default LowestPriceBadge;
