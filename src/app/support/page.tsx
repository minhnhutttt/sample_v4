import type { Metadata } from 'next';

import PageFv from '@/components/PageFv';
import Faq from '@/components/common/Faq';
import { OG, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Support',
  openGraph: {
    ...OG,
    title: 'support',
    url: '/support',
  },
  twitter: {
    ...TWITTER,
    title: 'support',
  },
  alternates: {
    canonical: '/support',
  },
};

const SupportPage = () => {
  const faqData01 = [
    {
      question: '本当にスクリーンショットはできませんか？',
      answer: (
        <>
          はい。KIVOでは、チャンネル内コンテンツのスクリーンショットを制限しています。
          <br />
          情報が意図せず保存・拡散されることを防ぐ設計です。
        </>
      ),
    },
    {
      question: '投稿の転送や共有はできますか？',
      answer: (
        <>
          できません。
          <br />
          チャンネル内の投稿は、無断転送や外部共有ができない仕様です。
          <br />
          「拡散されないこと」を前提に設計されています。
        </>
      ),
    },
    {
      question: '有料チャンネルの内容は外部に漏れませんか？',
      answer: (
        <>
          参加者のみが閲覧できる設計になっています。
          <br />
          URL共有や外部リンクによる閲覧はできません。
        </>
      ),
    },
    {
      question: '通信は安全ですか？',
      answer: (
        <>
          はい。通信は暗号化されています。
          <br />
          安全な通信プロトコルを使用し、第三者による盗聴を防止しています。
        </>
      ),
    },
    {
      question: '個人情報はどのように管理されていますか？',
      answer: (
        <>
          登録情報や決済情報は安全な環境で管理されています。
          <br />
          決済はApp Store / Google
          Play経由で行われ、KIVO側でカード情報を保持することはありません。
        </>
      ),
    },
    {
      question: 'チャンネル参加者の情報は他の参加者に見えますか？',
      answer: (
        <>
          いいえ。 チャンネルは基本的に一方向配信設計です。
          <br />
          参加者同士が互いの情報を見ることはありません。
        </>
      ),
    },
    {
      question:
        '無料チャンネルとPremiumチャンネルでセキュリティに違いはありますか？',
      answer: (
        <>
          基本的な保護設計は共通です。
          <br />
          Premium
          Channelでは、参加者が限定されることで、より閉じた環境での配信が可能になります。
        </>
      ),
    },
    {
      question: '不正利用があった場合はどうなりますか？',
      answer: (
        <>
          利用規約違反や不正行為が確認された場合、
          <br />
          アカウント制限や停止措置を行う場合があります。
        </>
      ),
    },
    {
      question: 'データはどこに保存されていますか？',
      answer: (
        <>
          データは安全なサーバー環境で管理されています。
          <br />
          外部への公開や第三者提供は行いません。
        </>
      ),
    },
  ];
  const faqData02 = [
    {
      question: 'チャンネルとは何ですか？',
      answer: (
        <>
          チャンネルは、配信者が一方向に情報を届けるためのスペースです。
          <br />
          DMやグループのような双方向チャットではなく、
          <br />
          **「必要な人に、きちんと届けるための場所」**として設計されています。
        </>
      ),
    },
    {
      question: '無料チャンネルと有料チャンネルの違いは何ですか？',
      answer: (
        <>
          ・無料チャンネル
          <br />
          誰でも参加できる公開チャンネルです。
          <br />
          投稿に有料添付ファイルを設定することができます。
          <br />
          <br />
          ・有料チャンネル
          <br />
          ポイントによるサブスクリプション参加が必要な非公開チャンネルです。
          <br />
          月額（ポイント消費）で継続参加する形式です。
          <br />
          <br />
          ※有料チャンネルでは、有料添付は設定できません
          <br />
          （サブスクリプションとの二重課金を防ぐため）。
        </>
      ),
    },
    {
      question: '有料チャンネルは誰でも作れますか？',
      answer: (
        <>
          いいえ。
          <br />
          有料チャンネルの作成は Premium Plan加入者のみ可能 です。
          <br />
          無料ユーザーは無料チャンネルのみ作成できます。
        </>
      ),
    },
    {
      question: '有料チャンネルの料金はどのように支払いますか？',
      answer: (
        <>
          ポイントを消費することで参加できます。
          <br />
          ポイントはApp Store / Google Playを通じて購入できます。
        </>
      ),
    },
    {
      question: 'チャンネル参加は自動更新ですか？',
      answer: (
        <>
          はい。
          <br />
          ポイント消費型の継続サブスクリプションです。
          <br />
          停止したい場合は、アプリ内からいつでもキャンセルできます。
        </>
      ),
    },
    {
      question: '無料チャンネルから有料チャンネルへ変更できますか？',
      answer: (
        <>
          はい。
          <br />
          Premium Plan加入者であれば、有料チャンネルへ切り替えることができます。
        </>
      ),
    },
    {
      question: 'チャンネル内で返信や会話はできますか？',
      answer: (
        <>
          チャンネルは基本的に、配信者からの一方向配信です。
          <br />
          双方向のやり取りを行いたい場合は、DMやグループ機能をご利用ください。
        </>
      ),
    },
    {
      question: 'チャンネルで得た収益はどうなりますか？',
      answer: (
        <>
          Premium
          Plan加入者は、チャンネルのサブスクリプションによる収益を確認できます。
          <br />
          詳細はアプリ内の管理画面からご確認いただけます。
        </>
      ),
    },
    {
      question: '有料チャンネルをやめるとどうなりますか？',
      answer: (
        <>
          参加を停止すると、そのチャンネル内のコンテンツは閲覧できなくなります。
          <br />
          再度参加すれば、再び閲覧可能です
        </>
      ),
    },
  ];
  const faqData03 = [
    {
      question: 'KIVOではどのように支払いを行いますか？',
      answer: (
        <>
          KIVOでは「ポイント」を購入し、そのポイントを使って有料チャンネルへ参加します。
          <br />
          ポイントは App Store / Google Play を通じて購入できます。
        </>
      ),
    },
    {
      question: '有料チャンネルの参加はサブスクリプションですか？',
      answer: (
        <>
          はい。
          <br />
          有料チャンネルは、ポイント消費型の継続サブスクリプションです。
          <br />
          参加中は、毎月自動でポイントが消費されます。
        </>
      ),
    },
    {
      question: '自動更新はいつでも停止できますか？',
      answer: (
        <>
          はい。
          <br />
          アプリ内、または各ストアのサブスクリプション管理画面から
          <br />
          いつでもキャンセルできます。
        </>
      ),
    },
    {
      question: '解約するとどうなりますか？',
      answer: (
        <>
          次回の更新タイミング以降、ポイントは消費されません。
          <br />
          更新日を過ぎると、そのチャンネルの閲覧はできなくなります。
        </>
      ),
    },
    {
      question: '返金はできますか？',
      answer: (
        <>
          返金は App Store / Google Play の規定に準じます。
          <br />
          詳細は各ストアのポリシーをご確認ください。
        </>
      ),
    },
    {
      question: '有料チャンネル内で追加課金はありますか？',
      answer: <>有料チャンネル内での追加課金はありません。</>,
    },
    {
      question: 'ポイントの有効期限はありますか？',
      answer: (
        <>
          購入したポイントの有効期限については、アプリ内のポイント規約をご確認ください。
          <br />
          期限がある場合は事前に表示されます。
        </>
      ),
    },
    {
      question: '支払い情報は安全ですか？',
      answer: (
        <>
          はい。
          <br />
          決済は App Store / Google Play を通じて処理されるため、
          <br />
          KIVOがクレジットカード情報を直接保持することはありません。
        </>
      ),
    },
  ];
  const faqData04 = [
    {
      question: 'KIVOではどのように支払いを行いますか？',
      answer: (
        <>
          KIVOでは「ポイント」を購入し、そのポイントを使って有料チャンネルへ参加します。
          <br />
          ポイントは App Store / Google Play を通じて購入できます。
        </>
      ),
    },
    {
      question: '有料チャンネルの参加はサブスクリプションですか？',
      answer: (
        <>
          はい。
          <br />
          有料チャンネルは、ポイント消費型の継続サブスクリプションです。
          <br />
          参加中は、毎月自動でポイントが消費されます。
        </>
      ),
    },
    {
      question: '自動更新はいつでも停止できますか？',
      answer: (
        <>
          はい。
          <br />
          アプリ内、または各ストアのサブスクリプション管理画面から
          <br />
          いつでもキャンセルできます。
        </>
      ),
    },
    {
      question: ' 解約するとどうなりますか？',
      answer: (
        <>
          次回の更新タイミング以降、ポイントは消費されません。
          <br />
          更新日を過ぎると、そのチャンネルの閲覧はできなくなります。
        </>
      ),
    },
    {
      question: '返金はできますか？',
      answer: (
        <>
          返金は App Store / Google Play の規定に準じます。
          <br />
          詳細は各ストアのポリシーをご確認ください。
        </>
      ),
    },
    {
      question: '有料チャンネル内で追加課金はありますか？',
      answer: <>有料チャンネル内での追加課金はありません。</>,
    },
    {
      question: 'ポイントの有効期限はありますか？',
      answer: (
        <>
          購入したポイントの有効期限については、アプリ内のポイント規約をご確認ください。
          <br />
          期限がある場合は事前に表示されます。
        </>
      ),
    },
    {
      question: '支払い情報は安全ですか？',
      answer: (
        <>
          はい。
          <br />
          決済は App Store / Google Play を通じて処理されるため、
          <br />
          KIVOがクレジットカード情報を直接保持することはありません。
        </>
      ),
    },
  ];
  return (
    <div className="bg-white">
      <PageFv
        text={
          <>
            KIVO App <br />
            Support
          </>
        }
      />
      <div className="px-5 pt-20 md:pt-[100px]">
        <div className="relative mx-auto flex w-full max-w-100 items-center justify-center text-white md:max-w-[1280px] md:gap-10 lg:gap-[86px]">
          <div className="relative z-10 text-center">
            <div className="w-full">
              <p className="text-[18px] font-bold text-black md:text-[40px]">
                困っていることはありませんか？
                <br />
                KIVOサポートが、丁寧にお答えします。
              </p>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="my-20 md:my-[100px]">
              <h4 className="text-center text-[24px] font-bold md:text-[50px]">
                こんな人に向いています
              </h4>
              <p className="text-center text-[16px] font-medium md:text-[24px]">
                KIVOは「守る設計」です。
                <br />
                セキュリティに関する疑問は、まずこちらをご確認ください。
              </p>
              <div className="mt-5 text-[#1E1E1E] md:mt-[25px]">
                {faqData01.map((item) => (
                  <Faq question={item.question} key={item.question}>
                    {item.answer}
                  </Faq>
                ))}
              </div>
            </div>
            <div className="my-24 md:my-[170px]">
              <h4 className="text-center text-[24px] font-bold md:text-[50px]">
                チャンネルについて
              </h4>
              <div className="mt-8 text-[#1E1E1E] md:mt-[50px]">
                {faqData02.map((item) => (
                  <Faq question={item.question} key={item.question}>
                    {item.answer}
                  </Faq>
                ))}
              </div>
            </div>
            <div className="my-24 md:my-[170px]">
              <h4 className="text-center text-[24px] font-bold md:text-[50px]">
                支払いについて
              </h4>
              <div className="mt-8 text-[#1E1E1E] md:mt-[50px]">
                {faqData03.map((item) => (
                  <Faq question={item.question} key={item.question}>
                    {item.answer}
                  </Faq>
                ))}
              </div>
            </div>
            <div className="my-24 md:my-[170px]">
              <h4 className="text-center text-[24px] font-bold md:text-[50px]">
                アカウントについて
              </h4>
              <div className="mt-8 text-[#1E1E1E] md:mt-[50px]">
                {faqData04.map((item) => (
                  <Faq question={item.question} key={item.question}>
                    {item.answer}
                  </Faq>
                ))}
              </div>
            </div>
            <div className="my-24 md:my-[170px]">
              <p className="text-center text-[16px] font-medium md:text-[24px]">
                FAQで解決しない場合は、こちらからお気軽にご連絡ください。
              </p>
              <h4 className="text-center text-[24px] font-bold md:text-[50px]">
                ご質問・ご相談はこちら
              </h4>

              <div className="mt-8 text-[#1E1E1E] md:mt-[50px]">
                <iframe
                  className="airtable-embed"
                  src="https://airtable.com/embed/appmyl8b8OPaeclGH/pagF9C86JcmP9qxTN/form"
                  frameBorder="0"
                  width="100%"
                  height="800"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
