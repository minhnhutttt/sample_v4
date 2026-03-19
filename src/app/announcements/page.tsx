import type { Metadata } from 'next';

import PageFv from '@/components/PageFv';
import { OG, TWITTER } from '@/config/constants';

import AnnouncementsItems from './components/announcementsItems';

export const metadata: Metadata = {
  title: 'Announcements',
  openGraph: {
    ...OG,
    title: 'announcements',
    url: '/announcements',
  },
  twitter: {
    ...TWITTER,
    title: 'announcements',
  },
  alternates: {
    canonical: '/announcements',
  },
};

const AnnouncementsPage = () => {
  return (
    <div>
      <PageFv
        text={
          <>
            KIVO App <br />
            Announcements
          </>
        }
      />
      <div className="bg-[#FAF2E8]">
        <div className="pt-28 md:pt-33.5">
          <div className="px-5 pb-10">
            <div className="@container mx-auto w-full max-w-[1400px]">
              <h2 className="text-center text-[15cqw] leading-none font-black uppercase md:text-[13cqw]">
                <p>UPDATES</p>
                <p className="flex items-center justify-center max-md:flex-col">
                  BY KIVO
                  <button className="group relative mt-[2cqw] flex h-[20cqw] w-[50cqw] items-center justify-center overflow-hidden rounded-[3cqw] text-[4cqw] md:h-[9cqw] md:w-[12cqw] md:rounded-[2cqw] md:text-[1.2cqw]">
                    <div className="absolute inset-0 bg-[#f78629]"></div>
                    <div className="absolute inset-0 translate-y-full bg-[#fff4a6] duration-200 group-hover:translate-y-0"></div>
                    <div className="relative flex h-full w-full items-center justify-center">
                      <svg
                        className="absolute top-[0.5cqw] right-[0.5cqw] z-2 size-[5cqw] text-current duration-200 group-hover:top-[1cqw] group-hover:right-[1cqw] md:size-[2cqw]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="stroke-current"
                          d="M5.53757 7.1199L5.72853 18.386L16.6127 18.195"
                          strokeWidth="4"
                        ></path>
                        <path
                          className="stroke-current"
                          d="M18.1953 5.53754L6.32908 17.4038"
                          strokeWidth="4"
                        ></path>
                      </svg>
                      Subscribe to the newsletter
                    </div>
                  </button>
                </p>
              </h2>
              <p className="mt-[2cqw] text-center text-[20px] md:text-[2cqw]">
                KIVOの最新情報、プレスリリース、アップデートノートをここで発信します。
              </p>
            </div>
          </div>
          <div className="py-15 md:py-20">
            <div className="border-y border-black/20">
              <div className="mx-auto grid w-full divide-y divide-black/20 md:grid-cols-3 md:divide-x">
                <div className="p-5">
                  <div className="relative flex items-center text-[16px]">
                    <select className="h-16 w-full appearance-none rounded-2xl border border-black px-5 md:h-20">
                      <option value="">全て</option>
                      <option value="">アップデート</option>
                      <option value="trends">使い方</option>
                      <option value="in-the-news">プレスリリース</option>
                      <option value="tiktok">お知らせ</option>
                      <option value="platform">コーポレート</option>
                    </select>
                    <svg
                      className="absolute right-5 h-3 w-auto"
                      viewBox="0 0 20 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="stroke-current"
                        d="M17.6631 2.06908L9.56173 9.90039L2.00046 2.06908"
                        strokeWidth="4"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid h-16 grid-cols-3 divide-x divide-black rounded-2xl border border-black md:h-20">
                    <button className="h-full">アップデート</button>
                    <button className="h-full">使い方</button>
                    <button className="h-full">プレスリリース</button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      className="h-16 w-full rounded-2xl border border-black px-5 md:h-20"
                      placeholder="Search:"
                    />
                    <svg
                      className="absolute right-5 h-8 md:h-10"
                      viewBox="0 -960 960 960"
                      fill="#000000"
                    >
                      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <AnnouncementsItems />
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default AnnouncementsPage;
