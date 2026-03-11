import { ReactNode } from 'react';

const WorkItem = ({
  head,
  title,
  text,
  children,
}: {
  head: string;
  title: string;
  text: string;
  children: ReactNode;
}) => (
  <div className="flex gap-[2rem] max-md:flex-col">
    <div className="md:flex-1">
      <p className="text-[4rem] leading-none font-bold text-[#242424] underline md:text-[7rem]">
        {head}
      </p>
    </div>
    <div className="md:flex-1">
      <p className="mb-[2rem] text-[2.4rem] leading-[1.15] font-bold text-[#9579C8] md:text-[3.2rem]">
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
  return (
    <div className="site-max relative min-h-screen pt-[12rem] pb-[7.2rem]">
      <h1 className="text-[7rem] font-black md:text-[11.7rem]">Steproof</h1>
      <p className="my-[6rem] text-[2.2rem] leading-none md:text-[3.2rem]">
        その移動を、確実な記録に。
      </p>
      <div className="">
        <img src="/assets/images/work.png" alt="" className="w-full" />
      </div>
      <div className="border-b border-[#424242]/15 py-[7.5rem]">
        <h2 className="text-[4rem] leading-none font-bold text-[#9579C8] md:text-[7rem]">
          DRIVING EFFICIENCY THROUGH AUTOMATED MOBILITY LOGS.
        </h2>
        <p className="mt-[2.4rem] text-[2.4rem] font-bold md:text-[3.2rem]">
          出張・移動日当制度の課題を解決
        </p>
      </div>
      <div className="flex gap-[12.8rem] pt-[7.5rem] max-md:flex-col">
        <p className="text-[2rem] md:text-[2.4rem]">
          制度活用のカギとなる客観的な「移動の記録」を自動化します。
          業務負担や知識不足といった導入のハードルを取り除き、これまで見過ごされていた節税効果や従業員還元といった大きな機会損失を防ぎます。
        </p>
        <p className="text-[1.4rem] md:text-[1.6rem]">
          多くの企業が「出張・移動日当制度」のメリットを理解しながらも、運用の煩雑さから導入を見送っています。
          Steproofは、LINEを活用した直感的な操作でこの課題を解決。客観的なデータに基づいた確実な移動証明を実現し、企業のガバナンス強化と従業員の満足度向上を同時に達成する新しいスタンダードを提供します。
        </p>
      </div>
      <div className="space-y-[10rem] py-[18rem]">
        <WorkItem
          head="Assess"
          title="IDENTIFYING CORE OPERATIONAL CHALLENGES."
          text="現状課題の把握と知識不足の解消"
        >
          出張・移動日当制度の導入を検討しながらも、知識不足や「導入が大変そう」という思い込み、あるいは実務負担の増加を懸念して踏み切れない企業は少なくありません。
          Steproofは、まず貴社の現状を丁寧にヒアリングし、制度導入を阻むボトルネックを明確化します。本来享受できるはずのメリットを再認識し、機会損失を防ぐための最適なアプローチを提案することで、導入に向けた確かな土台を築きます。
        </WorkItem>
        <WorkItem
          head="Envision"
          title="STRATEGIZING FOR MUTUAL GROWTH."
          text="会社と従業員双方にメリットのある制度設計"
        >
          制度活用の要は、会社と従業員の双方が納得できる設計にあります。Steproofは、企業側にはガバナンスの強化や適正な経費計上による管理体制の健全化を、従業員側には日当による処遇改善や働き方の柔軟性向上といった具体的なメリットを提示します。
          これら双方向の恩恵を最大化する活用イメージを具体化することで、単なるツール導入に留まらない、組織全体のウェルビーイング向上に寄与する戦略を構築します。
        </WorkItem>
        <WorkItem
          head="Execute"
          title="AUTOMATING PROCESSES VIA LINE INTEGRATION."
          text="LINEを活用した自動化の実装"
        >
          制度運用の最大の壁である「移動の記録」と「精算処理」を、LINE連携によって徹底的に効率化します。
          客観的な移動距離の証明から、距離に応じた規定計算、さらには報告に必要な文章の簡易出力までを自動化。
          従業員は使い慣れたツールで操作を完結でき、管理側の工数も大幅に削減されます。セキュアな環境下でスピーディーな導入を実現し、手間をかけない制度運用をスタートさせます。
        </WorkItem>
      </div>
      <div className="flex gap-[5.2rem] pb-[18rem] max-md:flex-col max-md:items-center">
        <figure>
          <img src="/assets/images/work-item.png" alt="" />
        </figure>
        <figure>
          <img src="/assets/images/work-item.png" alt="" />
        </figure>
        <figure>
          <img src="/assets/images/work-item.png" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Workpage;
