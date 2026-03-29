// components/ScrollableLayout.tsx
'use client';

import { ReactNode, useRef } from 'react';

import { useLenis } from '@/app/hooks/useLenis';

// components/ScrollableLayout.tsx

export default function ScrollableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useLenis(scrollAreaRef);

  return (
    <div className="scrollable scrollable--root">
      <div ref={scrollAreaRef} className="scrollable__area">
        <div>
          <div className="scrollable__area-inner">{children}</div>
        </div>
      </div>
    </div>
  );
}
