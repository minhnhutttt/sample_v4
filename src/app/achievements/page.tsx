import type { Metadata } from 'next';

import PageHead from '@/components/pageHead';
import { OG, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Achievements',
  openGraph: {
    ...OG,
    title: 'achievements',
    url: '/achievements',
  },
  twitter: {
    ...TWITTER,
    title: 'achievements',
  },
  alternates: {
    canonical: '/achievements',
  },
};

const AchievementsPage = () => {
  return (
    <div>
      <PageHead
        title="実績"
        en="ACHIEVEMENT"
        image="/assets/images/achievements-img.png"
      />
      <div className="my-[120px] px-5 md:my-[260px]">
        <div className="mx-auto w-full max-w-[880px]">
          <h2 className="u-text-gradient text-[24px] leading-[1.6] font-medium md:text-[40px]">
            事業実績
          </h2>
          <div className="mt-7 leading-[1.75] md:mt-10">
            <div className="pt-10 md:pt-[60px]">
              <div className="flex">
                <p className="relative border-b border-white/70 text-[20px] font-medium after:relative after:-bottom-2 after:block after:h-px after:w-1/2 after:bg-white/40 md:text-[28px]">
                  <span>化学会社様</span>
                </p>
              </div>
              <div className="border-b border-white pt-3 pb-6 text-left md:pt-6 md:pb-10 [&_td]:text-[14px] [&_td]:md:text-[16px] [&_th]:text-[16px] [&_th]:font-medium [&_th]:md:text-[20px] [&_th,&_td]:py-4 [&_th:last-child,&_td:last-child]:px-8">
                <table>
                  <tr>
                    <th>期間</th>
                    <th>工事内容</th>
                  </tr>
                  <tr>
                    <td>2021年4月～2023年3月</td>
                    <td>冷凍冷蔵設備定期メンテナンス</td>
                  </tr>
                  <tr>
                    <td>2022年8月</td>
                    <td>工場空調設備更新工事</td>
                  </tr>
                  <tr>
                    <td>2023年1月～3月</td>
                    <td>プラント配管改修工事</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="pt-10 md:pt-[60px]">
              <div className="flex">
                <p className="relative border-b border-white/70 text-[20px] font-medium after:relative after:-bottom-2 after:block after:h-px after:w-1/2 after:bg-white/40 md:text-[28px]">
                  <span>製造業様</span>
                </p>
              </div>
              <div className="border-b border-white pt-3 pb-6 text-left md:pt-6 md:pb-10 [&_td]:text-[14px] [&_td]:md:text-[16px] [&_th]:text-[16px] [&_th]:font-medium [&_th]:md:text-[20px] [&_th,&_td]:py-4 [&_th:last-child,&_td:last-child]:px-8">
                <table>
                  <tr>
                    <th>期間</th>
                    <th>工事内容</th>
                  </tr>
                  <tr>
                    <td>2021年～2023年</td>
                    <td>日常保全工事</td>
                  </tr>
                  <tr>
                    <td>2022年10月</td>
                    <td>ボイラー周辺配管工事</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="pt-10 md:pt-[60px]">
              <div className="flex">
                <p className="relative border-b border-white/70 text-[20px] font-medium after:relative after:-bottom-2 after:block after:h-px after:w-1/2 after:bg-white/40 md:text-[28px]">
                  <span>公共施設様</span>
                </p>
              </div>
              <div className="border-b border-white pt-3 pb-6 text-left md:pt-6 md:pb-10 [&_td]:text-[14px] [&_td]:md:text-[16px] [&_th]:text-[16px] [&_th]:font-medium [&_th]:md:text-[20px] [&_th,&_td]:py-4 [&_th:last-child,&_td:last-child]:px-8">
                <table>
                  <tr>
                    <th>期間</th>
                    <th>工事内容</th>
                  </tr>
                  <tr>
                    <td>2022年6月～2023年1月</td>
                    <td>新居浜市下水処理場設備工事</td>
                  </tr>
                  <tr>
                    <td>2022年9月</td>
                    <td>市庁舎空調設備改修</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="pt-10 md:pt-[60px]">
              <div className="flex">
                <p className="relative border-b border-white/70 text-[20px] font-medium after:relative after:-bottom-2 after:block after:h-px after:w-1/2 after:bg-white/40 md:text-[28px]">
                  <span>その他お客様</span>
                </p>
              </div>
              <div className="pt-3 pb-6 text-left md:pt-6 md:pb-10 [&_td]:text-[14px] [&_td]:md:text-[16px] [&_th]:text-[16px] [&_th]:font-medium [&_th]:md:text-[20px] [&_th,&_td]:py-4 [&_th:last-child,&_td:last-child]:px-8">
                <table>
                  <tr>
                    <th>期間</th>
                    <th>工事内容</th>
                  </tr>
                  <tr>
                    <td>2023年2月</td>
                    <td>商業施設給排水設備工事</td>
                  </tr>
                  <tr>
                    <td>2023年4月</td>
                    <td>工場基礎工事</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
