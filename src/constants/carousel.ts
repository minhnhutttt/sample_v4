import type { CardData } from '@/types/card';

const TOTAL_CARDS = 10;

export const CARDS: CardData[] = Array.from(
  { length: TOTAL_CARDS },
  (_, i) => ({
    imageUrl: `https://picsum.photos/seed/${i + 1}/400/600`,
  }),
);

// Cylinder / card dimensions
export const RADIUS = 2.2;
export const CARD_W = 1.6 * 0.7;
export const CARD_H = 2.4 * 0.7;
export const CURVE_SEGS = 24;
export const SPEED = -0.003;
