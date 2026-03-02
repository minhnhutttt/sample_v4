import { client } from './client';

export const getMatches = async () => {
  const data = await client.get({
    endpoint: 'matches',
  });

  return data;
};
