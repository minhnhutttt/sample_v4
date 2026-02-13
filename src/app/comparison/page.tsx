import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Article from '@/components/common/Article';
import Button from '@/components/common/Button';
import { OG, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Comparison',
  openGraph: {
    ...OG,
    title: 'comparison',
    url: '/comparison',
  },
  twitter: {
    ...TWITTER,
    title: 'comparison',
  },
  alternates: {
    canonical: '/comparison',
  },
};

const ComparisonPage = () => {
  return (
    <div>
      <div className="px-5 pt-28 md:pt-33.5">
        <div className="relative mx-auto flex w-full max-w-100 items-center text-white md:max-w-[1280px] md:gap-10 lg:gap-[105px]">
          <div className="max-md:absolute max-md:right-4 max-md:bottom-0 max-md:w-[43%] max-md:max-w-[145px]">
            <Image
              src="/assets/images/phone.png"
              alt="phone"
              width={324}
              height={668}
              className="md:w-[240px] lg:w-[352px]"
            />
          </div>
          <div className="relative z-10 flex flex-1">
            <div className="w-full">
              <h1 className="text-[50px] font-bold tracking-tight text-[#F78629] max-md:leading-[1.2] md:text-[80px]">
                なぜ、
                <br />
                KIVOは他と違うのか。
              </h1>
              <div className="max-md:pr-[43%] max-md:pb-12">
                <p className="py-10 text-[18px] font-bold md:py-[50px] md:text-[40px]">
                  同じ発信でも、
                  <br />
                  価値の運命は変わります。
                </p>
                <p className="text-[14px] md:text-[24px]">
                  LINEは「届く」設計。
                  <br />
                  SNSは「広がる」設計。
                  <br />
                  KIVOは「守って育てる」設計です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-24 px-5 md:my-[170px]">
        <div className="relative mx-auto flex w-full max-w-[1312px] items-center justify-center gap-10 max-md:flex-col xl:gap-20">
          <div>
            <h3 className="flex h-[95px] items-center text-[24px] font-black before:h-[95px] before:w-[40px] before:bg-[url(/assets/images/frame.svg)] before:bg-cover after:h-[95px] after:w-[40px] after:rotate-180 after:bg-[url(/assets/images/frame.svg)] after:bg-cover md:h-[133px] md:text-[40px] md:before:h-[133px] md:before:w-[56px] md:after:h-[133px] md:after:w-[56px]">
              <span className="-mx-2 whitespace-nowrap">
                比較するべきは、
                <br />
                機能ではなく“思想”です。
              </span>
            </h3>
          </div>
          <div className="flex w-full">
            <div className="text-[18px] font-bold md:text-[25px]">
              LINEは、便利なコミュニケーションツールです。
              <br />
              日常のやり取りを、早く、広く、自由に。
              <br />
              <br />
              KIVOは、LINEやInstagramの代わりではありません。
              <br />
              <br />
              広げるための場所ではなく、
              <br />
              守りながら、価値を育てるための場所です。
              <br />
              KIVOは違います。
              <br />
              「価値ある情報」を守るために設計されています。
            </div>
          </div>
        </div>
      </div>
      <div className="my-24 px-5 md:my-[170px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <h4 className="font-bol text-center text-[24px] md:text-[50px]">
            LINEとKIVOの違い
          </h4>
          <p className="text-center text-[16px] font-bold md:text-[25px]">
            同じ「発信」でも、設計が違えば価値の行き先は変わります。
          </p>
          <div className="mt-20 w-full overflow-auto md:mt-[150px]">
            <table className="w-full min-w-[760px] border-collapse text-center text-[#555] [&_td]:bg-[#D0D0D0] [&_td:first-of-type]:bg-[#DCDCDC] [&_td:first-of-type]:text-[#111] [&_td:last-of-type]:bg-[#F78629]/80 [&_td:last-of-type]:text-white [&_th]:bg-[#B9B9B9] [&_th]:text-[#2D2D2D] [&_th,_td]:h-[52px] [&_th,_td]:border [&_th,_td]:border-white [&_th,_td]:px-2 [&_th,_td]:text-[16px] [&_th,_td]:font-bold md:[&_th,_td]:text-[24px] [&_th:last-of-type]:bg-[#F78629]">
              <thead>
                <tr>
                  <th></th>
                  <th>LINE</th>
                  <th>Instagram</th>
                  <th>KIVO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>基本思想</td>
                  <td>すぐ届く・すぐ広がる</td>
                  <td>拡散して伸ばす</td>
                  <td>守って、育てる</td>
                </tr>
                <tr>
                  <td>スクリーンショット</td>
                  <td>可能</td>
                  <td>可能</td>
                  <td>制限あり</td>
                </tr>
                <tr>
                  <td>転送</td>
                  <td>可能</td>
                  <td>可能（シェア機能）</td>
                  <td>不可</td>
                </tr>
                <tr>
                  <td>情報の前提</td>
                  <td>拡散される前提</td>
                  <td>拡散される前提</td>
                  <td>拡散されない設計</td>
                </tr>
                <tr>
                  <td>参加者</td>
                  <td>連絡先の人</td>
                  <td>フォロワー・不特定多数</td>
                  <td>本当に受け取りたい人</td>
                </tr>
                <tr>
                  <td>価値の成立</td>
                  <td>無料のコミュニケーション</td>
                  <td>数字で評価される</td>
                  <td>支持によって成立</td>
                </tr>
                <tr>
                  <td>発信の空気</td>
                  <td>即レス・即反応</td>
                  <td>バズ・消費</td>
                  <td>信頼・継続・安心</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="my-[15px] text-right text-[13px] font-bold md:text-[16px]">
            ※本ページは各サービスの優劣を示すものではなく、設計思想の違いを整理したものです。
          </p>
        </div>
      </div>
      <div className="my-24 px-5 md:my-[170px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <h4 className="font-bol text-center text-[24px] md:text-[50px]">
            同じ発信でも、
            <br className="md:hidden" />
            未来はこう変わります。
          </h4>
          <p className="text-center text-[16px] font-bold md:text-[25px]">
            KIVOは、広げるための場所ではありません。
            <br />
            守って、育てるための場所です。
          </p>
          <div className="mx-auto mt-20 grid w-full max-w-[1440px] gap-2 md:mt-[150px] md:grid-cols-3">
            <Article
              link="#"
              sm
              image="/assets/images/socical-line.png"
              title="LINEの場合"
              text={
                <>
                  発信は、すぐに届く。
                  <br />
                  でも、すぐ流れていく。
                </>
              }
            />
            <Article
              link="#"
              sm
              image="/assets/images/socical-instagram.png"
              title="Instagramの場合"
              text={
                <>
                  発信は、広がる。<b></b>
                  でも、埋もれていく。
                </>
              }
            />
            <Article
              link="#"
              sm
              active
              image="/assets/images/socical-kivo.png"
              title="KIVOの場合"
              text={
                <>
                  発信は、選ばれる。
                  <br />
                  そして、積み重なる。
                </>
              }
            />
          </div>
        </div>
      </div>
      <div className="my-24 px-2 text-center md:my-[170px]">
        <p className="text-center text-[18px] font-semibold md:text-[30px]">
          守られる発信だけが、
          <br />
          積み重なる発信になります。
          <br />
          <br />
          守られる設計を実現しているのが <br />
          Premium Channelです。
        </p>
        <div className="mt-[35px] flex justify-center md:mt-[90px]">
          <Link
            href="#"
            className="flex h-20 w-full max-w-[320px] items-center justify-center rounded-[20px] bg-[#F78629] px-8 py-2 text-[18px] font-bold text-white md:h-[108px] md:max-w-[700px] md:text-[30px]"
          >
            Premium Channelについて詳しく見る
          </Link>
        </div>
      </div>
      <div className="my-24 px-5 md:my-[170px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <h4 className="font-bol text-center text-[24px] md:text-[50px]">
            こんな人に向いています
          </h4>
          <div className="mx-auto mt-20 grid w-full max-w-[1440px] gap-2 md:mt-[150px] md:grid-cols-2">
            <Article
              link="#"
              md
              image="/assets/images/suitable-01.jpg"
              title="有料noteを出そうとして迷っている"
              text={
                <>
                  「これは無料で出す内容じゃない」と思いながら、
                  <br />
                  出し方が見つからない。
                </>
              }
            />
            <Article
              link="#"
              md
              image="/assets/images/suitable-02.jpg"
              title={
                <>
                  フォロワー数はあるのに、
                  <br />
                  収益は安定しない
                </>
              }
              text={
                <>
                  再生数はある。
                  <br />
                  でも、「信頼」は数字で測れない。
                </>
              }
            />
          </div>
        </div>
      </div>
      <div className="my-24 px-2 text-center md:my-[170px]">
        <p className="text-center text-[18px] font-semibold md:text-[30px]">
          守られる発信だけが、未来に残ります。
          <br />
          その一歩を、いま。
        </p>
        <div className="mt-[35px] md:mt-[90px]">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
