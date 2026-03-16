'use client';

import { useEffect, useRef } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

interface NavigationEventsProps {
  onNavigationEnd: () => void;
}

export function NavigationEvents({ onNavigationEnd }: NavigationEventsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    onNavigationEnd();
  }, [pathname, searchParams]);

  return null;
}
