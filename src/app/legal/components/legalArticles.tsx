'use client';


const mainFont = { fontFamily: 'var(--font-family-main, Inter)' };

const legals = [
  {
    id: '01',
    link: '/privacy-policy',
    head: 'PRIVACY POLICY',
    title: 'プライバシーポリシー',
    content: '個人情報の取得、利用目的、管理方法について記載しています。',
  },
  {
    id: '02',
    link: '/terms',
    head: 'TERMS OF USE',
    title: '利用規約',
    content:
      'KIVOの利用条件、禁止事項、免責事項など、サービス利用に関する基本ルールを定めています。',
  },
  {
    id: '03',
    link: '/legal/terms-creater',
    head: 'CREATOR TERMS',
    title: 'クリエイター向け利用規約',
    content:
      '投稿、販売、収益化に関する条件など、クリエイター向けのルールを記載しています。',
  },
  {
    id: '04',
    link: '/legal/tokushoho',
    head: 'COMMERCIAL DISCLOSURE',
    title: '特定商取引法に基づく表記',
    content:
      '事業者情報、料金、支払い方法、返品・キャンセル等に関する法定表示です。',
  },
];

const LegalArticles = () => {
  return (
    <div className="mx-auto grid w-full max-w-[1160px] grid-cols-2">
      {legals.map((legal) => (
        <a href={legal.link} key={legal.id} className="block p-6 md:p-10">
          <div className="flex">
            <p className="font-anton text-[60px] text-[#F98528] md:text-[100px]">
              {legal.id}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default LegalArticles;
