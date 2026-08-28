'use client';

import { useMemo } from 'react';

import { useActiveSection } from '@/hooks/use-active-section';
import type { SectionId } from '@/types/lp';

export type NavItem = {
  id: SectionId;
  label: string;
};

type HeaderNavProps = {
  items: NavItem[];
};

const HeaderNav = ({ items }: HeaderNavProps) => {
  const sectionIds = useMemo(() => items.map((item) => item.id), [items]);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="pointer-events-auto absolute top-[86px] left-[20px] max-w-[280px]">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'true' : undefined}
              className={`block text-[15px] leading-[2.88] transition-colors ${
                activeId === item.id
                  ? 'font-bold text-[#0b6f62]'
                  : 'font-semibold text-black hover:text-[#0b6f62]'
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
