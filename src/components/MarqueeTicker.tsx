import { getAnnouncementBar } from '@/app/lib/microcms';
import { AnnouncementBarItem } from '@/app/types/microcms';

const MARQUEE_TEXT = 'NEW: KIVO公式サイト公開のお知らせ';

// ─── Marquee ───────────────────────────────────────────────────────────────
const MarqueeTicker = async () => {
  let barItems: AnnouncementBarItem[] = [];
  try {
    barItems = await getAnnouncementBar();
  } catch (e) {
    console.error('Failed to fetch announcement bar:', e);
  }

  // Nhân đôi cho đến khi đủ 10 phần tử
  while (barItems.length > 0 && barItems.length < 10) {
    barItems = [...barItems, ...barItems];
  }

  return (
    <div className="flex h-5 items-center overflow-hidden bg-[#F78629] duration-200 group-[.active]:bg-[#242424]">
      <style>{`
        @keyframes kivo-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .kivo-marquee-track {
          display: flex;
          white-space: nowrap;
          animation: kivo-marquee 70s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className="kivo-marquee-track">
        {[0, 1].map((outerIdx) => (
          <div key={outerIdx} className="flex">
            {barItems.map((_, i) => (
              <div
                className="flex items-center gap-4 px-4 text-xs font-semibold tracking-wide text-black duration-200 group-[.active]:text-white"
                key={i}
              >
                <img src="/assets/images/kivo.svg" alt="" />
                {MARQUEE_TEXT}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
