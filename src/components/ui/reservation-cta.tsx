import { EXTERNAL_LINKS } from '@/config/constants';

type ReservationCtaProps = {
  className?: string;
};

/**
 * Figma node 1:935 "Group 14" — the 335px lead-in copy + CTA button pair.
 * The PC rail pins it bottom-right; SP pins it to the 追従ボタン bar.
 */
const ReservationCta = ({ className = '' }: ReservationCtaProps) => (
  <div className={['w-[335px]', className].join(' ')}>
    <p className="text-center text-[12px] font-semibold text-[#272727]">
      ＼当日入会で入会金無料！トータル60分の初回体験が0円／
    </p>
    <a
      href={EXTERNAL_LINKS.reservation}
      className="bg-cta mx-auto mt-[6px] flex h-[54px] w-[303px] items-center justify-center rounded-[12px] border-[3px] border-white px-[20px] text-[18px] font-extrabold text-white drop-shadow-[0_4px_6px_rgba(238,154,16,0.2)] transition-transform hover:scale-[1.02]"
    >
      無料で初回体験を予約する
    </a>
  </div>
);

export default ReservationCta;
