'use client';

import type { DotLottieReactProps } from '@lottiefiles/dotlottie-react';
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () =>
    import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  {
    ssr: false,
    loading: () => <div style={{ width: '100%', height: '100%' }} />, // placeholder giữ layout
  },
);

export default function LottiePlayer(props: DotLottieReactProps) {
  return <DotLottieReact {...props} />;
}
