import { EXTERNAL_LINKS } from '@/config/constants';

type ReservationCtaProps = {
  className?: string;
  /** The PC chrome sits on the dark wall (Figma 65:76); SP sits on white. */
  captionClassName?: string;
};

const ReservationCta = ({
  className = '',
  captionClassName = 'text-[#272727]',
}: ReservationCtaProps) => (
  <div className={['w-[335px]', className].filter(Boolean).join(' ')}>
    <p className={`text-center text-[12px] font-semibold ${captionClassName}`}>
      ＼当日入会で入会金無料！トータル60分の初回体験が0円／
    </p>
    <a
      href={EXTERNAL_LINKS.reservation}
      className="bg-cta mx-auto mt-[6px] flex min-h-[54px] w-[303px] items-center justify-center rounded-[12px] border-[3px] border-white px-[20px] py-[6px] text-center text-[18px] font-extrabold text-white drop-shadow-[0_4px_6px_rgba(238,154,16,0.2)] transition-transform hover:scale-[1.02]"
    >
      無料で初回体験を予約する
    </a>
  </div>
);

export default ReservationCta;
