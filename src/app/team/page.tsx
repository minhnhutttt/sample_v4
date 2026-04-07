import type { Metadata } from 'next';

import Title from '@/components/common/title';
import { OG, TWITTER } from '@/config/constants';
import { getTeamList } from '@/services/microcms';

import TeamList from './components/teamList';

export const metadata: Metadata = {
  title: 'Team',
  openGraph: {
    ...OG,
    title: 'team',
    url: '/team',
  },
  twitter: {
    ...TWITTER,
    title: 'team',
  },
  alternates: {
    canonical: '/team',
  },
};

const TeamPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ team?: string }>;
}) => {
  const params = await searchParams;
  const team01 = await getTeamList('レオブラックス');
  const team02 = await getTeamList('レオナイナーズ');

  return (
    <div className="px-5 pt-20 pb-32 md:pt-22 md:pb-40">
      <div className="relative mx-auto w-full max-w-160 md:max-w-[1240px]">
        <div className="md:px-4">
          <Title title="TEAM" sub="選手の紹介" />
          <TeamList
            key={params?.team ?? ''}
            initialTeam01={team01.contents}
            initialTeam02={team02.contents}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
