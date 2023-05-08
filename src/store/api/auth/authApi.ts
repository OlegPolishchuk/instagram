import { RegistrationUserFormData } from './types';

import { api } from '@/store/api/api';

export const authAPI = api.injectEndpoints({
  endpoints: build => ({
    registration: build.mutation({
      query: (userData: RegistrationUserFormData) => ({
        url: 'auth/registration',
        method: 'POST',
        body: userData,
      }),
    }),

    getMe: build.query<any, void>({
      query: () => ({ url: 'auth/me' }),
    }),
  }),
});

export const { useRegistrationMutation, useGetMeQuery } = authAPI;
