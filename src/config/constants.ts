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

export const NavLinks = [
  {
    text: 'ブランドについて',
    href: '/',
  },
  {
    text: 'サービス利用規約',
    href: '/',
  },
  {
    text: 'プライバシーポリシー',
    href: '/',
  },
  {
    text: '特定商取引法表記・法的情報',
    href: '/',
  },
  {
    text: 'アプリのダウンロード',
    href: '/download',
  },
  {
    text: '他サービスとの比較',
    href: '/comparison',
  },
  {
    text: 'プレミアムチャンネルについて',
    href: '/premium',
  },
  {
    text: 'お知らせ・記事一覧',
    href: '/',
  },
  {
    text: 'サポート・お問い合わせ',
    href: '/support',
  },
];
