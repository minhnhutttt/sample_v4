import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | KIVO',
  description:
    '株式会社KIVOが運営するkivo.talkウェブサイトにおけるプライバシーポリシーです。',
};

const sections = [
  {
    id: 'collection',
    number: '1',
    title: '収集する情報',
    content: (
      <>
        <p className="mb-6 leading-relaxed text-neutral-400">
          株式会社KIVO（以下「当社」）は、本ウェブサイト
          kivo.talk（以下「本サイト」）において、以下の情報を収集することがあります。
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-base font-medium text-neutral-200">
              （1）利用者が直接提供する情報
            </h3>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-neutral-600">—</span>
                お問い合わせフォームに入力された氏名、メールアドレス、お問い合わせ内容
              </li>
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-neutral-600">—</span>
                パートナーシップ申請フォームに入力された情報
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-base font-medium text-neutral-200">
              （2）自動的に収集される情報
            </h3>
            <ul className="space-y-2 text-neutral-400">
              {[
                'IPアドレス',
                'ブラウザの種類・バージョン、OS情報',
                '本サイトへのアクセス日時、閲覧ページ、参照元URL',
                'Cookie等の識別子（詳細は第5条参照）',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 shrink-0 text-neutral-600">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'purpose',
    number: '2',
    title: '利用目的',
    content: (
      <>
        <p className="mb-4 leading-relaxed text-neutral-400">
          収集した情報は、以下の目的のために利用します。
        </p>
        <ul className="space-y-2 text-neutral-400">
          {[
            'お問い合わせ・申請への対応',
            '本サイトの運営・改善・利用状況の分析',
            'サービスに関する重要なお知らせの送付',
            '不正アクセス・スパムの検知・防止',
            '法令・規制への対応',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 shrink-0 text-neutral-600">—</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'third-party',
    number: '3',
    title: '第三者への提供',
    content: (
      <>
        <p className="mb-4 leading-relaxed text-neutral-400">
          当社は、以下の場合を除き、利用者の個人情報を第三者に提供しません。
        </p>
        <ul className="space-y-2 text-neutral-400">
          {[
            '利用者本人の同意がある場合',
            '法令に基づく場合',
            '人の生命・身体・財産の保護のために必要であり、本人の同意を得ることが困難な場合',
            '業務委託先に対して、業務の遂行に必要な範囲内で提供する場合（この場合、当社は委託先を適切に監督します）',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 shrink-0 text-neutral-600">—</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'security',
    number: '4',
    title: '安全管理措置',
    content: (
      <p className="leading-relaxed text-neutral-400">
        当社は、収集した個人情報の漏洩・滅失・毀損・不正アクセスを防止するため、適切な安全管理措置を講じます。
      </p>
    ),
  },
  {
    id: 'cookie',
    number: '5',
    title: 'Cookieおよびアクセス解析',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-base font-medium text-neutral-200">
            Cookieの使用
          </h3>
          <p className="leading-relaxed text-neutral-400">
            本サイトでは、利用状況の把握および利便性向上のためにCookieを使用しています。ブラウザの設定によりCookieを無効にすることができますが、一部の機能が正常に動作しない場合があります。
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-base font-medium text-neutral-200">
            アクセス解析ツール
          </h3>
          <p className="mb-4 leading-relaxed text-neutral-400">
            本サイトでは、Google
            Analyticsおよびその他のアクセス解析ツールを使用しています。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。各ツールのプライバシーポリシーについては、各提供会社のウェブサイトをご確認ください。
          </p>
          <p className="leading-relaxed text-neutral-400">
            Google Analyticsのデータ収集を無効にしたい場合は、
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-200 underline underline-offset-2 transition-colors hover:text-[#F07820]"
            >
              Google アナリティクス オプトアウト アドオン
            </a>
            をご利用ください。
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'retention',
    number: '6',
    title: '保持期間',
    content: (
      <>
        <p className="mb-6 leading-relaxed text-neutral-400">
          当社は、利用目的の達成に必要な期間に限り個人情報を保持します。
        </p>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-900">
                <th className="w-48 px-5 py-3 text-left font-medium text-neutral-500">
                  情報の種類
                </th>
                <th className="px-5 py-3 text-left font-medium text-neutral-500">
                  保持期間
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {[
                ['お問い合わせデータ', '対応完了後1年間'],
                ['アクセスログ', '取得後90日間'],
                ['Cookie', '各Cookieの設定による（セッションまたは最長1年）'],
              ].map(([type, period]) => (
                <tr key={type}>
                  <td className="px-5 py-4 text-neutral-500">{type}</td>
                  <td className="px-5 py-4 text-neutral-400">{period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: 'rights',
    number: '7',
    title: '利用者の権利',
    content: (
      <>
        <p className="mb-4 leading-relaxed text-neutral-400">
          利用者は、当社が保有する自己の個人情報について、以下の請求を行うことができます。
        </p>
        <ul className="mb-4 space-y-2 text-neutral-400">
          {['開示の請求', '訂正・追加・削除の請求', '利用停止・消去の請求'].map(
            (item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 shrink-0 text-neutral-600">—</span>
                {item}
              </li>
            ),
          )}
        </ul>
        <p className="leading-relaxed text-neutral-400">
          請求は第9条のお問い合わせ先までご連絡ください。合理的な範囲で速やかに対応いたします。
        </p>
      </>
    ),
  },
  {
    id: 'revision',
    number: '8',
    title: '本ポリシーの改定',
    content: (
      <p className="leading-relaxed text-neutral-400">
        当社は、法令の改正またはサービス内容の変更に伴い、本ポリシーを改定することがあります。重要な変更が生じた場合は、本サイト上に改定日と変更内容を掲載し、掲載日から効力を生じるものとします。
      </p>
    ),
  },
  {
    id: 'contact',
    number: '9',
    title: 'お問い合わせ・事業者情報',
    content: (
      <>
        <p className="mb-6 leading-relaxed text-neutral-400">
          本ポリシーに関するお問い合わせは、以下までご連絡ください。
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

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] py-25 md:py-30">
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* Header */}
        <div className="mb-16 border-b border-neutral-800 pb-10">
          <p className="mb-4 text-xs tracking-widest text-neutral-600 uppercase">
            kivo.talk — Website
          </p>
          <h1 className="mb-4 text-4xl font-medium tracking-tight text-white">
            プライバシーポリシー
          </h1>
          <p className="text-sm text-neutral-600">
            制定日：2026年3月　最終更新：2026年3月
          </p>
        </div>

        {/* App policy notice */}
        <div className="mb-12 border-l-2 border-neutral-700 pl-4">
          <p className="text-sm leading-relaxed text-neutral-500">
            本ポリシーは{' '}
            <span className="font-medium text-neutral-300">
              kivo.talk（本ウェブサイト）
            </span>{' '}
            に適用されます。KIVOネイティブアプリに関するプライバシーポリシーは、アプリ内からご確認いただけます。
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
