import Image from 'next/image';

import SectionHeading from '@/components/section-heading';

const STEPS = [
  {
    no: '01',
    icon: '/assets/icons/ic-download.svg',
    title: 'アプリをダウンロード',
    body: 'お手持ちのスマートフォン（iOS/Android）にKIVO TALKアプリをインストール。',
  },
  {
    no: '02',
    icon: '/assets/icons/ic-qr-code.svg',
    title: '専用リンク・QRでアクセス',
    body: 'このページにある「文庫社専用の招待リンク」をタップ、または「専用QRコード」をスキャンします。',
  },
  {
    no: '03',
    icon: '/assets/icons/ic-alternate-email.svg',
    title: 'KIVO IDの作成',
    body: '登録画面で「生年月日のみ」を入力してアカウント作成。（本人確認書類や身分証、事前の審査は一切不要です）',
  },
  {
    no: '04',
    icon: '/assets/icons/ic-mobile-check.svg',
    title: '準備完了！',
    body: 'その場で即座にあなた専用の「KIVO ID」が作成され、お気に入り作家のコンテンツを閲覧・応援できるようになります。',
  },
];

const Registration = () => {
  return (
    <div className="relative overflow-hidden px-5 py-10 md:px-15 md:py-15">
      <div className="relative mx-auto w-full max-w-[1160px]">
        <SectionHeading className="text-center">
          <p>登録ステップ</p>
        </SectionHeading>
        <div className="mt-14 flex w-full flex-col md:mt-25 md:flex-row md:items-stretch">
          {STEPS.map((step, index) => (
            <div
              key={step.no}
              className="relative flex flex-col gap-8 border-b border-[#9C9C9C] last:border-b-0 max-md:pb-10 max-md:not-first:pt-10 max-md:last:pb-0 md:min-w-0 md:flex-1 md:border-r md:border-b-0 md:p-10 md:last:border-r-0"
            >
              <div className="flex w-full justify-center">
                <div className="flex items-center rounded-full bg-[#F78629] p-5">
                  <Image
                    src={step.icon}
                    alt=""
                    width={60}
                    height={60}
                    className="size-15"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-5">
                <div className="flex w-full items-center justify-center gap-4">
                  <p className="font-anton text-[36px] leading-none tracking-[0.02em] text-[#F98528] md:text-[40px]">
                    {step.no}
                  </p>
                  <p className="flex min-h-18 items-center border-l border-[#F78629] pl-4 text-[18px] leading-[1.8] font-black tracking-[-0.01em] text-[#F78629] md:text-[20px]">
                    {step.title}
                  </p>
                </div>
                <p className="font-inter text-[16px] leading-[2] font-medium tracking-[0.04em] text-[#242424] md:text-[18px]">
                  {step.body}
                </p>
              </div>
              {index < STEPS.length - 1 && (
                <span className="absolute flex size-9 items-center justify-center max-md:bottom-0 max-md:left-1/2 max-md:-translate-x-1/2 max-md:translate-y-1/2 md:top-1/2 md:-right-[17px] md:-translate-y-1/2">
                  <Image
                    src="/assets/icons/ic-step-arrow.svg"
                    alt=""
                    width={27}
                    height={24}
                    className="h-6 w-[26.79px] max-md:rotate-180 md:rotate-90"
                  />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registration;
