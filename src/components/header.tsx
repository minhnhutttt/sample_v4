import Image from 'next/image';

import HeaderNav, { type NavItem } from './header-nav';
import LowestPriceBadge from './ui/lowest-price-badge';
import ReservationCta from './ui/reservation-cta';

const NAV_ITEMS: NavItem[] = [
  { id: 'concerns', label: 'こんなお悩みありませんか？' },
  { id: 'why', label: 'ALONAが選ばれる理由' },
  { id: 'pricing', label: '料金プラン' },
  { id: 'payment', label: 'お支払い方法' },
  { id: 'menu', label: 'メニュー紹介' },
  { id: 'flow', label: '初回体験トレーニングの流れ' },
  { id: 'faq', label: 'よくある質問' },
  { id: 'access', label: 'アクセス' },
];

export type DailyPriceCard = {
  name: string;
  /** SP layout stacks the plan name over two lines (Figma node 1:917). */
  nameLines: [string, string];
  amount: string;
};

/** Rendered as the PC rail below, and as the SP rail in <HeroHighlights />. */
export const DAILY_PRICE_CARDS: DailyPriceCard[] = [
  {
    name: 'パーソナル ピラティス',
    nameLines: ['パーソナル', 'ピラティス'],
    amount: '2,189',
  },
  {
    name: 'セミパーソナルトレーニング',
    nameLines: ['セミパーソナル', 'トレーニング'],
    amount: '935',
  },
  {
    name: 'パーソナルトレーニング',
    nameLines: ['パーソナル', 'トレーニング'],
    amount: '1,650',
  },
];

const Logo = () => (
  <span className="relative block h-[32px] w-[136px] overflow-hidden">
    <Image
      src="/assets/images/logo-alona-mark.svg"
      alt="ALONA"
      width={136}
      height={18}
      className="absolute top-0 left-0 h-[17.534px] w-[136px]"
    />
    <Image
      src="/assets/images/logo-alona-sub.svg"
      alt=""
      width={114}
      height={6}
      className="absolute top-[83.85%] right-[8.45%] bottom-0 left-[8.08%] w-auto"
    />
  </span>
);

const Header = () => (
  <>
    <div className="lp-sky pointer-events-none fixed inset-0 -z-10">
      <Image
        src="/assets/images/texture-bokeh.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>

    <header className="pointer-events-none fixed inset-0 z-30 hidden lg:block">
      <a
        href="#top"
        className="pointer-events-auto absolute top-[20px] left-[20px]"
      >
        <Logo />
      </a>

      <HeaderNav items={NAV_ITEMS} />

      <div className="pointer-events-auto absolute top-[20px] right-[21px] w-[199px]">
        <LowestPriceBadge className="absolute top-[0px] left-[-22px]" />

        <ul className="flex flex-col gap-[10px] pt-[10px]">
          {DAILY_PRICE_CARDS.map((card) => (
            <li
              key={card.name}
              className="lp-rail-card relative h-[109px] w-[199px]"
            >
              <p className="text-ink absolute top-[15px] left-[3.03px] w-[192.361px] text-center text-[14px] leading-[1.4] font-bold tracking-[-1.26px]">
                {card.name}
              </p>
              <p className="absolute top-[31px] left-[12px] w-[175px] text-center font-bold tracking-[0.8px] whitespace-nowrap">
                <span className="text-[30px] leading-[1.45] text-black">
                  {card.amount}
                </span>
                <span className="text-ink-soft text-[14px] leading-[1.8] tracking-[1.68px]">
                  円/1日あたり
                </span>
              </p>
              <span className="absolute top-[66px] left-[13px] block h-[4px] w-[176px] rounded-full bg-[#72cf2f]" />
              <p className="absolute top-[75px] left-[70.84px] w-[117.136px] text-center text-[13px] leading-[1.8] tracking-[1.04px] text-[#606060]">
                ※20回通った場合
              </p>
            </li>
          ))}
        </ul>
      </div>

      <p className="pointer-events-auto absolute right-[37px] bottom-[141px] w-[301px] text-[16px] leading-[1.42] font-semibold tracking-[0.96px] text-[#013c48]">
        1回50分のマンツーマン。ピラティス、マシーンを使ったパーソナルトレーニングが定額で通い放題。
      </p>

      <ReservationCta className="pointer-events-auto absolute right-[18px] bottom-[29px]" />
    </header>
  </>
);

export default Header;
