// src/lib/fallbackImage.ts
import { Category } from '../types/microcms';

const CATEGORY_FALLBACK: Record<Category, string> = {
  アップデート: '/assets/images/default-update.png',
  使い方: '/assets/images/default-howto.png',
  プレスリリース: '/assets/images/default-press.png',
  事例: '/assets/images/default-notice.png',
  運営ブログ: '/assets/images/default-corporate.png',
};

const KIVO_LOGO = '/assets/images/kivo-talk.png';

export function getThumbnail(
  eyecatchUrl?: string,
  category?: Category,
): string {
  if (eyecatchUrl) return eyecatchUrl;
  if (category && CATEGORY_FALLBACK[category]) {
    return CATEGORY_FALLBACK[category];
  }
  return KIVO_LOGO;
}
