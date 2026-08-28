import Image from 'next/image';

import SectionHeading from '@/components/section-heading';

import FeatureContents from './FeatureContents';
import { type MangaItem } from './MangaReaderModal';

const PLACEHOLDER_COVER = '/assets/images/manga/placeholder.webp';

const buildPages = (prefix: string, length: number) =>
  Array.from(
    { length },
    (_, index) =>
      `/assets/images/manga/${prefix}-${String(index + 1).padStart(2, '0')}.webp`,
  );

// ページの高さは全作品で揃え、幅はそれぞれの原稿のアスペクト比に準じる
const WORKS = [
  {
    id: 'inu-001',
    title: '犬っこのいる日常 1',
    author: 'アキト・春夏',
    pageWidth: 397,
    pages: buildPages('inu001', 10),
  },
  {
    id: 'chikyu-koryaku',
    title: '地球攻略まであと◯日',
    author: '久世みずき',
    pageWidth: 388,
    pages: buildPages('chikyu_koryaku', 5),
  },
  {
    id: 'shishia',
    title: 'スィスィア θυσια',
    author: 'さぎやまれん',
    pageWidth: 397,
    pages: buildPages('shishia', 10),
  },
  {
    id: 'shi-kuma',
    title: '感覚しーちゃんと理論派熊さん',
    author: '春夏アキト',
    pageWidth: 395,
    pages: buildPages('shi-kuma', 10),
  },
];

const ITEMS = [
  ...WORKS.map((work) => ({ ...work, cover: work.pages[0] })),
  ...Array.from({ length: 4 }, (_, index) => {
    const { pageWidth, pages } = WORKS[index % WORKS.length];

    return {
      id: `placeholder-${index + 1}`,
      title: '漫画名が入ります',
      author: '作家名が入ります',
      cover: PLACEHOLDER_COVER,
      pageWidth,
      pages,
    };
  }),
] satisfies MangaItem[];

const Feature = () => {
  return (
    <div className="relative overflow-hidden px-5 py-14 [box-shadow:0_14px_34px_0_rgba(129,_48,_0,_0.10)] md:px-15 md:py-[120px]">
      <div className="relative mx-auto w-full max-w-[1160px]">
        <SectionHeading>
          <p>注目のコンテンツ</p>
        </SectionHeading>

        <div className="mt-14 md:mt-25">
          <div className="flex w-fit items-center gap-2 rounded-full bg-[#5538C8] px-6 py-1.5 md:px-8 md:py-2">
            <Image
              src="/assets/icons/ic-drop.svg"
              alt=""
              width={28}
              height={28}
              className="size-6 md:size-7"
            />
            <span className="text-[20px] leading-[1.58] font-bold tracking-[0.03em] text-white md:text-[28px]">
              ドロップ
            </span>
          </div>

          <div className="mt-8 md:mt-12">
            <FeatureContents items={ITEMS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
