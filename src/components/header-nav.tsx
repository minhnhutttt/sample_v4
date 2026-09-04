'use client';

import { useMemo } from 'react';

import { useActiveSection } from '@/hooks/use-active-section';
import type { SectionId } from '@/types/lp';

export type NavItem = {
  id: SectionId;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'concerns', label: 'こんなお悩みありませんか？' },
  { id: 'why', label: 'ALONAが選ばれる理由' },
  { id: 'pricing', label: '料金プラン' },
  { id: 'payment', label: 'お支払い方法' },
  { id: 'menu', label: 'メニュー紹介' },
  { id: 'flow', label: '初回体験トレーニングの流れ' },
  { id: 'faq', label: 'よくある質問' },
  { id: 'access', label: 'アクセス' },
];

type HeaderNavProps = {
  items: NavItem[];
};

const HeaderNav = ({ items }: HeaderNavProps) => {
  const sectionIds = useMemo(() => items.map((item) => item.id), [items]);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="pointer-events-auto absolute top-[89px] left-[20px] max-w-[280px]">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'true' : undefined}
              className={`block text-[15px] leading-[2.88] transition-colors ${
                activeId === item.id
                  ? 'font-bold text-white'
                  : 'font-semibold text-white/85 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
