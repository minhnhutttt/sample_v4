import Image from 'next/image';

import LowestPriceBadge from '@/components/ui/lowest-price-badge';

type PriceRailCard = {
  name: string;
  amount: string;
};

/** Figma 205:6547 — SP daily-rate rail (the PC chrome carries its own copy). */
const PRICE_RAIL: PriceRailCard[] = [
  { name: 'パーソナル ピラティス', amount: '2,190' },
  { name: 'セミパーソナルトレーニング', amount: '930' },
  { name: 'パーソナルトレーニング', amount: '1,650' },
];

/**
 * SP counterpart of the PC chrome (Figma node 205:6528 "Frame 59"):
 * the catch copy that closes the hero, the opening logo + OPEN date,
 * the 地域で価格最安！ badge and the yellow daily-rate rail.
 * <Concerns /> follows as its own section.
 */
const HeroHighlights = () => (
  <div className="relative flex flex-col items-center pb-[25px]">
    <p className="mb-[15px] text-[18px] leading-[1.75] font-semibold tracking-[0.72px] whitespace-nowrap text-[#3d3d3d]">
      パーソナルマシンピラティス
      <br />
      セミパーソナルトレーニング
      <br />
      パーソナルトレーニング
    </p>

    <div className="flex w-[349px] flex-col items-center">
      <Image
        src="/assets/images/logo-alona.png"
        alt="ALONA"
        width={187}
        height={58}
        className="h-[58px] w-[187px] object-contain"
      />
      <p className="mt-[17px] w-full text-center leading-[1.67] font-extrabold tracking-[0.46px] text-black">
        <span className="text-[23px]">2026</span>
        <span className="text-[18px]">年</span>
        <span className="text-[23px]">10</span>
        <span className="text-[18px]">月</span>
        <span className="text-[23px]">10</span>
        <span className="text-[18px]">日（土）</span>
        <br />
        <span className="text-[23px]">池尻大橋・中目黒</span>
        <span className="text-[18px]">に</span>
        <span className="text-[23px]">OPEN！</span>
      </p>
    </div>

    {/* The PC chrome already carries the price rail, so SP owns it alone. */}
    <div className="mt-[25px] flex flex-col items-center gap-[16px] lg:hidden">
      <LowestPriceBadge variant="sp" />

      <ul className="flex flex-col gap-[9px]">
        {PRICE_RAIL.map((card) => (
          <li
            key={card.name}
            className="relative flex h-[146px] w-[326px] flex-col items-center rounded-[13px] bg-[#ffe853] pt-[13px]"
          >
            <p className="text-ink text-[19px] leading-[1.4] font-bold tracking-[-0.09em] whitespace-nowrap">
              {card.name}
            </p>

            <p className="mt-[3px] font-bold text-[#333]">
              <span className="text-[40px] leading-[1.45]">{card.amount}</span>
              <span className="text-[19px] leading-[1.8] tracking-[0.12em]">
                円/1日あたり
              </span>
            </p>

            <span className="mt-[3px] block h-px w-[288px] bg-[#666]" />

            <p className="mt-[3px] w-[288px] text-right text-[17px] leading-[1.8] font-normal tracking-[0.08em] text-[#333]">
              ※20回通った場合
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default HeroHighlights;
