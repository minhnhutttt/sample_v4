import Image from 'next/image';

import FadeIn from '@/components/common/fade-in';
import SectionTitle from '@/components/common/section-title';

const headerColumns = [
  'マーケティング手法',
  '予算',
  '手間',
  '得られるもの',
] as const;

const Comparison = () => {
  return (
    <section className="overflow-hidden px-5 pt-34">
      <div className="mx-auto max-w-[1120px]">
        <FadeIn>
          <SectionTitle>
            <p className="text-[24px] font-black text-[#434f8e] md:text-[48px]">
              予算や手間の検討は
              <span className="text-[32px] font-black text-[#F03D22] md:text-[68px]">
                不要
              </span>
              です
            </p>
          </SectionTitle>

          <p className="pt-12 text-center text-[18px] font-medium text-[#1C213B] md:pt-16 md:text-[24px]">
            展示会での「PR」と、
            <br className="md:hidden" />
            リサーチ会社の「データ収集」。 <br />
            両方のいいとこ取り。
            <br className="md:hidden" />
            なのに
            <span className="relative">
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[8px] rounded-full bg-[#ffc2c1] md:h-[10px]"
              />
              <span className="relative text-[24px] font-bold md:text-[32px]">
                月額1.1万円
                <span className="text-[18px] font-bold md:text-[24px]">
                  （税込）
                </span>
                ～
              </span>
            </span>
            。
          </p>
        </FadeIn>
        <FadeIn className="mt-28 overflow-x-auto max-md:-mr-5 max-md:pr-5">
          <div className="min-w-[688px]">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                {headerColumns.map((label) => (
                  <div
                    key={label}
                    className="flex flex-1 items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#434f8e] px-2 py-3"
                  >
                    <p className="text-[16px] leading-[1.8] font-bold text-white md:text-[20px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid min-h-[188px] grid-cols-4 gap-2 overflow-hidden rounded-2xl border-4 border-[#434f8e] shadow-[0px_4px_14px_0px_rgba(8,39,86,0.25)]">
                <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-[url(/assets/images/comparison/bg.png)] p-2">
                  <Image
                    src="/assets/images/comparison/logo-mark-white.svg"
                    alt="試食BAR アサクサ"
                    width={126}
                    height={40}
                    className="h-[30px] w-auto md:h-10"
                  />
                  <Image
                    src="/assets/images/comparison/logo-foodbuyers-white.svg"
                    alt="food buyers HUB"
                    width={170}
                    height={40}
                    className="h-[30px] w-auto md:h-10"
                  />
                </div>
                <div className="flex flex-1 items-center justify-center bg-white p-2">
                  <p className="font-bold text-[#434f8e]">
                    <span className="text-[16px] md:text-[24px]">
                      月額1.1万円
                    </span>
                    <br className="md:hidden" />
                    <span className="text-[14px] md:text-[18px]">
                      （税込）～
                    </span>
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center bg-white p-2">
                  <p className="text-[16px] font-bold text-[#434f8e] md:text-[24px]">
                    商品を送るだけ。
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center bg-white p-2">
                  <div className="text-[14px] leading-[1.92] font-bold text-[#434f8e] md:text-[17px]">
                    <p>来店者へのPR</p>
                    <p>試食アンケートデータ</p>
                    <p>販売売上</p>
                    <p>バイヤーへのPR</p>
                  </div>
                </div>
              </div>

              <div className="grid h-[152px] grid-cols-4 gap-2 overflow-hidden rounded-2xl md:h-38">
                <div className="flex flex-1 items-center justify-center bg-[#555] p-2">
                  <p className="text-[18px] leading-[2] font-bold text-white md:text-[20px]">
                    一般的な展示会
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center bg-[#cacaca] p-2">
                  <p className="text-[15px] leading-[2] font-medium md:text-[16px]">
                    数十万円〜
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center bg-[#cacaca] p-2">
                  <p className="text-[15px] leading-[2] font-medium md:text-[16px]">
                    申し込みやブース設営準備に大きな手間が。ブースに付きっ切り。
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center bg-[#cacaca] px-10 py-8">
                  <div className="text-[15px] leading-[2] font-medium md:text-[16px]">
                    <p>多数の名刺</p>
                    <p>バイヤーへのPR</p>
                  </div>
                </div>
              </div>

              <div className="grid h-[152px] grid-cols-4 gap-2 overflow-hidden rounded-2xl md:h-38">
                <div className="flex flex-1 items-center justify-center bg-[#555] p-2">
                  <p className="text-[18px] leading-[2] font-bold text-white md:text-[20px]">
                    大手調査会社
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center bg-[#cacaca] p-2">
                  <p className="text-[15px] leading-[2] font-medium md:text-[16px]">
                    1回数十万〜数百万円
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center bg-[#cacaca] p-2">
                  <p className="text-[15px] leading-[2] font-medium md:text-[16px]">
                    打ち合わせを経て会場や人員準備。データ取得まで大きな手間が発生。
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center bg-[#cacaca] p-2">
                  <p className="text-[15px] leading-[2] font-medium md:text-[16px]">
                    詳細なデータ報告書
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Comparison;
