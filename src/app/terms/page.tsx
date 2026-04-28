import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約 | KIVO',
  description:
    '株式会社KIVOが提供するKIVO App（iOS/Android）およびkivo.talkウェブサイトの利用規約です。',
};

const definitions = [
  { term: '当社', desc: '株式会社KIVO' },
  {
    term: '本サービス',
    desc: 'kivo.talk および KIVO App（iOS/Android）の総称',
  },
  {
    term: 'ユーザー',
    desc: '本規約に同意し、本サービスを利用するすべての個人',
  },
  {
    term: 'クリエイター',
    desc: '本サービス上でDropまたはChannelを通じてコンテンツを提供するユーザー',
  },
  {
    term: 'Drop',
    desc: 'ポイントを消費することで永続的な閲覧権を取得する単品コンテンツ機能',
  },
  {
    term: 'Channel',
    desc: '月額ポイントを消費してコンテンツを継続閲覧するサブスクリプション機能',
  },
  {
    term: 'ポイント',
    desc: 'ユーザーがコンテンツを購入するために使用する、本サービス内専用の消費単位。Apple App StoreまたはGoogle Playを通じて購入し、購入日から180日で失効する。現金・暗号資産への換金および第三者への譲渡はできない',
  },
  {
    term: 'レベニューポイント',
    desc: 'クリエイターがコンテンツ販売・Channel収益・アフィリエイト報酬として受け取る収益単位。コンテンツの購入およびユーザーへの送金には使用できない。出金方法・条件の詳細は当社が別途定める',
  },
  {
    term: 'Premium Plan',
    desc: 'パブリックChannel作成・1:N招待リンク・アフィリエイト報酬が利用可能となる月額または年額制の有料プラン',
  },
];

