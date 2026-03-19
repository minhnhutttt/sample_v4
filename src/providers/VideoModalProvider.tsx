// app/providers/VideoModalProvider.tsx
'use client';

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

// app/providers/VideoModalProvider.tsx

interface VideoModalContextValue {
  src: string | null;
  isOpen: boolean;
  openModal: (src: string) => void;
  closeModal: () => void;
}

const VideoModalContext = createContext<VideoModalContextValue | null>(null);

export const VideoModalProvider = ({ children }: { children: ReactNode }) => {
  const [src, setSrc] = useState<string | null>(null);

  const openModal = useCallback((src: string) => setSrc(src), []);
  const closeModal = useCallback(() => setSrc(null), []);

  return (
    <VideoModalContext.Provider
      value={{ src, isOpen: !!src, openModal, closeModal }}
    >
      {children}
    </VideoModalContext.Provider>
  );
};

export const useVideoModal = () => {
  const ctx = useContext(VideoModalContext);
  if (!ctx)
    throw new Error('useVideoModal must be used within VideoModalProvider');
  return ctx;
};
