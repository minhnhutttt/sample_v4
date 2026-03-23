// src/lib/microcms.ts
import { createClient } from 'microcms-js-sdk';

import type {
  Announcement,
  AnnouncementBarItem,
  AnnouncementBarListResponse,
  AnnouncementListResponse,
} from '../types/microcms';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is not defined');
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is not defined');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ─── Announcement Bar ────────────────────────────────────────────────────────

export async function getAnnouncementBar(): Promise<AnnouncementBarItem[]> {
  const data = await client.get<AnnouncementBarListResponse>({
    endpoint: 'announcement-bar',
    queries: {
      limit: 100,
    },
    customRequestInit: {
      next: { revalidate: 60 },
    },
  });
  return data.contents;
}

// ─── Announcements ───────────────────────────────────────────────────────────

export async function getAnnouncements(queries?: {
  limit?: number;
  offset?: number;
  category?: string;
  q?: string;
}): Promise<AnnouncementListResponse> {
  const parts: string[] = [];
  if (queries?.category) parts.push(`category[contains]${queries.category}`);
  if (queries?.q) parts.push(`title[contains]${queries.q}`);
  const filters = parts.length > 0 ? parts.join('[and]') : undefined;

  return client.get<AnnouncementListResponse>({
    endpoint: 'announcements',
    queries: {
      limit: queries?.limit ?? 12,
      offset: queries?.offset ?? 0,
      ...(filters ? { filters } : {}),
    },
    customRequestInit: {
      next: { revalidate: 60 },
    },
  });
}

export async function getAnnouncementById(id: string): Promise<Announcement> {
  return client.get<Announcement>({
    endpoint: 'announcements',
    contentId: id,
    customRequestInit: {
      next: { revalidate: 60 },
    },
  });
}
