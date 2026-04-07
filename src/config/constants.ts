export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://leoblacks.jp';
export const SITE_URL_WITH_SCHEME = SITE_URL ? `https://${SITE_URL}` : '';
export const SITE_NAME = 'LEO BLACKS SAGA';
export const DEFAULT_DESCRIPTION =
  'LEO BLACKSは、日本のチームで唯一、3x3国際プロバスケットボールリーグ「3BL」と業務提携をしており、バスケットボールにおいて国際的にいかに貢献できるかを考え、活動しています。チーム名およびテームロゴは、明治期に姿を消した唐津くんちの曳山「黒獅子」がモチーフ。2Mを越す長身の外国人選手と地元九州地方出身の選手を起用し、結果を残しつつも地元に愛されるチームを目指しています。';
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

export const PER_PAGE = 9;

export const NavLinks = [
  {
    text: 'ニュース',
    href: '/news',
  },
  {
    text: 'チーム',
    href: '/team',
  },
  {
    text: 'ゲーム',
    href: '/game',
  },
  {
    text: 'パートナー',
    href: '/partners',
  },
];
