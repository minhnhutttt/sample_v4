import { ReactNode } from 'react';

import Image from 'next/image';

import FadeIn from '@/components/ui/fade-in';
import ImagePlaceholder from '@/components/ui/image-placeholder';
import SectionTitle from '@/components/ui/section-title';

type MenuItem = {
  tag: string;
  tagClassName: string;
  title: string;
  subtitle: string;
  lead: ReactNode | null;
  body: string;
  image: string | null;
};

const MENU_ITEMS: MenuItem[] = [
  {
    tag: '整える',
    tagClassName: 'bg-[#51c4ce]',
    title: 'パーソナルマシンピラティス',
    subtitle: '50分/個別',
    lead: (
      <>
        専用マシンで骨格から整え、
        <br />
        美しいシルエットへ
      </>
    ),
    body: '骨格から体型を整えるための専用マシンセッション。インナーマッスルを強化し、理想の姿勢・美しいシルエットラインをつくります。',
    image: '/assets/images/menu-pilates.jpg',
  },
  {
    tag: '楽しく続ける',
    tagClassName: 'bg-[#2aa2ab]',
    title: 'セミパーソナルトレーニング',
    subtitle: '少人数制',
    lead: null,
    body: '最大4名の少人数グループレッスン。丁寧なフォーム指導を受けつつ、同じ目標を持つメンバーと一緒だから、モチベーションが持続します。',
    image: '/assets/images/menu-semi-personal.jpg',
  },
  {
    tag: '鍛える',
    tagClassName: 'bg-[#0b656a]',
    title: 'パーソナルトレーニング',
    subtitle: '50分/個別',
    lead: (
      <>
        完全マンツーマンで基礎代謝を高め、
        <br />
        太りにくい身体へ
      </>
    ),
    body: '完全マンツーマンのウェイト＆自体重トレーニング。基礎代謝をアップさせ、健康的に太りにくい美しい身体づくりを加速させます。',
    image: '/assets/images/menu-personal.jpg',
  },
];

const Menu = () => (
  <section data-section="menu" className="bg-white pt-[92px]">
    <SectionTitle id="menu" en="MENU INTRODUCTION" jp="メニュー紹介" />

    <div className="mx-auto mt-[31px] flex w-[310px] flex-col gap-[60px]">
      {MENU_ITEMS.map((item) => (
        <FadeIn key={item.title} className="relative flex flex-col gap-[15px]">
          {item.image ? (
            <div className="relative h-[188px] w-full overflow-hidden rounded-t-[15px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="310px"
                className="object-cover"
              />
            </div>
          ) : (
            <ImagePlaceholder className="h-[188px] w-full rounded-t-[15px]" />
          )}

          <div className="flex items-center justify-center border-b border-[#d1d1d1] pb-[8px]">
            <h3 className="text-ink flex-1 text-center font-bold tracking-[0.64px]">
              <span className="block text-[18px] leading-[1.65]">
                {item.title}
              </span>
              <span className="block text-[16px] leading-[1.65]">
                {item.subtitle}
              </span>
            </h3>
          </div>

          {item.lead && (
            <p className="rounded-[16px] border border-[#2e8f99] bg-[#f3f8f8] px-[12px] py-[10px] text-center text-[14px] leading-[1.4] font-bold text-[#1f5d64]">
              {item.lead}
            </p>
          )}

          <p className="text-body text-[16px] leading-[1.7] tracking-[0.32px]">
            {item.body}
          </p>

          <span
            className={`absolute top-[11px] left-[11px] flex min-h-[26px] items-center justify-center px-[8px] text-[16px] leading-[1.4] font-bold text-white ${item.tagClassName}`}
          >
            {item.tag}
          </span>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default Menu;
