import { DAILY_PRICE_CARDS } from '@/components/header';
import LowestPriceBadge from '@/components/ui/lowest-price-badge';

const HeroHighlights = () => (
  <div className="relative -mt-[40px] pb-[66px] lg:hidden">
    <LowestPriceBadge className="ml-[89px]" />

    <ul className="mt-[18px] flex gap-[6px] px-[16px]">
      {DAILY_PRICE_CARDS.map((card) => (
        <li
          key={card.name}
          className="lp-rail-card-sp flex min-h-[93px] w-[110px] shrink-0 flex-col px-[6px] pt-[6px] pb-[6px]"
        >
          <p className="text-ink text-[9px] leading-[1.2] font-bold tracking-[-0.81px]">
            {card.nameLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <p className="font-bold">
            <span className="text-[21px] leading-[1.45] tracking-[-0.208px] text-black">
              {card.amount}
            </span>
            <span className="text-ink-soft text-[8px] leading-[1.8] tracking-[0.555px]">
              {' '}
              円
            </span>
          </p>

          {/* Pulled up to sit under the amount's line box, as in Figma. */}
          <span className="mt-[-6px] block h-[3px] w-full shrink-0 rounded-full bg-[#72cf2f]" />

          <p className="text-ink-soft text-right text-[8px] leading-[1.8] font-bold">
            （1日あたり）
          </p>

          <p className="text-center text-[9px] leading-[1.8] tracking-[0.721px] text-[#606060]">
            ※20回通った場合
          </p>
        </li>
      ))}
    </ul>

    <p className="mt-[31px] px-4 text-[18px] leading-[1.52] font-semibold tracking-[1.08px] text-[#013c48]">
      1回50分のマンツーマン。ピラティス、マシーンを使ったパーソナルトレーニングが定額で通い放題。
    </p>
  </div>
);

export default HeroHighlights;
