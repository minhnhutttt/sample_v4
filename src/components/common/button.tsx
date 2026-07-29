import type { ButtonHTMLAttributes, ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

type ButtonOwnProps = {
  children: ReactNode;
  badge?: string;
  href?: string;
  className?: string;
};

type ButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>;

const Button = ({
  children,
  badge,
  href,
  className = '',
  ...buttonProps
}: ButtonProps) => {
  const content = (
    <>
      {badge && (
        <span className="shrink-0 rounded-full bg-[#ffc2cb] px-[24px] py-[4px] text-[24px] leading-[1.67] font-bold tracking-[0.72px] text-[#801201]">
          {badge}
        </span>
      )}
      <span className="text-[24px] leading-[1.67] font-bold tracking-[0.72px] text-white">
        {children}
      </span>
      <span className="flex shrink-0 items-center justify-center rounded-full bg-[#ffc2cb] p-[12px]">
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

  const sharedClassName = `flex items-center justify-between gap-[48px] rounded-full bg-[#f03d22] px-[20px] py-[16px] shadow-[0px_0px_26px_0px_rgba(240,61,34,0.5),6px_6px_0px_0px_rgba(176,2,27,0.3)] transition-opacity hover:opacity-90 ${className}`;

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

export default Button;
