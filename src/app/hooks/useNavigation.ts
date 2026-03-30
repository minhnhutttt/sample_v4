'use client';

import { useCallback } from 'react';

import { useRouter } from 'next/navigation';

import { useLoading } from '@/provider/LoadingProvider';

export function useNavigation() {
  const router = useRouter();
  const { startNavigation } = useLoading();

  const push = useCallback(
    (href: string) => {
      startNavigation(() => {
        router.push(href);
      });
    },
    [router, startNavigation],
  );

  return { push };
}
