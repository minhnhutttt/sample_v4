'use server';

import { cookies } from 'next/headers';

export const withAuth = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  return cookieStore.get('token')?.value ?? null;
};
