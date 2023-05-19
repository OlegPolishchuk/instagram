import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const BASE_URL = 'https://inctagram-api-git-main-shuliakleonid.vercel.app/api/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
