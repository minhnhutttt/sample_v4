'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import { TransitionLink } from '@/components/navigation/TransitionLink';
import { TeamProps } from '@/types/team';

import TeamItem from './teamItem';

type Props = {
  initialTeam01: TeamProps[];
  initialTeam02: TeamProps[];
};

const TEAM_MAP = {
  レオブラックス: 0,
  レオナイナーズ: 1,
} as const;

export default function TeamList({ initialTeam01, initialTeam02 }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentTeam = searchParams.get('s') ?? 'レオブラックス';
  const tab = TEAM_MAP[currentTeam as keyof typeof TEAM_MAP] ?? 0;

  const changeTab = (teamName: keyof typeof TEAM_MAP) => {
    router.replace(`/team?s=${encodeURIComponent(teamName)}`, {
      scroll: false,
    });
  };
  return (
    <div className="">
      <div className="mx-auto mt-10 grid w-full max-w-[562px] grid-cols-2 md:mt-25">
        <button
          className="h-20 bg-[#E9F9FD] text-[16px] font-bold md:text-[20px]"
          onClick={() => changeTab('レオブラックス')}
        >
          レオブラックス
        </button>
        <button
          className="h-20 bg-[#FFEDED] text-[16px] font-bold md:text-[20px]"
          onClick={() => changeTab('レオナイナーズ')}
        >
          レオナイナーズ
        </button>
      </div>
      {tab == 0 ? (
        <div className="bg-[#E9F9FD] px-5 py-[35px]">
          <div className="flex justify-center gap-8 max-md:flex-col md:gap-[50px]">
            <div className="">
              <Image
                src="/assets/images/leo-logo.png"
                alt="logo"
                width={168}
                height={115}
                className="max-md:w-[100px]"
              />
            </div>
            <div className="max-w-[635px]">
              <p className="mb-3 text-[16px]">
                日本のチームで唯一、3x3国際プロバスケットボールリーグ「3BL」と業務提携をしており、バスケットボールにおいて国際的にいかに貢献できるかを考え、活動しています。
                <br />
                チーム名およびテームロゴは、明治期に姿を消した唐津くんちの曳山「黒獅子」がモチーフ。2Mを越す長身の外国人選手と地元九州地方出身の選手を起用し、結果を残しつつも地元に愛されるチームを目指しています。
              </p>
              <div className="flex justify-end">
                <TransitionLink
                  href="/history"
                  className="flex h-[34px] w-[169px] items-center justify-center gap-2 bg-[linear-gradient(94deg,_#FF5E5E_3.04%,_#FF4E4E_113.13%)] text-[14px] text-white"
                >
                  <img src="/assets/images/ic-trophy.svg" alt="" />
                  <span>これまでの実績</span>
                </TransitionLink>
              </div>
            </div>
          </div>
          <div className="mx-auto my-10 grid w-full max-w-[990px] gap-x-5 gap-y-10 sm:grid-cols-2 md:my-[55px] md:grid-cols-3 md:gap-y-20">
            {initialTeam01.map((team: TeamProps) => (
              <TeamItem {...team} key={team.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-[#FFEDED] px-5 py-[35px]">
          <div className="flex justify-center gap-8 max-md:flex-col md:gap-[50px]">
            <div className="">
              <Image
                src="/assets/images/logo2.png"
                alt="logo"
                width={123}
                height={135}
                className="max-md:w-[100px]"
              />
            </div>
            <div className="max-w-[635px]">
              <p className="mb-3 text-[16px]">
                九州唯一の3x3女子プロバスケットボールチーム「LEO
                NINERS」。佐賀県唐津市を拠点に、女子バスケットボールの普及と3x3競技の発展を目指し活動しています。2025シーズンは新体制で始動。JBA
                JAPAN TOUR、3x3
                UNITEDなど、年間を通して多くのリーグや大会に出場します。3x4史に刻まれるチームとして、日本、そして世界を目指し挑戦を続けています。女子チームならではの華やかさとスピード感あふれるプレーで、九州から全国へ、そして世界へ。共に夢を追いかけるチームです。
              </p>
              <div className="flex justify-end">
                <TransitionLink
                  href="/history"
                  className="flex h-[34px] w-[169px] items-center justify-center gap-2 bg-[linear-gradient(94deg,_#FF5E5E_3.04%,_#FF4E4E_113.13%)] text-[14px] text-white"
                >
                  <img src="/assets/images/ic-trophy.svg" alt="" />
                  <span>これまでの実績</span>
                </TransitionLink>
              </div>
            </div>
          </div>
          <div className="mx-auto my-10 grid w-full max-w-[990px] gap-x-5 gap-y-10 sm:grid-cols-2 md:my-[55px] md:grid-cols-3 md:gap-y-20">
            {initialTeam02.map((team: TeamProps) => (
              <TeamItem {...team} key={team.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
