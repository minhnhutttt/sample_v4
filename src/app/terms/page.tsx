import type { Metadata } from 'next';

import Title from '@/components/common/Title';
import { OG, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Terms',
  openGraph: {
    ...OG,
    title: 'Terms',
    url: '/terms',
  },
  twitter: {
    ...TWITTER,
    title: 'Terms',
  },
  alternates: {
    canonical: '/terms',
  },
};

const TermsPage = () => {
  return (
    <div className="px-5 pt-32 pb-32 md:pt-[240px] md:pb-40">
      <div id="section05" className="mx-auto w-full max-w-[1320px]">
        <Title title="terms of service" sub="利用規約" />
        <div className="mt-16 md:mt-25">
          <div className="mx-auto w-full max-w-[900px]">
            <p className="">
              制定日: 2019年10月10日
              <br />
              改定日: 2026年3月13日
              <br />
              株式会社マッシヴドライヴ
            </p>
            <div className="">
              <div className="mt-16 md:mt-[90px]">
                <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
                  利用規約
                </h2>
                <div className="mt-7 text-[14px] md:mt-[50px] md:text-[16px]">
                  <p>
                    株式会社マッシヴドライヴ（以下「当クラブ」といいます。）の公式WEBサイト（以下「本サイト」といいます。）は、以下に定める利用規約（以下「本利用規約」といいます。）に従ってご利用いただくことを条件として、当クラブが運営・提供しています。本サイト利用者が本サイトにアクセスしてこれを利用した場合には、本利用規約にご同意いただいたものとみなします。
                  </p>
                </div>
              </div>
              <div className="mt-16 md:mt-[90px]">
                <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
                  本サイト上のコンテンツの提供及び免責事項について
                </h2>
                <div className="mt-7 text-[14px] md:mt-[50px] md:text-[16px]">
                  <p>
                    当クラブは、予告なく、本サイト上のコンテンツを変更・削除、本サイトの運営・提供を中断・中止することがあります。当クラブは、本サイト上のコンテンツの提供の遅延又は本サイトの運営の中断・中止が発生したとしても、これに起因して本サイト利用者又は第三者が被ったいかなる損害についても責任を負わないものとします。
                    <br />
                    当クラブは、本サイトについて、細心の注意を払って運営しています。しかし、当クラブは、本サイト利用者及び第三者に対して、本サイト上のコンテンツに関する適法性、完全性、有用性、信頼性、安全性について何ら保証するものではなく、また、本サイト利用者及び第三者が本サイト及び本サイト上のコンテンツを利用することによって生じるいかなる損害についても責任を負わないものとします。
                  </p>
                </div>
              </div>
              <div className="mt-16 md:mt-[90px]">
                <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
                  著作権について
                </h2>
                <div className="mt-7 text-[14px] md:mt-[50px] md:text-[16px]">
                  <p>
                    本サイトに掲載されている全てのコンテンツに関する権利については、当クラブに帰属するか、あるいはライセンスに基づいて使用されています。本サイトに掲載されている文書・画像・動画等全てのコンテンツについて、当クラブ及びその他の権利保有者の事前の許可なくして、複製、公衆送信その他の利用をすることはできません。
                  </p>
                </div>
              </div>
              <div className="mt-16 md:mt-[90px]">
                <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
                  リンクについて
                </h2>
                <div className="mt-7 text-[14px] md:mt-[50px] md:text-[16px]">
                  <p>
                    本サイトからリンクしているサイト（本サイトを除きます。）は、当クラブの管理下にあるものではありません。また、本サイト利用者がリンク先のサイトをご利用になったことにより、いかなる損害が発生しても、当クラブは一切の責任を負わないものとします。
                    <br />
                    本サイトは基本的にリンクフリーです。可能であればリンクした際にご一報いただけると幸いに存じます。
                  </p>
                </div>
              </div>
              <div className="mt-16 md:mt-[90px]">
                <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
                  本利用規約違反について
                </h2>
                <div className="mt-7 text-[14px] md:mt-[50px] md:text-[16px]">
                  <p>
                    本サイト利用者には、本サイトが当クラブの公式WEBサイトであることを認識し、合法的な目的にのみ利用することに同意していただきます。また、以下の事項に該当する場合には、当クラブは本サイト利用者に対して除名・法的措置をとることがあります。
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      当クラブが定める著作権規定に違反する行為若しくは他者の著作権、商標権等の知的財産権を侵害する行為又はそのおそれのある行為があった場合
                    </li>
                    <li>
                      他人の財産、プライバシー若しくは肖像権を侵害する行為又はそのおそれのある行為があった場合
                    </li>
                    <li>
                      他者を差別若しくは誹謗中傷し、又は他者の名誉若しくは信用を毀損する行為があった場合
                    </li>
                    <li>本サイトの運営を妨害する行為があった場合</li>
                    <li>
                      他社や別の組織などになりすましたり、個人、法人、グループあるいはその他の事業体との関係を故意に詐称した場合
                    </li>
                    <li>意図的に法律違反をした場合</li>
                    <li>
                      上記各項目のいずれかに該当する行為（当該行為を他者が行っている場合を含む）を助長する目的の行為（リンクを張る行為を含む）があった場合
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-16 md:mt-[90px]">
                <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
                  アクセスログについて
                </h2>
                <div className="mt-7 text-[14px] md:mt-[50px] md:text-[16px]">
                  <p>
                    当クラブは、本サイト利用者が使用するIPアドレスを含むアクセスログの記録と保管を行っています。本サイトで記録するアクセスログは、アクセスの統計分析又は本サイトのサーバに問題が生じた場合の診断のために使用します。アクセスの統計分析の結果は、本サイト利用者のアクセス傾向を把握し、今後の本サイトの運営の参考とするために使用します。
                  </p>
                </div>
              </div>
              <div className="mt-16 md:mt-[90px]">
                <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
                  クッキーについて
                </h2>
                <div className="mt-7 text-[14px] md:mt-[50px] md:text-[16px]">
                  <p>
                    本サイトでは、お客様の利便性を向上させるため、クッキー（Cookie）を使用しています。クッキーとは、WEBサイトの提供者が指定する、お客様のアクセス状況や過去にお客様が入力された情報等のデータを、お客様のパソコン内に、自動的に保存しておく仕組みのことをいいます。お客様は、ブラウザやセキュリティソフトの設定により、クッキーを無効にすることができますが、その場合、本サイト内のいくつかのサービスが正常にご利用いただけない場合があります。
                  </p>
                </div>
              </div>
              <div className="mt-16 md:mt-[90px]">
                <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
                  利用者情報の送信について
                </h2>
                <div className="mt-7 space-y-4 text-[14px] md:mt-[50px] md:space-y-6 md:text-[16px]">
                  <p>
                    当クラブは、本サイト利用者の本サイト利用を通して、以下のとおり、本サイト利用者に関する情報を外部送信先に外部送信しています。
                  </p>
                  <div>
                    <p>
                      <strong>1. 外部送信の目的</strong>
                    </p>
                    <p>本サイトの利用状況の分析およびSNSコンテンツの表示</p>
                  </div>
                  <div>
                    <p>
                      <strong>2. 外部送信する情報</strong>
                    </p>
                    <ul className="list-decimal pl-5">
                      <li>本サイトの閲覧履歴</li>
                      <li>
                        本サイト内での行動履歴（クリック、スクロールなどの各種イベント）
                      </li>
                      <li>
                        本サイト利用者、機器を識別する情報（ブラウザ・デバイス識別子、IPアドレス等）
                      </li>
                      <li>本サイト利用機器の位置情報</li>
                      <li>SNS連携による公開プロフィール情報</li>
                    </ul>
                  </div>
                  <div>
                    <p>
                      <strong>3. 外部送信先</strong>
                    </p>
                    <p>
                      当社で取得する個人情報は、以下の目的のために利用いたします。
                      <br />
                      当社のサービスをご利用いただく皆様に関する個人情報
                    </p>
                  </div>
                  <div>
                    <ul className="list-disc pl-5">
                      <li>サービスのご提供およびご案内のため</li>
                      <li>サービスのご利用料金をご請求するため</li>
                      <li>広告配信およびキャンペーン等のご案内のため</li>
                      <li>サービスおよび広告配信をカスタマイズするため</li>
                      <li>ご本人へのご連絡のため</li>
                      <li>キャンペーン等のプレゼントの発送のため</li>
                      <li>サービスの改善や新サービスの開発等に役立てるため</li>
                      <li>利用規約に違反する態様でのご利用を防止するため</li>
                      <li>
                        個人を識別できない形式に加工した統計データを作成するため
                      </li>
                      <li>
                        ふるさと納税の申込受付、寄付金受領証明書の発行、返礼品の発送のため
                      </li>
                      <li>ふるさと納税に関する自治体への情報提供のため</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-16 md:mt-[90px]">
                <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
                  SSLについて
                </h2>
                <div className="mt-7 text-[14px] md:mt-[50px] md:text-[16px]">
                  <p>
                    本サイトでは、お客様の個人情報を保護するため、SSL（Secure
                    Sockets Layer
                    protocol）を利用する場合があります。SSLとは、サーバとお客様のブラウザの間の通信を暗号化することにより、インターネットでやり取りされる情報を、第三者による傍受から保護することを目的とした通信手段です。SSLに対応していないブラウザをご利用の場合は、本サイトにアクセスできなかったり、情報の入力ができない場合があります。
                  </p>
                </div>
              </div>
              <div className="mt-16 md:mt-[90px]">
                <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
                  推奨利用環境
                </h2>
                <div className="mt-7 text-[14px] md:mt-[50px] md:text-[16px]">
                  <p>
                    本サイトでは、お客様の個人情報を保護するため、SSL（Secure
                    Sockets Layer
                    protocol）を利用する場合があります。SSLとは、サーバとお客様のブラウザの間の通信を暗号化することにより、インターネットでやり取りされる情報を、第三者による傍受から保護することを目的とした通信手段です。SSLに対応していないブラウザをご利用の場合は、本サイトにアクセスできなかったり、情報の入力ができない場合があります。
                  </p>
                </div>
              </div>
              <div className="mt-16 md:mt-[90px]">
                <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
                  ふるさと納税に関する規約
                </h2>
                <div className="mt-7 text-[14px] md:mt-[50px] md:text-[16px]">
                  <p>
                    本サイトを通じて行われるふるさと納税について、以下の規約を定めます。
                  </p>
                  <p>
                    1. ふるさと納税の性質
                    <br />
                    ふるさと納税は、地方自治体への寄付金です。寄付者は、寄付先自治体が定める返礼品を受け取ることができます。当クラブは、寄付の申込受付および返礼品発送の業務を、寄付先自治体から委託を受けて実施する場合があります。
                  </p>
                  <div>
                    <p>2. 申込と寄付の成立</p>
                    <br />
                    <ul className="list-decimal pl-5">
                      <li>
                        寄付者が本サイト上でふるさと納税の申込を行い、寄付先自治体が申込を承諾した時点で、寄付が成立します。
                      </li>
                      <li>
                        寄付金の支払いは、本サイトが指定する決済方法により行うものとします。
                      </li>
                      <li>
                        寄付成立後の寄付者都合によるキャンセルはできません。
                      </li>
                    </ul>
                  </div>
                  <p>3. 返礼品について</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
