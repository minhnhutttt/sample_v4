import { NextRequest, NextResponse } from 'next/server';

import { getNewsList } from '@/app/libs/getNews';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const offset = Number(searchParams.get('offset') ?? 0);
  const category = searchParams.get('category') ?? undefined;

  const data = await getNewsList(category, 2, offset);

  return NextResponse.json(data);
}
