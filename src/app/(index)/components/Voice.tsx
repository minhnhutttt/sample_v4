import SectionTitle from '@/components/common/section-title';

import VoiceCard from './VoiceCard';

const voices = [
  {
    avatar: '/assets/images/voice/avatar-uemura.png',
    avatarAlt: 'アットハンド株式会社 代表取締役 植村様',
    name: 'アットハンド株式会社',
    role: '代表取締役 植村様',
    category: '(発酵シロップメーカー)',
    title: '隣の出展者が、まさかの取引先に。',
    description:
      '試食BARアサクサに出展したその日、たまたま同じ会場に発酵食品を扱うECバイヤーさんがいらして、その場で意気投合し仕入れが決まりました。今も継続してお取引いただいています。さらに、御社を通じて国内外のテレビ番組に商品と一緒に出演させていただく機会もあり、思いがけない形で発酵シロップの魅力を広めることができました。お客様のアンケートで「瓶が重い」という声が多かったことから、少量パウチタイプも新たに開発しました。お客様の声がそのまま商品改良につながる、貴重な場所だと感じています。',
  },
  {
    avatar: '/assets/images/voice/avatar-higuchi.png',
    avatarAlt: 'TAMACO-YA 樋口様',
    name: 'TAMACO-YA',
    role: '樋口様',
    category: '(激辛調味料)',
    title: '原材料の仕入れ先まで、ここで見つかりました。',
    description:
      '試食BARアサクサさんのご紹介で、製品に使うゆず皮の仕入れ先が決まり、今も継続して使わせていただいています。それだけでなく、店舗での販売イベントにも定期的に参加させてもらっていて、国内外のお客様と直接接点が持てるのは本当にありがたいです。普段はなかなか聞けない消費者の生の声を、その場で聞けるのも大きな魅力です。浅草に自社の棚を持たせてもらっているので、他のマルシェに参加した際にも「よかったら浅草にも」とご案内しやすくなりました。',
  },
  {
    avatar: '/assets/images/voice/avatar-yasuku.png',
    avatarAlt: 'SORA Japan株式会社 代表取締役 安久様',
    name: 'SORA Japan株式会社',
    role: '代表取締役 安久様',
    category: '(ECバイヤー)',
    title: 'メディアで完売、そして次の商品もここで見つける。',
    description:
      '試食BARアサクサに出展されていた商品がヒルナンデスで取り上げられ、私が運営するECサイトでも在庫が完売するという嬉しい出来事がありました。自社で販売していただけでは、こうした恩恵にはなかなか出会えなかったと思います。それ以来、展示会がない時期は商品を探しにこちらへ足を運ぶようになりました。普段のバイヤー業務では見る機会の少ない、消費者アンケートや評価を直接確認できるのも大きな魅力です。試食もできるので、仕入れの判断材料として本当に助かっています。',
  },
  {
    avatar: '/assets/images/voice/avatar-nishizawa.png',
    avatarAlt: '西澤園 代表 西澤様',
    name: '西澤園',
    role: '代表 西澤様',
    category: '(海外ECバイヤー・アメリカ向け)',
    title: '浅草で見つけた、宝探しのような場所。',
    description:
      'アメリカを拠点にしていますが、帰国中に浅草を歩いていて、ふと面白そうなお店を見つけて立ち寄ったのがきっかけでした。店内には日本の珍しい商品がたくさん並んでいて、探していた商品にすぐ出会えました。これまでは自分ひとりで商品を探し回っていましたが、インバウンド層の多い浅草にあるこちらのお店を通じて、海外で売れやすい商品を効率的に見つけられるようになりました。アンケート結果も見せていただけるので、商品情報の理解もぐっと深まっています。',
  },
];

const Voice = () => {
  return (
    <section className="px-5 pt-36 md:pt-48">
      <div className="mx-auto max-w-[1120px]">
        <SectionTitle>
          <p className="text-[24px] font-black text-[#434f8e] md:text-[48px]">
            浅草だからこその
          </p>
          <p className="text-[32px] font-black text-[#F03D22] md:text-[68px]">
            様々な出会い
          </p>
        </SectionTitle>

        <div className="mx-auto mt-10 max-w-[711px] text-center text-[18px] leading-[1.8] font-medium text-[#1c213b] md:mt-16 md:text-[20px]">
          <p>
            バイヤーをはじめ、イベント担当者、飲食のプロ、そして出展者同士など。
          </p>
          <p>様々な業界の人が日常的に訪れる浅草だからこそ、</p>
          <p>販路開拓のチャンスはバイヤーとの商談だけにとどまりません。</p>
          <p className="mt-10">
            実際に出展した企業様からは、「こんなところから声がかかるなんて！」
          </p>
          <p>
            という
            <span className="relative">
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[8px] rounded-full bg-[#FFC2C1] md:h-[10px]"
              />
              <span className="relative">嬉しい出会いのご報告</span>
            </span>
            が次々と届いています。
          </p>
        </div>

        <div className="mt-24 flex flex-col gap-10">
          {voices.map((voice) => (
            <VoiceCard key={voice.name} {...voice} />
          ))}
        </div>

        <p className="mt-12 text-center text-[20px] font-black text-[#434f8e] md:mt-24 md:text-[40px]">
          次は、御社がその「新しい出会い」を体験する番です！
        </p>
      </div>
    </section>
  );
};

export default Voice;
