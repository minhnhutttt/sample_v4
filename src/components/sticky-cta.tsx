import ReservationCta from './ui/reservation-cta';

const StickyCta = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 min-h-[var(--lp-sticky-cta-height)] border-t border-[#afafaf] bg-white pt-[10px] pb-[6px] lg:hidden">
    <ReservationCta className="mx-auto" />
  </div>
);

export default StickyCta;
