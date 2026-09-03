import { EXTERNAL_LINKS } from '@/config/constants';

type TrialFlowCtaProps = {
  className?: string;
};

/**
 * Reservation CTA used only in the 初回体験トレーニングの流れ section
 * (Figma node 205:6426). It diverges from the shared <ReservationCta />:
 * the caption is set in the brand orange (#ff4613) and the button label
 * emphasises 「無料」 / 「で」 at larger sizes than the trailing text.
 */
const TrialFlowCta = ({ className = '' }: TrialFlowCtaProps) => (
  <div className={['w-[335px]', className].filter(Boolean).join(' ')}>
    <p className="text-center text-[12px] font-semibold text-[#ff4613]">
      ＼当日入会で入会金無料！トータル60分の初回体験が0円／
    </p>
    <a
      href={EXTERNAL_LINKS.reservation}
      className="bg-cta mx-auto mt-[3px] flex w-[303px] items-center justify-center rounded-[12px] border-[3px] border-white px-[20px] py-[16px] text-center font-extrabold whitespace-nowrap text-white drop-shadow-[0_4px_6px_rgba(238,154,16,0.2)] transition-transform hover:scale-[1.02]"
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

export default TrialFlowCta;
