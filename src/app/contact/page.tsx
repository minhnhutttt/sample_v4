import type { Metadata } from 'next';

import Title from '@/components/common/Title';
import { OG, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Contact',
  openGraph: {
    ...OG,
    title: 'Contact',
    url: '/contact',
  },
  twitter: {
    ...TWITTER,
    title: 'Contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

const ContactPage = () => {
  return (
    <div className="px-5 pt-32 pb-32 md:pt-[240px] md:pb-40">
      <div id="section05" className="mx-auto w-full max-w-[1320px]">
        <Title title="CONTACT" sub="お問い合わせ" />
        <div className="mt-16 rounded-xl bg-[#EBEBEB] px-5 py-20 md:mt-25 md:py-25">
          <div className="mx-auto w-full max-w-[992px]">
            <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
              お問い合わせ
            </h2>
            <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
              LEO BLACKS
              SAGAについて、お問い合わせは下記フォームからお願いします。
            </p>
            <div className="mx-auto w-full max-w-[880px] space-y-8 pt-20 md:space-y-[50px] md:pt-[120px]">
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  貴社名
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="株式会社ABC"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  本社所在地の住所<span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="山田　太郎"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  ご担当者様名<span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="山田　太郎"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  メールアドレス<span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="123abc@123abc.com"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  電話番号<span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="080-1234-5678"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  ご担当者様名<span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="山田　太郎"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  その他：お問い合わせ内容
                  <span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <textarea className="h-[230px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2 md:h-[372px]"></textarea>
                </div>
              </div>
            </div>
            <div className="mt-16 flex justify-center md:mt-24">
              <button className="flex h-14 items-center justify-center gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white md:h-[70px] md:px-[30px] md:text-[20px]">
                送信
                <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
                  <img
                    src="/assets/images/btn-arrow.svg"
                    className="max-md:w-4"
                    alt=""
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
