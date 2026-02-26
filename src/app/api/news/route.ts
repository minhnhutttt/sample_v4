import { NextRequest, NextResponse } from 'next/server';

import { getNewsList } from '@/app/libs/getNews';
import { PER_PAGE } from '@/config/constants';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const offset = Number(searchParams.get('offset') ?? 0);
  const category = searchParams.get('category') ?? undefined;

  const data = await getNewsList(category, PER_PAGE, offset);

  return NextResponse.json(data);
}
