import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { BaseQueryWithAuth } from '@/store/api/interseptors/tokenRefreshInterseptor';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: BaseQueryWithAuth(
    fetchBaseQuery({
      baseUrl: BASE_URL,
      credentials: 'include',
    }),
  ),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPosts: () => 'test',
  }),
});
