'use server';

import type { ApiResponse, ServerResponse } from '@/types';
import { SampleRequest, SampleResponse } from '@/types/sample';

export const createSample = async (
  payload: SampleRequest,
): Promise<ServerResponse<SampleResponse>> => {
  try {
    const response = await fetch(`${process.env.API_URL}/api/v1/sample`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result: ApiResponse<SampleResponse> = await response.json();

    if (result.code !== 0) {
      return { code: result.code, data: null };
    }
    return { code: result.code, data: result.data };
  } catch {
    return { code: -1, data: null };
  }
};
