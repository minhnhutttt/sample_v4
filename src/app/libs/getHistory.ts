import { client } from './client';

export const getHistory = async () => {
  const data = await client.get({
    endpoint: 'history',
  });

  return data;
};
