import ReservationCta from './ui/reservation-cta';

/**
 * Figma node 1:933 "追従ボタン" — 95px bar pinned to the bottom of the SP
 * viewport. <IndexPage /> reserves the matching padding so the footer is never
 * covered when scrolled to the end.
 */
const StickyCta = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 h-[95px] border-t border-[#afafaf] bg-white pt-[10px] lg:hidden">
    <ReservationCta className="mx-auto" />
  </div>
);

export default StickyCta;
