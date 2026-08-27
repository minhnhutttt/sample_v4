import Image from 'next/image';

import { MENU_ITEMS } from '@/data/lp';

import FadeIn from '../ui/fade-in';
import ImagePlaceholder from '../ui/image-placeholder';
import SectionTitle from '../ui/section-title';

const Menu = () => (
  <section data-section="menu" className="bg-white pt-[85px]">
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

          <p className="text-body text-[16px] leading-[1.7] tracking-[0.32px]">
            {item.body}
          </p>

          <span
            style={{ width: `${item.tagWidth}px` }}
            className={`absolute top-[11px] left-[11px] flex h-[26px] items-center justify-center text-[16px] leading-[1.4] font-bold text-white ${item.tagClassName}`}
          >
            {item.tag}
          </span>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default Menu;
