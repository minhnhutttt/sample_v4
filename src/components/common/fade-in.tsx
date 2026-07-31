'use client';

import type { ElementType, ReactNode } from 'react';

import { useInView } from '@/hooks/useInView';

type FadeInProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

const FadeIn = ({ children, as: Tag = 'div', className = '' }: FadeInProps) => {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default FadeIn;
