import ReservationCta from './ui/reservation-cta';

/**
 * Figma node 1:933 "追従ボタン" — bar pinned to the bottom of the SP viewport.
 * Its height and the padding <IndexPage /> reserves for it both read
 * --lp-sticky-cta-height, so the two can no longer drift apart.
 */
const StickyCta = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 min-h-[var(--lp-sticky-cta-height)] border-t border-[#afafaf] bg-white pt-[10px] pb-[6px] lg:hidden">
    <ReservationCta className="mx-auto" />
  </div>
);

export default StickyCta;
