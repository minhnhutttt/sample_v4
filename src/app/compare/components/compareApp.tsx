'use client';

import { ReactNode, useState } from 'react';

type CompareTable = {
  label: string;
  status: 'check' | 'note' | null;
};
type CompareHowto = {
  number: string;
  text: ReactNode;
};
type ComparePanelType = {
  title: ReactNode;
  content: ReactNode;
  logo: string;
  table: CompareTable[];
  note?: ReactNode;
  howto: CompareHowto[];
};

const ComparePanel = ({
  title,
  content,
  logo,
  table,
  note,
  howto,
}: ComparePanelType) => {
  return (
    <div className="animate-[fadeUp_0.5s_linear]">
      <div className="py-10 md:py-16">
        <h3 className="text-[20px] font-bold md:text-[28px]">{title}</h3>
        <p className="mt-5 text-[16px] md:mt-7 md:text-[20px]">{content}</p>
      </div>
      <div className="relative divide-y divide-[#9C9C9C]">
        <div className="flex divide-x divide-[#9C9C9C]">
          <div className="flex w-[400px] items-center px-2.5 py-6 text-[18px] font-bold md:w-[500px] md:px-5 md:py-8 md:text-[24px]">
            できること
          </div>
          <div className="flex w-[330px] items-center justify-center p-2.5 md:p-5">
            <img src="/assets/images/kivo-talk-02.png" alt="" />
          </div>
          <div className="relative flex w-[330px] items-center justify-center p-2.5 md:p-5">
            <img src={logo} alt="" />
            <div className="absolute inset-0 w-full bg-black/20"></div>
          </div>
        </div>
        {table.map((item, i) => (
          <div className="flex divide-x divide-[#9C9C9C]" key={i}>
            <div className="flex w-[400px] items-center px-2.5 py-4 text-[14px] md:w-[500px] md:px-5 md:py-6 md:text-[20px]">
              {item.label}
            </div>
            <div className="font-rock-salt flex w-[330px] items-center justify-center p-2.5 text-[24px] text-[#F98528] md:p-5 md:text-[32px]">
              ✔︎
            </div>
            <div className="font-rock-salt relative flex w-[330px] items-center justify-center p-2.5 text-[24px] text-[#F98528] md:p-5 md:text-[32px]">
              <div className="absolute inset-0 w-full bg-black/20"></div>
              {item.status === 'check' && '✔︎'}
              {item.status === 'note' && (
                <p className="flex gap-1">
                  <img src="/assets/images/compare-tri.svg" alt="" />
                  <span className="text-[20px] text-[#555555] md:text-[28px]">
                    ※
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}

        {note && (
          <p className="pt-4 text-[14px] md:pt-6 md:text-[16px]">{note}</p>
        )}
      </div>
      <div className="pt-25 md:pt-[168px]">
        <p className="text-[20px] font-bold md:text-[28px]">
          KIVOを使うと、こう変わる。
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-6 md:mt-10 md:gap-10">
          {howto.map((item) => (
            <div
              className="border-b-3 border-[#F98528] pb-5 md:w-[360px]"
              key={item.number}
            >
              <p className="font-anton u-text-stroke text-center text-[60px] md:text-[120px]">
                {item.number}
              </p>
              <p className="mt-3 text-[16px] font-medium md:mt-6 md:text-[20px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const CompareApp = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="bg-[#FFF8F2] px-5 pt-20 pb-25 md:pt-[120px] md:pb-[180px]">
      <div className="relative mx-auto flex min-h-[200px] w-full max-w-[1180px] items-center justify-center px-6 md:px-10">
        <span className="absolute top-0 left-0">
          <img
            className="max-md:w-8"
            src="/assets/images/compare-title.png"
            alt=""
          />
        </span>
        <span className="absolute bottom-0 left-0 rotate-270">
          <img
            className="max-md:w-8"
            src="/assets/images/compare-title.png"
            alt=""
          />
        </span>
        <h2 className="text-center text-[24px] font-bold md:text-[40px]">
          クリエイターが他のツールで感じてきた「もどかしさ」に、KIVO
          TALKはひとつひとつ答えを持っています。
        </h2>
        <span className="absolute top-0 right-0 rotate-90">
          <img
            className="max-md:w-8"
            src="/assets/images/compare-title.png"
            alt=""
          />
        </span>
        <span className="absolute right-0 bottom-0 rotate-180">
          <img
            className="max-md:w-8"
            src="/assets/images/compare-title.png"
            alt=""
          />
        </span>
      </div>
      <div className="mt-10 md:mt-16">
        <div className="relative bg-[#FFF8F2]">
          <p className="font-anton absolute inset-x-0 bottom-0 text-center leading-none text-[#242424] opacity-[0.16] mix-blend-color-burn md:text-[183px]">
            KIVO&apos;s STRENGTHS
          </p>
          <div
            className={`relative mx-auto w-full max-w-[1160px] border-b-2 pt-12 pb-5 ${tab === 0 && 'border-[#00CD43]'} ${tab === 1 && 'border-[#C81EBB]'} ${tab === 2 && 'border-[#242424]'} ${tab === 3 && 'border-[#5665FA]'} ${tab === 4 && 'border-[#59BDE8]'}`}
          >
            <p className="text-center text-[14px] text-[#444] md:text-[16px]">
              比較したいサービスを選択してください。
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-5 text-[14px] font-bold md:text-[18px]">
              <button
                onClick={() => setTab(0)}
                className={`flex h-10 w-[150px] items-center justify-center rounded-md border-2 border-[#00CD43] md:h-[56px] md:w-[170px] [&.active]:bg-[#00CD43] [&.active]:text-white ${tab === 0 && 'active'}`}
              >
                LINE
              </button>
              <button
                onClick={() => setTab(1)}
                className={`flex h-10 w-[150px] items-center justify-center rounded-md bg-[url(/assets/images/frame-instagram.png)] bg-[size:100%_100%] md:h-[56px] md:w-[170px] [&.active]:bg-[linear-gradient(90deg,_#4464CF_0%,_#C51CBF_50%,_#FF4457_100%)] [&.active]:text-white ${tab === 1 && 'active'}`}
              >
                Instagram
              </button>
              <button
                onClick={() => setTab(2)}
                className={`flex h-10 w-[150px] items-center justify-center rounded-md border-2 border-[#242424] md:h-[56px] md:w-[170px] [&.active]:bg-[#242424] [&.active]:text-white ${tab === 2 && 'active'}`}
              >
                note
              </button>
              <button
                onClick={() => setTab(3)}
                className={`flex h-10 w-[150px] items-center justify-center rounded-md border-2 border-[#5665FA] md:h-[56px] md:w-[170px] [&.active]:bg-[#5665FA] [&.active]:text-white ${tab === 3 && 'active'}`}
              >
                Discord
              </button>
              <button
                onClick={() => setTab(4)}
                className={`flex h-10 w-[150px] items-center justify-center rounded-md border-2 border-[#59BDE8] md:h-[56px] md:w-[170px] [&.active]:bg-[#59BDE8] [&.active]:text-white ${tab === 4 && 'active'}`}
              >
                Fanbox
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1160px]">
          {tab === 0 && (
            <ComparePanel
              title={
                <>
                  LINEと同じように繋がれる。
                  <br />
                  KIVOでは、そのつながりが収益になる。
                </>
              }
              content={
                <>
                  DM、グループ、チャンネル——KIVOはLINEと同じようにファンと繋がれます。違いは、その会話の中でコンテンツに価格をつけて届けられること。そして、届けたコンテンツが守られること。
                </>
              }
              logo="/assets/images/compare-line.png"
              table={[
                {
                  label: 'DM・グループ・チャンネルで繋がる',
                  status: 'check',
                },
                {
                  label: 'メッセージ内での有料添付',
                  status: null,
                },
                {
                  label: 'コンテンツ保護（スクショ・転送防止）',
                  status: null,
                },
                {
                  label: '有料サブスクリプションチャンネル',
                  status: null,
                },
                {
                  label: 'ファンからの直接課金',
                  status: null,
                },
              ]}
              howto={[
                {
                  number: '01',
                  text: 'LINEで繋がったファンに、そのままコンテンツを売れる',
                },
                {
                  number: '02',
                  text: '届けたコンテンツのスクリーンショットや転送を防止できる',
                },
                {
                  number: '03',
                  text: '有料チャンネルで、毎月の収益を安定させられる',
                },
              ]}
            />
          )}
          {tab === 1 && (
            <ComparePanel
              title={
                <>
                  Instagramと同じようにファンに届けられる。
                  <br />
                  KIVOでは、フォロワー数ではなく関係の質が、収益になる。
                </>
              }
              content={
                <>
                  Instagramでファンにコンテンツを届けているクリエイターは多い。ただし、収益化にはフォロワー1万人以上が必要で、コンテンツを守る手段もありません。KIVOは規模ではなく、ファンとの関係の深さでコンテンツを販売できる設計です。
                </>
              }
              logo="/assets/images/compare-instagram.png"
              table={[
                {
                  label: 'フォロワー数に関係なく収益化できる',
                  status: null,
                },
                {
                  label: 'コンテンツ保護（スクショ・転送防止）',
                  status: null,
                },
                {
                  label: 'メッセージ内での有料添付',
                  status: null,
                },
                {
                  label: '単品コンテンツ販売（都度課金）',
                  status: null,
                },
                {
                  label: '招待制・クローズドな空間設計',
                  status: null,
                },
              ]}
              howto={[
                {
                  number: '01',
                  text: 'フォロワーが少なくても、深く繋がったファンに届けて収益化できる',
                },
                {
                  number: '02',
                  text: '届けたコンテンツのスクリーンショットや転送を防止できる',
                },
                {
                  number: '03',
                  text: 'メッセージに価格をつけて、限定コンテンツを直接届けられる',
                },
              ]}
            />
          )}
          {tab === 2 && (
            <ComparePanel
              title={
                <>
                  noteと同じようにコンテンツを販売できる。
                  <br />
                  KIVOでは、届けたコンテンツが守られる。
                </>
              }
              content={
                <>
                  noteで有料コンテンツを販売しているクリエイターは多い。ただし、購入後の流出を防ぐ手段がありません。KIVOは、コンテンツの価値が購入後も守られます。
                </>
              }
              logo="/assets/images/compare-note.png"
              table={[
                {
                  label: 'コンテンツを販売する',
                  status: 'check',
                },
                {
                  label: 'コンテンツ保護（スクショ・DL防止）',
                  status: null,
                },
                {
                  label: 'メッセージ内での有料添付',
                  status: null,
                },
                {
                  label: '会話の中でコンテンツを届ける',
                  status: null,
                },
                {
                  label: '招待制・クローズドな空間設計',
                  status: null,
                },
              ]}
              howto={[
                {
                  number: '01',
                  text: '販売したコンテンツが購入後も守られ、流出しない',
                },
                {
                  number: '02',
                  text: '記事として公開するのではなく、会話の中で届けられる',
                },
                {
                  number: '03',
                  text: '招待した人だけのクローズドな空間で配信できる',
                },
              ]}
            />
          )}
          {tab === 3 && (
            <ComparePanel
              title={
                <>
                  Discordと同じようにコミュニティを作れる。
                  <br />
                  KIVOでは、日本にいながら、その場で直接販売。
                </>
              }
              content={
                <>
                  コミュニティを作る力はDiscordも優れています。ただし、コンテンツへの直接課金の仕組みは日本では使えません。また、スクリーンショットや転送を防ぐ
                  コンテンツ保護の仕組みは存在しません。KIVOなら、コミュニティの中でそのまま収益を生み出せます。
                </>
              }
              logo="/assets/images/compare-discord.png"
              table={[
                {
                  label: 'ファンコミュニティを運営する',
                  status: 'check',
                },
                {
                  label: 'メッセージ内での有料添付',
                  status: null,
                },
                {
                  label: 'コンテンツ保護（スクショ・転送防止）',
                  status: null,
                },
                {
                  label: '有料チャンネルを日本で開設する',
                  status: 'note',
                },
                {
                  label: 'ファンからの直接課金',
                  status: 'note',
                },
              ]}
              note="※Discordのサーバーサブスクリプションは招待リンクがあれば誰でも入室できる設計のため、クローズド運用はリンク管理に依存します。また2026年現在、日本では利用できません。"
              howto={[
                {
                  number: '01',
                  text: 'コミュニティの中で、直接コンテンツを売れる',
                },
                {
                  number: '02',
                  text: 'メッセージに価格をつけて、限定コンテンツを届けられる',
                },
                {
                  number: '03',
                  text: '日本でいま、すぐに有料チャンネルを開設できる',
                },
              ]}
            />
          )}
          {tab === 4 && (
            <ComparePanel
              title={
                <>
                  Fanboxと同じように、ファンに応援される。
                  <br />
                  KIVOでは、その応援の純度が、色褪せない。
                </>
              }
              content={
                <>
                  継続的なサポートを受けるならFanboxも有効です。ただし、コンテンツは流出リスクにさらされ、価格は月額一律に限られます。KIVOは保護された状態で届けられ、1コンテンツ単位で価格を設定できます。
                </>
              }
              logo="/assets/images/compare-fanbox.png"
              table={[
                {
                  label: 'ファンからの継続的なサポートを受ける',
                  status: 'check',
                },
                {
                  label: 'コンテンツ保護（スクショ・DL防止）',
                  status: null,
                },
                {
                  label: '単品コンテンツ販売（都度課金）',
                  status: null,
                },
                {
                  label: 'メッセージ内での有料添付',
                  status: null,
                },
                {
                  label: '招待制・クローズドな空間設計',
                  status: null,
                },
              ]}
              howto={[
                {
                  number: '01',
                  text: '月額だけでなく、1コンテンツごとに価格を決められる',
                },
                {
                  number: '02',
                  text: 'メッセージで特別なコンテンツを届け、価格をつけられる',
                },
                {
                  number: '03',
                  text: '届けたコンテンツが、その後も守られる',
                },
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CompareApp;
