import AnnouncementsHead from '../components/announcementsHead';
import { AnnouncementsItem } from '../components/announcementsItems';

const AnnouncementsDetail = () => {
  const data = [
    {
      href: '/announcements/id',
      image: '/assets/images/icon.png',
      tags: ['使い方'],
      date: '2026年3月23日',
      title: 'Channelの始め方：チャンネル開設とはじめての投稿',
    },
    {
      href: '/announcements/id',
      image: '/assets/images/icon.png',
      tags: ['使い方'],
      date: '2026年3月22日',
      title: 'Dropの作り方：単品コンテンツを販売するまでの手順',
    },
    {
      href: '/announcements/id',
      image: '/assets/images/icon.png',
      tags: ['アップデート'],
      date: '2026年3月20日',
      title: 'Drop機能の開発が完了：TestFlight版で提供開始',
    },
  ];
  return (
    <div className="bg-[#FAF2E8]">
      <div className="px-5 pt-28 md:pt-33.5">
        <AnnouncementsHead />
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mt-3 flex items-center gap-3 md:mt-5">
            <p className="flex h-[30px] items-center justify-center rounded-2xl border border-black px-2 text-[14px] md:h-[34px] md:px-3">
              コーポレート
            </p>
            <p className="text-[14px]">2026年2月3日</p>
          </div>
          <div className="my-5 leading-none font-bold md:text-[80px]">
            契約型経済とは何か——
            <br />
            KIVOが目指す世界
          </div>
          <p className="py-5 text-[15px] md:text-[20px]">
            Last updated: November 13, 2025
          </p>
          <div className="my-[90px] flex justify-center">
            <div className="relative mt-[30px] flex w-full flex-col gap-y-[50px] md:mt-0 md:max-w-[1024px]">
              <figure>
                <img
                  src="/assets/images/announcements-01.png"
                  alt=""
                  className="w-full rounded-lg"
                />
              </figure>
              <div className="space-y-10">
                <div>
                  <p className="text-[16px] font-bold md:text-[18px]">
                    情報は、今日も無料で消費されている
                  </p>
                  <p className="mt-4 text-[14px] md:text-[16px]">
                    あなたが数時間かけて作ったコンテンツが、数秒でスクリーンショットを撮られ、別のグループに転送される。
                    <br />
                    有料で配布した資料が、見知らぬSNSアカウントに無断で転載される。
                    <br />
                    フォロワーは増えているのに、収益が伴わない。
                    <br />
                    これは、特定のプラットフォームの問題ではない。現在のインターネットの構造的な問題である。
                  </p>
                </div>
                <div>
                  <p className="text-[16px] font-bold md:text-[18px]">
                    なぜ情報は無料で消費されるのか
                  </p>
                  <p className="mt-4 text-[14px] md:text-[16px]">
                    SNSは「拡散」を前提に設計されている。広告モデルで収益を得るプラットフォームにとって、情報が広がれば広がるほど都合がいい。
                    <br />
                    その結果、情報を生み出した人間が報われない構造が生まれた。
                    <br />
                    AIの進化はこの問題をさらに加速させる。情報の生成コストはほぼゼロになった。しかし、情報の価値が確定する仕組みは、何も変わっていない。
                  </p>
                </div>
                <div>
                  <p className="text-[16px] font-bold md:text-[18px]">
                    「契約型経済」という考え方
                  </p>
                  <p className="mt-4 text-[14px] md:text-[16px]">
                    KIVOは、この問題に対して一つの答えを提示する。
                    <br />
                    それが「契約型経済」という概念だ。
                    <br />
                    契約型経済とは、個人と個人が直接契約することで価値交換が成立する経済圏のことを指す。プラットフォームや広告主が介在するのではなく、情報の送り手と受け手が直接合意し、支払いによってその価値を確定させる。
                    <br />
                    現在のデジタル市場は、企業主導型モデルか広告最適化モデルのどちらかに依存している。両者に共通するのは、個人と個人が直接契約する構造が存在しないことだ。
                    <br />
                    KIVOはその空白を埋める。
                  </p>
                </div>
                <div>
                  <p className="text-[16px] font-bold md:text-[18px]">
                    KIVOが実装する3つの契約
                  </p>
                  <p className="mt-4 text-[14px] md:text-[16px]">
                    KIVOでは、すべての価値交換が「契約」として設計されている。
                    <br />
                    <br />
                    Drop（単体契約）
                    <br />
                    一度支払えば、永続的に閲覧できる。単品コンテンツへのアクセス権を、支払いによって確定させる。
                    <br />
                    <br />
                    Channel（継続契約）
                    <br />
                    月額ポイントによるサブスクリプション型。クリエイターとの継続的な関係に対して、定期的に対価を支払う。
                    <br />
                    <br />
                    Chat（合意契約）
                    <br />
                    双方向のコミュニケーションは、合意が成立した場合のみ成立する。招待制により、関係の質が担保される。
                  </p>
                </div>
                <div>
                  <p className="text-[16px] font-bold md:text-[18px]">
                    「拡散しない」ことが価値になる
                  </p>
                  <p className="mt-4 text-[14px] md:text-[16px]">
                    拡散型SNSでは、情報が広がることが価値とされてきた。
                    <br />
                    KIVOはその前提を逆転させる。
                    <br />
                    <br />
                    広がらないから、希少である。希少だから、価値がある。
                    <br />
                    <br />
                    ダウンロード不可、転送不可、スクリーンショット制御——これらは制約ではなく、価値を守るための設計だ。
                    <br />
                    情報はアプリの外に出た瞬間に壊れる。だからKIVOは、外に出さない設計をした。
                  </p>
                </div>
                <div>
                  <p className="text-[16px] font-bold md:text-[18px]">
                    KIVOが目指す世界
                  </p>
                  <p className="mt-4 text-[14px] md:text-[16px]">
                    PoCフェーズで「価値は発生するか」を証明し、MVPで「支払いによって価値が確定するか」を確認し、Productionで「情報の価値化を社会インフラにする」。
                    <br />
                    SNSの進化形ではない。SNSが行けない方向に、最初から立っている。
                    <br />
                    情報価値が確定する世界のインフラを、KIVOは取りに行く。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f78629] px-5">
        <div className="mx-auto w-full max-w-[1400px] py-28">
          <h4 className="text-[20px] font-bold text-white md:text-[80px]">
            もっと詳しく知りたいですか？
            <br />
            お問い合わせください
          </h4>
          <div className="pt-15">
            <div className="grid gap-10 md:grid-cols-3 lg:gap-20">
              {data.map((item, i) => (
                <AnnouncementsItem
                  href={item.href}
                  image={item.image}
                  tags={item.tags}
                  date={item.date}
                  title={item.title}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsDetail;
