import { useCallback } from 'react';

import { useRive } from '@rive-app/react-canvas';

export default function LogoRive() {
  const { rive, RiveComponent } = useRive({
    src: '/assets/images/logo.riv',
    autoplay: true,
  });

  const handlePlay = useCallback(() => {
    rive?.play();
  }, [rive]);

  const handlePause = useCallback(() => {
    rive?.pause();
  }, [rive]);

  const handleStop = useCallback(() => {
    rive?.stop();
  }, [rive]);

  return (
    <div>
      <RiveComponent style={{ width: '400px', height: '400px' }} />
      <div style={{ marginTop: 12 }}>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}
