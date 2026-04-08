export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';
export const SITE_URL_WITH_SCHEME = SITE_URL ? `https://${SITE_URL}` : '';
export const SITE_NAME = 'SITE NAME';
export const DEFAULT_DESCRIPTION = 'description';
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

export const NAV_LINKS = [
  { label: '選ばれる理由', href: '#reasons' },
  { label: '掲載業者の基準', href: '#businesses' },
  { label: 'ご利用ステップ', href: '#steps' },
  { label: 'よくある質問', href: '#faq' },
];
