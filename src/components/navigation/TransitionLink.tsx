'use client';

import { ComponentProps, MouseEvent } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useLoading } from '@/provider/LoadingProvider';

type TransitionLinkProps = ComponentProps<typeof Link>;

export function TransitionLink({
  href,
  onClick,
  children,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const { startNavigation } = useLoading();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.(e);

    startNavigation(() => {
      router.push(href.toString());
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
