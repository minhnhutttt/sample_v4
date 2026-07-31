import type { ButtonHTMLAttributes, ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

type FvButtonOwnProps = {
  children: ReactNode;
  badge?: string;
  href?: string;
  className?: string;
};

type FvButtonProps = FvButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof FvButtonOwnProps>;

const FvButton = ({
  children,
  badge,
  href,
  className = '',
  ...buttonProps
}: FvButtonProps) => {
  const content = (
    <>
      {badge && (
        <span className="flex shrink-0 items-center justify-center rounded-full bg-[#ffc2cb] text-center text-[16px] leading-[1.67] font-bold tracking-[0.056cqw] text-[#801201] max-md:h-[32px] max-md:w-[65px] md:px-[1.875cqw] md:py-[0.556cqh] md:text-[1.875cqw]">
          {badge}
        </span>
      )}
      <span className="text-[16px] leading-[1.67] font-bold tracking-[0.056cqw] text-white md:text-[1.875cqw]">
        {children}
      </span>
      <span className="flex shrink-0 items-center justify-center rounded-full bg-[#ffc2cb] max-md:size-8 md:px-[0.938cqw] md:py-[1.667cqh]">
        <Image
          src="/assets/icons/arrow-forward-ios.svg"
          alt=""
          aria-hidden
          width={24}
          height={24}
        />
      </span>
    </>
  );

  const sharedClassName = `flex max-md:h-[56px] max-md:w-[343px] items-center justify-between gap-[3.75cqw] rounded-full bg-[#f03d22] md:px-[1.563cqw] md:py-[2.222cqh] shadow-[0cqw_0cqh_2.031cqw_0cqw_rgba(240,61,34,0.5),0.469cqw_0.833cqh_0cqw_0cqw_rgba(176,2,27,0.3)] transition-opacity hover:opacity-90 max-md:px-5 ${className}`;

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={sharedClassName} {...buttonProps}>
      {content}
    </button>
  );
};

export default FvButton;
