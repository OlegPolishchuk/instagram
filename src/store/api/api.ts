import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { localStorageService } from '@/shared/services';

const BASE_URL = 'https://inctagram-api-git-main-shuliakleonid.vercel.app/api/';
const exceptionUrls = [
  'loginUser',
  'registration',
  'recoveryPassword',
  'resendEmail',
  'confirmEmail',
];

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { endpoint }) => {
      if (exceptionUrls.includes(endpoint)) {
        return;
      }

      headers.set('Authorization', `Bearer ${localStorageService.getToken()}`);
    },
  }),
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
