'use client';

import { ReactNode } from 'react';

import Button from '@/components/button';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';

const WorkItem = ({
  id,
  head,
  subHead,
  title,
  text,
  children,
}: {
  id: string;
  head: string;
  subHead: string;
  title: ReactNode;
  text: string;
  children: ReactNode;
}) => (
  <div id={id} className="flex gap-[2rem] max-md:flex-col">
    <div className="md:flex-1">
      <p className="mb-[1rem] text-[4rem] leading-none font-bold text-[#000846] underline md:mb-[2rem] md:text-[7rem]">
        {head}
      </p>
      <p className="ext-[#242424] text-[2.4rem] font-bold md:text-[3.2rem]">
        {subHead}
      </p>
    </div>
    <div className="md:flex-1">
      <p className="mb-[2rem] text-[2.4rem] leading-[1.15] font-bold text-[#16A683] md:text-[3.2rem]">
        {title}
      </p>
      <p className="mb-[4.8rem] text-[1.8rem] leading-[1.15] font-bold md:text-[2rem]">
        {text}
      </p>
      <p className="text-[1.4rem] leading-[1.75] md:text-[1.6rem]">
        {children}
      </p>
    </div>
  </div>
);

const Workpage = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="site-max relative min-h-screen pt-[12rem] pb-[7.2rem]">
      <h1 className="text-[7rem] font-black md:text-[11.7rem]">Steproof</h1>
      <div className="my-[6rem] flex justify-between gap-[2rem] max-md:flex-col md:items-center">
        <p className="text-[2.2rem] leading-none md:text-[3.2rem]">
          その移動を、確実な記録に。
        </p>
        <Button
          lg
          text="Steproofを使ってみる"
          en="TRY USING Steproof"
          onClick={() => dispatch(openModal({ name: 'contact' }))}
        />
      </div>
      <div className="relative">
        <img src="/assets/images/work.png" alt="" className="w-full" />
        <h2 className="absolute bottom-4 left-4 text-[2.1rem] leading-none font-bold text-[#16A683] md:text-[7rem]">
          DRIVING EFFICIENCY THROUGH AUTOMATED MOBILITY LOGS.
        </h2>
      </div>
      <div className="flex flex-col justify-center pt-[7.5rem] text-center">
        <p className="text-[2.4rem] font-bold md:text-[3.2rem]">
          出張・移動日当制度の課題を解決
        </p>
        <p className="mt-[2.4rem] text-[2rem] md:text-[2.4rem]">
          「記録している」と「証明できる」は、まったく違う。
          <br className="max-md:hidden" />
          Steproofは、煩雑な運用を排除しながら、
          <br className="max-md:hidden" />
          制度活用に必要な客観的データを確実に残します。
        </p>
      </div>
      <div className="space-y-[10rem] pt-[18rem]">
        <WorkItem
          id="section-A"
          head="Analyze"
          subHead="現状を見極める"
          title="現状課題の把握と知識不足の解消"
          text="IDENTIFYING CORE OPERATIONAL CHALLENGES."
        >
          出張・移動日当制度の導入を検討しながらも、知識不足や「導入が大変そう」という思い込み、あるいは実務負担の増加を懸念して踏み切れない企業は少なくありません。
          Steproofは、まず貴社の現状を丁寧にヒアリングし、制度導入を阻むボトルネックを明確化します。本来享受できるはずのメリットを再認識し、機会損失を防ぐための最適なアプローチを提案することで、導入に向けた確かな土台を築きます。
        </WorkItem>
        <WorkItem
          id="section-B"
          head="Scheme"
          subHead="解決策を設計する"
          title={
            <>
              会社と従業員
              <br />
              双方にメリットのある制度設計
            </>
          }
          text="STRATEGIZING FOR MUTUAL GROWTH."
        >
          制度活用の要は、会社と従業員の双方が納得できる設計にあります。Steproofは、企業側にはガバナンスの強化や適正な経費計上による管理体制の健全化を、従業員側には日当による処遇改善や働き方の柔軟性向上といった具体的なメリットを提示します。
          これら双方向の恩恵を最大化する活用イメージを具体化することで、単なるツール導入に留まらない、組織全体のウェルビーイング向上に寄与する戦略を構築します。
        </WorkItem>
        <WorkItem
          id="section-C"
          head="Achive"
          subHead="形に落とし込む"
          title="LINEを活用した自動化の実装"
          text="AUTOMATING PROCESSES VIA LINE INTEGRATION."
        >
          制度運用の最大の壁である「移動の記録」と「精算処理」を、LINE連携によって徹底的に効率化します。
          客観的な移動距離の証明から、距離に応じた規定計算、さらには報告に必要な文章の簡易出力までを自動化。
          従業員は使い慣れたツールで操作を完結でき、管理側の工数も大幅に削減されます。セキュアな環境下でスピーディーな導入を実現し、手間をかけない制度運用をスタートさせます。
        </WorkItem>
      </div>
      <div className="flex justify-center py-[8rem]">
        <Button
          lg
          text="Steproofを使ってみる"
          en="TRY USING Steproof"
          onClick={() => dispatch(openModal({ name: 'contact' }))}
        />
      </div>
      <div className="flex justify-center gap-[5.2rem] pb-[18rem] max-md:flex-col max-md:items-center">
        <figure>
          <img src="/assets/images/thumbnail-02.jpg" alt="" />
        </figure>
        <figure>
          <img src="/assets/images/thumbnail-03.jpg" alt="" />
        </figure>
        <figure>
          <img src="/assets/images/thumbnail-04.jpg" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Workpage;
