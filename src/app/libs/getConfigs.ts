import { client } from './client';

export const getConfigs = async () => {
  const data = await client.get({
    endpoint: 'config',
  });

  return data;
};
