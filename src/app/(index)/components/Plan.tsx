import Image from 'next/image';

import SectionTitle from '@/components/common/section-title';

type PlanStatus = {
  included: boolean;
  note?: string;
};

type PlanFeature = {
  icon: string;
  label: string;
  economy: PlanStatus;
  standard: PlanStatus;
};

const planFeatures: PlanFeature[] = [
  {
    icon: '/assets/images/plan/dining.svg',
    label: '試食の提供',
    economy: { included: true, note: '（倉庫から提供）' },
    standard: { included: true, note: '（店頭にて掲示）' },
  },
  {
    icon: '/assets/images/plan/article-person.svg',
    label: 'アンケートデータの収集・提供',
    economy: { included: true },
    standard: { included: true },
  },
  {
    icon: '/assets/images/plan/post-add.svg',
    label: 'BtoBマッチングサービス(WEB掲載)',
    economy: { included: true },
    standard: { included: true },
  },
  {
    icon: '/assets/images/plan/post-add.svg',
    label: 'ECサイトへの誘導',
    economy: { included: true },
    standard: { included: true },
  },
  {
    icon: '/assets/images/plan/storefront.svg',
    label: '店頭での直接販売(手数料0円)',
    economy: { included: false },
    standard: { included: true },
  },
  {
    icon: '/assets/images/plan/smart-toy.svg',
    label: 'AI「アスカ」による自動接客',
    economy: { included: true },
    standard: { included: true },
  },
  {
    icon: '/assets/images/plan/shelves.svg',
    label: '店頭ディスプレイ棚への常時展示',
    economy: { included: false },
    standard: { included: true },
  },
  {
    icon: '/assets/images/plan/breaking-news.svg',
    label: '専用チラシの店舗設置',
    economy: { included: false },
    standard: { included: true },
  },
  {
    icon: '/assets/images/plan/emoji-people.svg',
    label: 'スタッフの積極的な店頭声かけ',
    economy: { included: false },
    standard: { included: true },
  },
];

const PlanStatusCell = ({ status }: { status: PlanStatus }) => (
  <div className="flex h-13 flex-1 items-center justify-center md:gap-2">
    {status.note && <span className="flex-1"></span>}
    <Image
      src={
        status.included
          ? '/assets/images/plan/check.svg'
          : '/assets/images/plan/cross.svg'
      }
      alt={status.included ? '対応' : '非対応'}
      width={20}
      height={20}
    />
    {status.note && (
      <p className="flex-1 text-[12px] font-medium text-[#575757] md:text-[14px]">
        {status.note}
      </p>
    )}
  </div>
);

const Plan = () => {
  return (
    <section className="mb-20 px-5 pt-32 md:mb-30 md:pt-47">
      <div className="mx-auto max-w-[1120px]">
        <SectionTitle>
          <p className="text-[24px] font-black text-[#434f8e] md:text-[48px]">
            シンプルな
            <span className="text-[32px] font-black text-[#F03D22] md:text-[68px]">
              出展プラン
            </span>
          </p>
        </SectionTitle>

        <div className="mt-8 text-center text-[24px] font-medium text-[#1c213b] md:mt-18">
          <p>
            店頭PRを兼ねて大々的にユーザーにアピールする
            <span className="relative">
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[8px] rounded-full bg-[#ffc2cb] md:h-[10px]"
              />
              <span className="relative font-bold text-[#F03D22]">
                「スタンダード」
              </span>
            </span>
            と、
          </p>
          <p>
            アピール以外は同等の機能を持つ
            <span className="relative">
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[8px] rounded-full bg-[#b8e1ff] md:h-[10px]"
              />
              <span className="relative font-bold text-[#434F8E]">
                「エコノミー」
              </span>
            </span>
            の２種類。
          </p>
          <p>※その他、柔軟な対応も可能です。ぜひご相談ください。</p>
        </div>

        <div className="mt-28 overflow-x-auto max-lg:-mr-5">
          <div className="mx-auto w-[658px] max-lg:mr-5 md:w-[1016px]">
            <div className="flex gap-5 md:gap-8">
              <div className="w-[180px] shrink-0 md:w-88" />
              <div className="flex h-[136px] flex-1 flex-col items-center justify-center gap-0 rounded-t-2xl bg-[#434f8e] px-5 max-md:w-[220px] md:h-42">
                <div className="w-[200px] rounded-full border-2 border-[#434f8e] bg-white p-1">
                  <div className="rounded-full border-2 border-[#434f8e] bg-[url(/assets/images/plan/seiha.png)] max-md:py-1.5">
                    <p className="text-center text-[16px] font-bold text-[#434f8e] md:text-[20px]">
                      エコノミー
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="mb-1 text-white md:px-4">
                    <span className="text-[16px] font-bold md:text-[20px]">
                      月額
                    </span>
                    <span className="text-[22px] font-black md:text-[32px]">
                      １.1
                    </span>
                    <span className="text-[16px] font-bold md:text-[20px]">
                      万円
                    </span>
                    <span className="text-[16px] font-bold md:text-[14px]">
                      （税込）
                    </span>
                  </p>
                  <div className="mb-1.5 h-px w-full bg-white/50" />
                  <div className="h-0.5 w-full bg-white" />
                </div>
              </div>
              <div className="flex h-[136px] flex-1 flex-col items-center justify-center gap-0 rounded-t-2xl bg-[#f03d22] px-5 max-md:w-[220px] md:h-42">
                <div className="w-[200px] rounded-full border-2 border-[#f03d22] bg-white p-1">
                  <div className="rounded-full border-2 border-[#f03d22] bg-[url(/assets/images/plan/seiha-red.png)] max-md:py-1.5">
                    <p className="text-center text-[20px] font-bold text-[#f03d22]">
                      スタンダード
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="mb-1 text-white md:px-4">
                    <span className="text-[16px] font-bold md:text-[20px]">
                      月額
                    </span>
                    <span className="text-[22px] font-black md:text-[32px]">
                      ６
                    </span>
                    <span className="text-[16px] font-bold md:text-[20px]">
                      万円
                    </span>
                  </p>
                  <div className="mb-1.5 h-px w-full bg-white/50" />
                  <div className="h-0.5 w-full bg-white" />
                </div>
              </div>
            </div>

            <div className="mt-1.5 flex flex-col gap-1.5">
              {planFeatures.map((feature) => (
                <div key={feature.label} className="flex h-13 gap-5 md:gap-8">
                  <div className="flex w-[180px] shrink-0 items-center gap-2 rounded-l-2xl bg-white px-4 md:w-88 md:px-8">
                    <Image
                      src={feature.icon}
                      alt=""
                      aria-hidden
                      width={24}
                      height={24}
                      className="max-md:w-5"
                    />
                    <p className="flex-1 text-[13px] font-medium text-[#1c213b] md:text-[15px]">
                      {feature.label}
                    </p>
                  </div>
                  <div className="flex flex-1 bg-[#b8e1ff]">
                    <PlanStatusCell status={feature.economy} />
                  </div>
                  <div className="flex flex-1 bg-[#ffc2cb]">
                    <PlanStatusCell status={feature.standard} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
