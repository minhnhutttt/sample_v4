// src/lib/fallbackImage.ts
import { Category } from '../types/microcms';

const CATEGORY_FALLBACK: Record<Category, string> = {
  アップデート: '/assets/images/default-update.png',
  使い方: '/assets/images/default-howto.png',
  プレスリリース: '/assets/images/default-press.png',
  お知らせ: '/assets/images/default-notice.png',
  コーポレート: '/assets/images/default-corporate.png',
};

const KIVO_LOGO = '/assets/images/kivo-logo.png';

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
