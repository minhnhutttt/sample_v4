import type { Metadata } from 'next';
import Image from 'next/image';

import PageHead from '@/components/pageHead';
import { OG, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Company',
  openGraph: {
    ...OG,
    title: 'company',
    url: '/company',
  },
  twitter: {
    ...TWITTER,
    title: 'company',
  },
  alternates: {
    canonical: '/company',
  },
};

const CompanyPage = () => {
  return (
    <div>
      <PageHead
        title="会社概要"
        en="COMPANY"
        image="/assets/images/company-img.png"
      />
      <div className="my-[120px] px-5 md:my-[260px]">
        <div className="mx-auto w-full max-w-[440px] md:max-w-[880px]">
          <h2 className="u-text-gradient text-[24px] leading-[1.6] font-medium md:text-[40px]">
            ごあいさつ
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] font-medium md:text-[20px]">
            地域と共に歩む。現場で培った確かな技術力。
          </p>
          <div className="mt-20 flex gap-[60px] leading-[1.75] max-md:flex-col max-md:items-center md:mt-[140px]">
            <figure>
              <Image
                src="/assets/images/company-avatar.png"
                alt="地域と共に歩む。現場で培った確かな技術力。"
                width={360}
                height={466}
                className="max-md:w-[240px]"
              />
            </figure>
            <div className="flex-1 space-y-7 max-md:max-w-[400px] md:space-y-[60px]">
              <p className="text-[14px] md:text-[16px]">
                当社は愛媛県新居浜市を拠点に、鉄工・据付工事、管工事を手がける総合建設会社です。「安全第一」を企業の基盤とし、お客様に「安全・安心」を提供することを第一に考えています。
                <br />
                <br />
                工場設備のメンテナンスから公共施設の改修工事まで、現場で培った確かな技術力と、地域密着ならではのスピード対応で、お客様の課題解決に全力で取り組んでまいります。
                <br />
                <br />
                設備トラブルや工事のご相談は、どうぞお気軽にお声がけください。お客様と共に歩むパートナーとして、誠心誠意対応させていただきます。
              </p>
              <p className="text-right text-[16px] font-medium md:text-[20px]">
                株式会社大矢工業
                <br />
                代表取締役　大石 智造
              </p>
            </div>
          </div>
          <div className="py-[120px] md:py-[260px]">
            <div className="flex">
              <p className="relative border-b border-white/70 text-[20px] font-medium after:relative after:-bottom-2 after:block after:h-px after:w-1/2 after:bg-white/40 md:text-[28px]">
                <span>会社概要</span>
              </p>
            </div>
            <div className="relative">
              <div className="mt-10 space-y-7 text-[14px] leading-[1.75] md:mt-16 md:space-y-10 md:text-[16px]">
                {[
                  { label: '会社名', text: '株式会社大矢工業' },
                  { label: '代表者', text: '大石 智造' },
                  {
                    label: '所在地',
                    text: '〒792-0802 愛媛県新居浜市新須賀町2-8-35',
                  },
                  { label: 'TEL', text: '0897-47-8601' },
                  { label: '資本金', text: '20,000千円' },
                  { label: '建設業許可', text: '愛媛県知事許可 第０018851号' },
                  { label: '業務内容', text: 'とび・土工工事、管工事' },
                ].map((item) => (
                  <div className="flex gap-6 md:gap-8" key={item.label}>
                    <p className="w-18 md:w-20">{item.label}</p>
                    <p className="flex-1">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="max-md:mt-10 md:absolute md:top-0 md:right-0">
                <Image
                  src="/assets/images/company-bg.png"
                  alt="会社概要"
                  width={340}
                  height={340}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-[16px] leading-[1.75] font-medium md:text-[20px]">
              アクセス
            </p>
            <div className="mt-5">
              <Image
                src="/assets/images/map.png"
                alt="アクセス"
                width={880}
                height={495}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
