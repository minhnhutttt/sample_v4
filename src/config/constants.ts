export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';
export const SITE_URL_WITH_SCHEME = SITE_URL ? `https://${SITE_URL}` : '';
export const SITE_NAME = 'ALONA｜ピラティス & パーソナルトレーニング';
export const DEFAULT_DESCRIPTION =
  '1回50分のマンツーマン。ピラティス、マシーンを使ったパーソナルトレーニングが定額で通い放題。2026年10月10日（土）池尻大橋・中目黒にOPEN！';
export const KEYWORDS = [
  'ALONA',
  'ピラティス',
  'パーソナルトレーニング',
  '池尻大橋',
  '中目黒',
  '目黒区',
];

export const OG_IMAGES = [
  {
    url: '/assets/images/og_image.png',
    width: 1200,
    height: 630,
    alt: SITE_NAME,
  },
];

export const OG = {
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  siteName: SITE_NAME,
  locale: 'ja_JP',
  type: 'website',
  images: OG_IMAGES,
};

export const TWITTER = {
  card: 'summary_large_image',
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  images: OG_IMAGES,
};

/**
 * TODO: 実 URL が確定したら差し替える。
 * Figma にリンク先の指定がないため、暫定で '#' を設定している。
 */
export const EXTERNAL_LINKS = {
  reservation: '#',
  line: '#',
  privacyPolicy: '#',
  termsOfService: '#',
} as const;

export const SHOP = {
  postalCode: '〒153-0042',
  address: '東京都目黒区青葉台3-10-11 青葉台フラッツ2階',
  /** Google Maps embed (marker on the shop address). */
  mapEmbedSrc:
    'https://maps.google.com/maps?q=' +
    encodeURIComponent('東京都目黒区青葉台3-10-11 青葉台フラッツ') +
    '&hl=ja&z=16&t=m&iwloc=B&output=embed',
} as const;
