'use client';

import { ReactNode } from 'react';

import useScrollAnimations from '@/app/hooks/useScrollAnimations';

const HomeFaqItem = ({
  question,
  answer,
}: {
  question: ReactNode;
  answer: ReactNode;
}) => (
  <div className="fade-up">
    <div className="flex min-h-20 items-center gap-5 bg-[linear-gradient(94deg,_#CAF1FF_-4.54%,_#D9E7FF_97.79%)] px-5 py-2 md:min-h-[94px]">
      <p className="font-inter text-[18px] font-bold text-[#0084FF] md:text-[36px]">
        Q
      </p>
      <p className="text-[14px] font-bold md:text-[18px]">{question}</p>
    </div>
    <div className="flex min-h-20 items-center gap-5 px-5 py-2 [box-shadow:0_2px_3px_0_rgba(0,_0,_0,_0.10)] md:min-h-[94px]">
      <p className="font-inter text-[18px] font-bold text-[#FF4747] md:text-[36px]">
        A
      </p>
      <p className="text-[14px] font-medium md:text-[18px]">{answer}</p>
    </div>
  </div>
);
const HomeFaq = () => {
  const ref = useScrollAnimations();
  const data = [
    {
      question: '広告の知識ゼロでも大丈夫？',
      answer: '大丈夫です。URLを入れるだけで、方向性から設定まで進められます。',
    },
    {
      question: '無料で見た内容は保存されますか？',
      answer: '保存しません。必要な場合は再度URLを入力してご利用ください。',
    },
    {
      question: 'Google広告アカウントがなくても使えますか？',
      answer:
        'URL解析とプレビューは利用できます。本番利用（設定・運用）にはGoogle広告アカウントが必要です。',
    },
    {
      question: ' Google広告アカウントを持っていないんだけど？',
      answer:
        'わかりやすい登録マニュアルを用意しております。サポートいたしますので安心してご利用ください。',
    },
    {
      question: ' 広告が表示されるまで時間がかかることはありますか？',
      answer: (
        <>
          アカウント状況や審査等により時間がかかる場合があります。
          <br />
          アカウント状況により確認が必要な場合があります。
        </>
      ),
    },
    {
      question: ' 困ったときはどうすればいい？',
      answer: (
        <>
          まずは導入チェックリストとヘルプチャットをご利用ください。連携や審査、広告が出ない等の“よくあるつまずき”はそこで解決できます。解決しない場合はメールで問い合わせできます。
        </>
      ),
    },
  ];
  return (
    <div ref={ref} className="px-5 py-20 md:py-50">
      <div className="relative mx-auto w-full max-w-[894px]">
        <div className="flex items-center justify-center">
          <span className="font-inter text-[38px] font-bold md:text-[64px]">
            よくある質問
          </span>
        </div>
        <div className="mt-7 space-y-5 md:mt-12 md:space-y-7.5">
          {data.map((item, index) => (
            <HomeFaqItem
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
