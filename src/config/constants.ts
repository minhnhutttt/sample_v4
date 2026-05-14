export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';
export const SITE_URL_WITH_SCHEME = SITE_URL ? `https://${SITE_URL}` : '';
export const SITE_NAME = 'CREATER KIVO TALK';
export const DEFAULT_DESCRIPTION =
  'KIVOはどんな人であっても、あなたを輝かせるステージを提供します。あなたがSNSユーザーでも、KIVOを使えばクリエイター。あなたが漫画・同人作家なら、KIVOの世界では連載作家。あなたがコミュニティ運用者だとしたら、KIVOに立てばカリスマ講師。';
export const KEYWORDS = [SITE_NAME];

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
