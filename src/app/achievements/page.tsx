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
        <div className="mx-auto w-full max-w-[440px] md:max-w-[880px]">
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
                  <tbody>
                    <tr>
                      <th>期間</th>
                      <th>工事内容</th>
                    </tr>
                    <tr>
                      <td>2022年2月～2026年3月</td>
                      <td>日常保全・小修理工事</td>
                    </tr>
                    <tr>
                      <td>2022年</td>
                      <td>プラント定期修理工事</td>
                    </tr>
                    <tr>
                      <td>2022年6月～8月</td>
                      <td>熱交換器開放点検、油圧ポンプ取替工事</td>
                    </tr>
                    <tr>
                      <td>2022年7月～8月</td>
                      <td>加熱炉対流部側壁更新工事</td>
                    </tr>
                    <tr>
                      <td>2022年8月</td>
                      <td>ポンプ類分解整備・オーバーホール</td>
                    </tr>
                    <tr>
                      <td>2022年8月</td>
                      <td>配管ライン洗浄工事</td>
                    </tr>
                    <tr>
                      <td>2023年</td>
                      <td>プラント定期修理工事</td>
                    </tr>
                    <tr>
                      <td>2023年6月～8月</td>
                      <td>ボイラー官公庁検査対応工事</td>
                    </tr>
                    <tr>
                      <td>2023年7月～8月</td>
                      <td>加熱炉デコーキング工事</td>
                    </tr>
                    <tr>
                      <td>2023年8月</td>
                      <td>加熱炉側壁更新工事</td>
                    </tr>
                    <tr>
                      <td>2024年</td>
                      <td>プラント定期修理工事</td>
                    </tr>
                    <tr>
                      <td>2024年6月～9月</td>
                      <td>ボイラー自主開放点検工事</td>
                    </tr>
                    <tr>
                      <td>2024年7月～8月</td>
                      <td>加熱炉デコーキング復旧工事</td>
                    </tr>
                    <tr>
                      <td>2024年8月～9月</td>
                      <td>配管取替・更新工事</td>
                    </tr>
                    <tr>
                      <td>2024年9月</td>
                      <td>配管ライン洗浄・更新工事</td>
                    </tr>
                    <tr>
                      <td>2024年9月～11月</td>
                      <td>デコーキング安全対策工事</td>
                    </tr>
                    <tr>
                      <td>2024年10月～11月</td>
                      <td>設備増設工事</td>
                    </tr>
                    <tr>
                      <td>2025年</td>
                      <td>プラント定期修理工事</td>
                    </tr>
                    <tr>
                      <td>2025年2月～3月</td>
                      <td>ボイラー法定開放点検工事</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pt-10 md:pt-[60px]">
              <div className="flex">
                <p className="relative border-b border-white/70 text-[20px] font-medium after:relative after:-bottom-2 after:block after:h-px after:w-1/2 after:bg-white/40 md:text-[28px]">
                  <span>製造業様</span>
                </p>
              </div>
              <div className="pt-3 pb-6 text-left md:pt-6 md:pb-10 [&_td]:text-[14px] [&_td]:md:text-[16px] [&_th]:text-[16px] [&_th]:font-medium [&_th]:md:text-[20px] [&_th,&_td]:py-4 [&_th:last-child,&_td:last-child]:px-8">
                <table>
                  <tbody>
                    <tr>
                      <th>期間</th>
                      <th>工事内容</th>
                    </tr>
                    <tr>
                      <td>2023年9月～2025年9月</td>
                      <td>大型焼成炉現地設置工事</td>
                    </tr>
                    <tr>
                      <td>2024年9月～2025年8月</td>
                      <td>黒鉛化炉・耐酸炉復元工事</td>
                    </tr>
                  </tbody>
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
