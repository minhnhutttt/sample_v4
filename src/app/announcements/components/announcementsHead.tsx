import { getAnnouncementBar } from '@/app/lib/microcms';
import { AnnouncementBarItem } from '@/app/types/microcms';

import { AnnouncementBar } from './announcementBar';

const AnnouncementsHead = async () => {
  let barItems: AnnouncementBarItem[] = [];
  try {
    barItems = await getAnnouncementBar();
  } catch (e) {
    console.error('Failed to fetch announcement bar:', e);
  }
  return (
    <div className="px-5 pb-10">
      <div className="@container mx-auto w-full max-w-[1400px]">
        <h2 className="text-center text-[15cqw] leading-none font-black uppercase md:text-[13cqw]">
          <p>UPDATES</p>
          <p className="flex items-center justify-center max-md:flex-col">
            BY KIVO
            <button className="group relative mt-[2cqw] flex w-[30cqw] items-center justify-center overflow-hidden md:w-[12cqw]">
              <img src="/assets/images/icon.png" alt="" />
            </button>
          </p>
        </h2>
        <p className="mt-5 text-center text-[18px] md:mt-[2cqw] md:text-[2cqw]">
          KIVOの最新情報、プレスリリース、アップデートノートをここで発信します。
        </p>
      </div>
      <AnnouncementBar items={barItems} />
    </div>
  );
};

export default AnnouncementsHead;
