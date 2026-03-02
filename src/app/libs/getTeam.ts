import { TeamList } from '@/types/team';

import { client } from './client';

export const getTeamList = async (team?: string) => {
  const teamSelected = team ?? 'レオブラックス';
  const data = await client.get({
    endpoint: 'team',
    queries: {
      filters: `team[contains]${teamSelected}`,
    },
  });

  return data as TeamList;
};
