'use client';

import { ReactNode } from 'react';

import { Provider as ReduxProvider } from 'react-redux';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { store } from '@/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <ReduxProvider store={store}>{children}</ReduxProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
