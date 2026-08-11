import Image from 'next/image';

import SectionHeading from '@/components/section-heading';

import FeatureSlider, { type FeatureContent } from './FeatureSlider';

const WATERMARKS = [
  { label: 'DROP', icon: '/assets/images/ic-drop.svg' },
  { label: 'CHANNEL', icon: '/assets/images/ic-channel.svg' },
];

type Author = {
  name: string;
  works: string;
  avatar: string;
  contents: FeatureContent[];
};

const AUTHORS = [
  {
    name: '神崎エル 先生',
    works: '代表作：『学園魔導ファンタジー・リライト』',
    avatar: '/assets/images/feature-avatar.png',
    contents: [
      {
        image: '/assets/images/feature-01.jpg',
        tag: 'channel',
        text: '「神崎エルの魔法作画裏部屋」週1回、次のストーリー展開のアイデアをファン投票で決定する作戦会議を開催中！',
      },
      {
        image: '/assets/images/feature-02.jpg',
        tag: 'drop',
        text: '単行本3巻で泣く泣くカットされた、幻の「水着回ネーム・ラフ版（全32ページ）」をスクショ不可アセットとして限定リリース！',
      },
      {
        image: '/assets/images/feature-01.jpg',
        tag: 'channel',
        text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        image: '/assets/images/feature-02.jpg',
        tag: 'drop',
        text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    ],
  },
  {
    name: '一ノ瀬玲 先生',
    works: '代表作：『ロスト・クロニクル / SFサイバーアクション』',
    avatar: '/assets/images/feature-avatar.png',
    contents: [
      {
        image: '/assets/images/feature-01.jpg',
        tag: 'channel',
        text: '「一ノ瀬玲のSFガジェットラボ」不定期でネーム制作の様子を画面共有しながら、制作秘話を語る生配信チャット！',
      },
      {
        image: '/assets/images/feature-02.jpg',
        tag: 'drop',
        text: '圧倒的筆致で描かれた、第1話見開きカラー扉絵の「超高画質4Kデジタル原画（シリアルナンバー付き）」',
      },
      {
        image: '/assets/images/feature-01.jpg',
        tag: 'channel',
        text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        image: '/assets/images/feature-02.jpg',
        tag: 'drop',
        text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    ],
  },
  {
    name: 'もちもち 先生',
    works: '代表作：『ゆるふわ悪魔の日常同居生活』',
    avatar: '/assets/images/feature-avatar.png',
    contents: [
      {
        image: '/assets/images/feature-01.jpg',
        tag: 'channel',
        text: '「もちもちお便りポスト」ファンからのお悩みに、もちもち先生が描き下ろしイラストとキャラクターボイス（音声データ）で答える限定ルーム！',
      },
      {
        image: '/assets/images/feature-02.jpg',
        tag: 'drop',
        text: 'スマホのフォルダに眠っていた、企画立ち上げ時の「キャラクター初期設定＆ボツ案ラフ詰め合わせPDF（15ページ）」！',
      },
      {
        image: '/assets/images/feature-01.jpg',
        tag: 'channel',
        text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        image: '/assets/images/feature-02.jpg',
        tag: 'drop',
        text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    ],
  },
] satisfies Author[];

const Feature = () => {
  return (
    <div className="relative overflow-hidden px-5 py-10 md:px-15 md:py-15">
      <div className="relative mx-auto w-full max-w-[1160px]">
        <SectionHeading>
          <p>注目のコンテンツ</p>
        </SectionHeading>
      </div>
      <div className="mt-14 space-y-14 md:mt-26 md:space-y-23">
        {AUTHORS.map((author) => (
          <div key={author.name}>
            <div className="relative mx-auto flex w-full max-w-[1160px] items-center justify-center gap-5 max-lg:flex-col lg:justify-between">
              <div className="flex items-center gap-4 md:gap-5">
                <div className="relative size-18 shrink-0 overflow-hidden rounded-full bg-[#E0E0E0] md:size-25">
                  <Image
                    src={author.avatar}
                    alt=""
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-7">
                  <p className="text-[24px] leading-[1.56] font-bold tracking-[0.02em] text-[#242424] md:text-[36px]">
                    {author.name}
                  </p>
                  <span className="hidden h-14 w-px bg-[#242424]/50 md:block" />
                  <p className="font-inter text-[14px] leading-[2.3] tracking-[0.04em] text-[#242424] md:text-[18px]">
                    {author.works}
                  </p>
                </div>
              </div>
              <div className="flex gap-11">
                {WATERMARKS.map((watermark) => (
                  <div
                    key={watermark.label}
                    className="flex flex-col items-center opacity-15"
                  >
                    <Image
                      src={watermark.icon}
                      alt=""
                      width={64}
                      height={64}
                      className="size-10 md:size-16"
                    />
                    <p className="font-anton text-[20px] leading-[1.5] tracking-[0.03em] text-[#F78629] md:text-[28px]">
                      {watermark.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <FeatureSlider contents={author.contents} label={author.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
