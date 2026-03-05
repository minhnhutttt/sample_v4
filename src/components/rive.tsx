'use client';

import { useRive } from '@rive-app/react-canvas';

interface RiveProps {
  src: string;
  width?: number | string;
  height?: number | string;
}

export default function Rive({
  src,
  width = '100%',
  height = '100%',
}: RiveProps) {
  const { RiveComponent } = useRive({
    src,
    autoplay: true,
  });

  return (
    <div style={{ width, height }}>
      <RiveComponent />
    </div>
  );
}
