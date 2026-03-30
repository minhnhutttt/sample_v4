'use client';

import {
  Suspense,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';

import LoadingScreen, {
  LoadingScreenHandle,
} from '@/components/loading/LoadingScreen';
import { NavigationEvents } from '@/components/navigation/NavigationEvents';

interface LoadingContextType {
  startNavigation: (onMidpoint?: () => void) => void;
}

const noop = () => {};

const LoadingContext = createContext<LoadingContextType>({
  startNavigation: noop,
});

export function useLoading() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const loadingRef = useRef<LoadingScreenHandle>(null);

  useEffect(() => {
    loadingRef.current?.playExit();
  }, []);

  const startNavigation = useCallback((onMidpoint?: () => void) => {
    loadingRef.current?.play(onMidpoint);
  }, []);

  return (
    <LoadingContext.Provider value={{ startNavigation }}>
      <LoadingScreen ref={loadingRef} />
      <Suspense>
        <NavigationEvents onNavigationEnd={noop} />
      </Suspense>
      {children}
    </LoadingContext.Provider>
  );
}