const sections = [
  {
    id: 'definitions',
    number: '1',
    title: '定義',
    content: (
      <div className="overflow-hidden rounded-lg border border-neutral-800">
        <table className="w-full text-sm">
          <tbody className="divide-y divide-neutral-800">
            {definitions.map(({ term, desc }) => (
              <tr key={term}>
                <td className="w-40 shrink-0 px-5 py-4 align-top text-neutral-500">
                  {term}
                </td>
                <td className="px-5 py-4 text-neutral-400">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'agreement',
    number: '2',
    title: '規約への同意および適用',
    content: (
      <div className="space-y-3 leading-relaxed text-neutral-400">
        <p>
          本サービスの利用を開始した時点で、ユーザーは本規約の全条項に同意したものとみなされます。同意しない場合は、本サービスの利用を中止してください。
        </p>
        <p>
          未成年者が本サービスを利用する場合は、あらかじめ親権者等の法定代理人の同意を得てください。未成年者が本サービスを利用した場合、法定代理人の同意があったものとみなします。
        </p>
        <p>
          当社が別途定める個別規約・ガイドライン等は、本規約の一部を構成します。本規約と個別規約が矛盾する場合は、個別規約が優先されます。
        </p>
      </div>
    ),
  },
  {
    id: 'account',
    number: '3',
    title: 'アカウント登録・招待制',
    content: (
      <div className="space-y-3 leading-relaxed text-neutral-400">
        <p>
          本アプリへの参加には、既存ユーザーが発行する招待コードまたは招待リンクが必要です。当社は招待なしの参加申請を承諾する義務を負いません。
        </p>
        <p>
          アカウントは1人につき1つのみ保有できます。複数アカウントの作成・運用は禁止します。
        </p>
        <p>
          ユーザーは、パスキー・端末認証を含むアカウント情報を自己の責任で厳重に管理するものとします。アカウント情報の管理不十分・第三者による不正使用について、当社は一切の責任を負いません。
        </p>
        <p>
          ユーザーが18歳未満の場合、Premium
          Planへの加入およびポイントを使用した有料コンテンツの購入には、法定代理人の同意が必要です。
        </p>
      </div>
    ),
  },
  {
    id: 'points',
    number: '4',
    title: 'ポイントの購入・利用・有効期限',
    content: (
      <div className="space-y-3 leading-relaxed text-neutral-400">
        <p>
          ポイントの購入はApple App StoreまたはGoogle
          Playのアプリ内課金（IAP）を通じてのみ行われます。外部決済によるポイント購入はできません。
        </p>
        <p>
          ポイントは購入日から
          <span className="font-medium text-neutral-200">180日間</span>
          有効です。有効期限が近いものから順に消費されます（FIFO方式）。有効期限を過ぎたポイントは自動的に失効し、復元できません。
        </p>
        <p>
          有効期限の残存日数が30日・10日・7日・3日・1日となった時点で、アプリ内通知を送付します。
        </p>
        <p>
          ポイントは本サービス内でのコンテンツ購入にのみ使用できます。現金・暗号資産への換金、第三者への譲渡、および本サービス外での使用はできません。
        </p>
      </div>
    ),
  },
  {
    id: 'revenue-points',
    number: '5',
    title: 'レベニューポイント',
    content: (
      <div className="space-y-3 leading-relaxed text-neutral-400">
        <p>
          クリエイターは、Drop・Channel・アフィリエイト報酬を通じてレベニューポイントを受け取ります。
        </p>
        <p>
          レベニューポイントはコンテンツの購入およびユーザーへの送金には使用できません。
        </p>
        <p>
          レベニューポイントの付与・管理・出金に関する詳細条件は、当社が別途定めるクリエイター向けガイドラインに従います。
        </p>
      </div>
    ),
  },
  {
    id: 'refund',
    number: '6',
    title: '料金・返金に関する方針',
    content: (
      <>
        <div className="mb-4 border-l-2 border-neutral-700 pl-4">
          <p className="text-sm leading-relaxed text-neutral-500">
            以下はすべて返金不可です。購入・消費の前に必ずご確認ください。この条件は消費者契約法第8条に基づき、当社の故意または重大な過失による場合を除き有効です。
          </p>
        </div>
        <ul className="mb-4 space-y-2 text-neutral-400">
          {[
            'ポイントの購入',
            'DropおよびChannelへのポイント消費（アンロック後の返金を含む）',
            'Premium Planの月額・年額料金（解約後の残存期間分を含む）',
            '有効期限切れによるポイントの失効',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="shrink-0 text-neutral-600">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="leading-relaxed text-neutral-400">
          Apple・Googleのストアポリシーに基づく返金申請は、それぞれのプラットフォームの定める手続きに従ってください。当社はプラットフォームの返金決定に関与できません。
        </p>
      </>
    ),
  },
  {
    id: 'copyright',
    number: '7',
    title: 'コンテンツの著作権・所有権',
    content: (
      <div className="space-y-3 leading-relaxed text-neutral-400">
        <p>
          クリエイターが本サービス上で投稿・販売するコンテンツの著作権は、クリエイター本人に帰属します。
        </p>
        <p>
          クリエイターは当社に対し、本サービスの提供・運営・改善・プロモーションに必要な範囲で、コンテンツを無償・非独占的・サブライセンス可能な形で利用することを許諾するものとします。
        </p>
        <p>
          本サービスのUI・ロゴ・デザイン・ソフトウェアに関する知的財産権は当社に帰属します。無断での複製・転用・改変を禁止します。
        </p>
      </div>
    ),
  },
  {
    id: 'protection',
    number: '8',
    title: 'コンテンツ保護・技術的制限',
    content: (
      <>
        <p className="mb-4 leading-relaxed text-neutral-400">
          有料コンテンツはアプリ内での閲覧のみを目的として提供されます。以下の行為は技術的に制限されており、かつ本規約上も明示的に禁止します。
        </p>
        <ul className="mb-4 space-y-2 text-neutral-400">
          {[
            'コンテンツのダウンロード・ローカル保存',
            '第三者への転送・共有・転載・二次配布',
            'スクリーンショット・画面録画による複製（検知時は即座にブラックアウト処理を実施）',
            '保護機能の回避・迂回を目的としたツール・手段の使用',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="shrink-0 text-neutral-600">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="leading-relaxed text-neutral-400">
          上記の禁止行為が確認された場合、当社はアカウントの停止・コンテンツの削除・法的措置を取ることができます。
        </p>
      </>
    ),
  },
  {
    id: 'prohibited',
    number: '9',
    title: '禁止事項',
    content: (
      <>
        <p className="mb-4 leading-relaxed text-neutral-400">
          ユーザーは、本サービスにおいて以下の行為を行ってはなりません。
        </p>
        <ul className="space-y-2 text-neutral-400">
          {[
            '法令・公序良俗に違反する行為',
            '他のユーザー・第三者の権利（著作権・肖像権・プライバシー権等）を侵害する行為',
            '虚偽・誤解を招く情報の提供',
            '複数アカウントの作成・運用',
            '本サービスのシステムへの不正アクセス・妨害・リバースエンジニアリング',
            '招待コード・招待リンクの不正取得・転売・悪用',
            'アフィリエイト報酬を目的とした自己招待・架空アカウントの作成',
            'スパム・嫌がらせ・差別的言動',
            '当社が不適切と判断するその他の行為',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="shrink-0 text-neutral-600">—</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'creator-responsibility',
    number: '10',
    title: 'クリエイターの責任・義務',
    content: (
      <div className="space-y-3 leading-relaxed text-neutral-400">
        <p>
          クリエイターは、提供するコンテンツの内容・品質・適法性について自己責任を負います。当社はコンテンツの内容を保証せず、それに起因するトラブル・紛争について責任を負いません。
        </p>
        <p>
          クリエイターは、第三者の著作権・肖像権・プライバシー権その他の権利を侵害するコンテンツを提供してはなりません。権利侵害が確認された場合、当社は該当コンテンツを削除し、アカウントを停止することができます。
        </p>
        <p>
          クリエイターが本規約に違反したことにより当社または第三者に損害が生じた場合、クリエイターはその損害を賠償する責任を負います。
        </p>
      </div>
    ),
  },
  {
    id: 'suspension',
    number: '11',
    title: 'アカウントの停止・利用制限',
    content: (
      <>
        <p className="mb-4 leading-relaxed text-neutral-400">
          当社は、ユーザーが本規約に違反した場合または違反が疑われる合理的な理由がある場合、事前通知なしに以下の措置を取ることができます。
        </p>
        <ul className="mb-4 space-y-2 text-neutral-400">
          {[
            'コンテンツの削除または非公開化',
            'アカウントの一時停止または永久停止',
            '未確定のレベニューポイントの保留または没収',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="shrink-0 text-neutral-600">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="leading-relaxed text-neutral-400">
          これらの措置によってユーザーに生じた損害について、当社は法令上免責が認められる範囲で責任を負いません。
        </p>
      </>
    ),
  },
  {
    id: 'service-changes',
    number: '12',
    title: 'サービスの変更・停止',
    content: (
      <div className="space-y-3 leading-relaxed text-neutral-400">
        <p>
          当社は、ユーザーへの事前通知をもって、本サービスの内容を変更・追加・廃止することができます。ただし、緊急性がある場合は事前通知なく変更・停止を行うことがあります。
        </p>
        <p>
          本サービスの変更・停止によってユーザーに生じた損害について、当社は法令上免責が認められる範囲で責任を負いません。
        </p>
      </div>
    ),
  },
  {
    id: 'disclaimer',
    number: '13',
    title: '免責事項',
    content: (
      <div className="space-y-3 leading-relaxed text-neutral-400">
        <p>
          当社は、本サービスの完全性・正確性・継続性・特定目的への適合性を保証しません。
        </p>
        <p>
          ユーザー間のトラブル（コンテンツの品質・内容・取引に関する紛争を含む）について、当社は原則として関与する義務を負わず、責任を負いません。
        </p>
        <p>
          当社に損害賠償責任が生じる場合であっても、その賠償額は当該ユーザーが直近3ヶ月間に当社へ支払った金額を上限とします。ただし、当社の故意または重大な過失による損害についてはこの限りではありません（消費者契約法第8条に基づく）。
        </p>
        <p>
          本サービスは現状有姿で提供されます。当社は、明示・黙示を問わず、いかなる保証も行いません。
        </p>
      </div>
    ),
  },
  {
    id: 'revision',
    number: '14',
    title: '規約の変更',
    content: (
      <div className="space-y-3 leading-relaxed text-neutral-400">
        <p>
          当社は、法令の改正・サービス内容の変更・その他必要に応じて本規約を変更することができます。
        </p>
        <p>
          変更後の規約は、本サービス上への掲載をもって効力を生じます。重要な変更については、掲載日の14日前までに本サービス上またはアプリ内通知にて告知します。
        </p>
        <p>
          変更後も本サービスを継続して利用した場合、改定後の規約に同意したものとみなします。
        </p>
      </div>
    ),
  },
  {
    id: 'severability',
    number: '15',
    title: '分離可能性',
    content: (
      <p className="leading-relaxed text-neutral-400">
        本規約のいずれかの条項が法令または確定判決により無効とされた場合であっても、その他の条項は引き続き有効に存続します。
      </p>
    ),
  },
  {
    id: 'jurisdiction',
    number: '16',
    title: '準拠法・裁判管轄',
    content: (
      <div className="space-y-3 leading-relaxed text-neutral-400">
        <p>本規約は日本法に準拠し、日本法に従って解釈されます。</p>
        <p>
          本規約または本サービスに関して生じた紛争については、訴額に応じて東京地方裁判所または東京簡易裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      </div>
    ),
  },
  {
    id: 'contact',
    number: '17',
    title: 'お問い合わせ・事業者情報',
    content: (
      <>
        <p className="mb-6 leading-relaxed text-neutral-400">
          本規約に関するお問い合わせは、以下までご連絡ください。
        </p>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-neutral-800">
              {[
                ['会社名', '株式会社KIVO'],
                ['代表者', 'Arima Yoshiki'],
                [
                  '所在地',
                  '〒160-0023 東京都新宿区西新宿３丁目２−９ 新宿ワシントンビル本館 2F',
                ],
                ['メール', 'cs@kivo.talk'],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="w-28 shrink-0 px-5 py-4 text-neutral-500">
                    {label}
                  </td>
                  <td className="px-5 py-4 text-neutral-400">
                    {label === 'メール' ? (
                      <a
                        href={`mailto:${value}`}
                        className="text-neutral-200 underline underline-offset-2 transition-colors hover:text-[#F07820]"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] py-25 md:py-30">
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* Header */}
        <div className="mb-16 border-b border-neutral-800 pb-10">
          <p className="mb-4 text-xs tracking-widest text-neutral-600 uppercase">
            KIVO App / kivo.talk
          </p>
          <h1 className="mb-4 text-4xl font-medium tracking-tight text-white">
            利用規約
          </h1>
          <p className="text-sm text-neutral-600">
            制定日：2026年3月　最終更新：2026年3月
          </p>
        </div>

        {/* Scope notice */}
        <div className="mb-8 border-l-2 border-neutral-700 pl-4">
          <p className="text-sm leading-relaxed text-neutral-500">
            本規約は、株式会社KIVOが運営するウェブサイト{' '}
            <span className="font-medium text-neutral-300">kivo.talk</span>{' '}
            および{' '}
            <span className="font-medium text-neutral-300">
              KIVO App（iOS/Android）
            </span>
            を含む全サービスに適用されます。本サービスを利用する前に必ずお読みください。本サービスの利用をもって、本規約への同意とみなします。
          </p>
        </div>

        {/* Legal basis */}
        <div className="mb-12 rounded-lg bg-neutral-900 px-5 py-4">
          <p className="mb-2 text-xs tracking-widest text-neutral-600 uppercase">
            法的根拠
          </p>
          <p className="text-xs leading-relaxed text-neutral-500">
            消費者契約法 / 特定商取引法 / 個人情報保護法 / 不正競争防止法 /
            著作権法
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-14">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <div className="mb-6 flex items-baseline gap-4 border-b border-neutral-800 pb-4">
                <span className="text-xs font-medium tracking-widest text-[#F07820]">
                  {section.number.padStart(2, '0')}
                </span>
                <h2 className="text-lg font-medium text-neutral-100">
                  {section.title}
                </h2>
              </div>
              {section.content}
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-neutral-800 pt-8">
          <p className="text-sm text-neutral-600">
            株式会社KIVO　制定日：2026年3月
          </p>
        </div>
      </div>
    </main>
  );
}
