import type { ReactNode } from 'react';

import { EXTERNAL_LINKS } from '@/config/constants';

type ReservationCtaProps = {
  className?: string;
  captionClassName?: string;
  caption?: ReactNode;
  withSparkle?: boolean;
};

const ReservationCta = ({
  className = '',
  captionClassName = 'text-[12px] text-[#272727]',
  caption = '＼当日入会で入会金無料！トータル60分の初回体験が0円／',
  withSparkle = false,
}: ReservationCtaProps) => (
  <div className={['w-[335px]', className].filter(Boolean).join(' ')}>
    <p className={`relative text-center font-semibold ${captionClassName}`}>
      {withSparkle && (
        <>
          <span
            aria-hidden
            className="absolute top-1/2 left-0 h-px w-[53px] rotate-[65deg] bg-white"
          />
          <span
            aria-hidden
            className="absolute top-1/2 right-0 h-px w-[53px] rotate-[115deg] bg-white"
          />
        </>
      )}
      {caption}
    </p>
    <a
      href={EXTERNAL_LINKS.reservation}
      className="bg-cta mx-auto mt-[6px] flex min-h-[54px] w-[303px] items-center justify-center rounded-[12px] border-[3px] border-white px-[20px] py-[6px] text-center text-[20px] font-extrabold text-white drop-shadow-[0_4px_6px_rgba(238,154,16,0.2)] transition-transform hover:scale-[1.02]"
    >
      <span className="leading-none">
        <span className="text-[26px]">無料</span>
        <span className="text-[15px] tracking-[0.02em]">で</span>
        <span className="text-[20px] tracking-[0.02em]">
          初回体験を予約する
        </span>
      </span>
    </a>
  </div>
);

export default ReservationCta;
