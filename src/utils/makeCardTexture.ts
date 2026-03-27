import * as THREE from 'three';

import type { CardData } from '@/types/card';

export function makeCardTexture(data: CardData): Promise<THREE.CanvasTexture> {
  return new Promise((resolve) => {
    const W = 512;
    const H = 768;
    const cv = document.createElement('canvas');
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext('2d')!;

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      // Fill solid black background first to eliminate any alpha
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, W, H);

      // Cover-fit: scale image to fill canvas while keeping aspect ratio
      const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      const sw = img.naturalWidth * scale;
      const sh = img.naturalHeight * scale;
      const sx = (W - sw) / 2;
      const sy = (H - sh) / 2;
      ctx.drawImage(img, sx, sy, sw, sh);

      const tex = new THREE.CanvasTexture(cv);
      tex.colorSpace = THREE.SRGBColorSpace;
      resolve(tex);
    };

    img.onerror = () => {
      // Fallback: dark placeholder if image fails to load
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#333';
      ctx.font = 'bold 24px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('No Image', W / 2, H / 2);
      resolve(new THREE.CanvasTexture(cv));
    };

    img.src = data.imageUrl;
  });
}
