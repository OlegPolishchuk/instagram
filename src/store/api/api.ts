import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://inctagram-api-git-main-shuliakleonid.vercel.app/api/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPosts: () => 'test',
  }),
});
