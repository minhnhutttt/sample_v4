import type { Metadata } from 'next';

import Title from '@/components/common/title';
import { OG, TWITTER } from '@/config/constants';
import { getHistory } from '@/services/microcms';
import { History } from '@/types/history';

export const metadata: Metadata = {
  title: 'History',
  openGraph: {
    ...OG,
    title: 'history',
    url: '/history',
  },
  twitter: {
    ...TWITTER,
    title: 'history',
  },
  alternates: {
    canonical: '/history',
  },
};

const HistoryPage = async () => {
  const history = await getHistory();
  return (
    <div className="px-5 pt-20 pb-32 md:pt-22 md:pb-40">
      <div className="relative mx-auto flex w-full max-w-160 items-center justify-center md:max-w-[1050px]">
        <div className="md:px-4">
          <Title title="HISTORY" sub="歴史" />
          {/* Title */}
          <h1 className="my-16 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:my-[90px] md:border-l-[8px] md:text-[32px]">
            LEOBLACKSの歴史
          </h1>
          <div className="flex justify-center gap-6 max-lg:flex-wrap md:gap-[50px]">
            {history.images.map((image: { url: string }) => (
              <div className="" key={image.url}>
                <img src={image.url} alt="" />
              </div>
            ))}
          </div>

          <div className="mx-auto my-16 w-full max-w-[840px] space-y-5 md:my-[90px]">
            {history.content.map((item: History, i: number) => (
              <div className="" key={i}>
                <p className="border-b border-[#C0C0C0] text-[20px] font-medium">
                  {item.title}
                </p>
                <div className="space-y-5 py-4">
                  {item.content.map((detail, j) => (
                    <div className="flex gap-4" key={j}>
                      <div className="w-[92px] bg-[#DFF6F7] px-3 py-5 text-[16px] whitespace-nowrap md:p-5">
                        {detail.year}年
                      </div>
                      <div className="space-y-1">
                        {detail.item.map((note, k) => (
                          <div className="flex gap-2" key={k}>
                            <p className="flex-[0_0_50px] text-[16px] whitespace-nowrap">
                              {note.month}月
                            </p>
                            <p className="text-[16px]">{note.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
