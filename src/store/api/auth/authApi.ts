import { LoginUserFormData, RegistrationUserFormData } from './types';

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

    /*
    newUserNewUser
    newUser@mail.oo
    qwerqwer
    * */

    loginUser: build.mutation({
      query: (userData: LoginUserFormData) => ({
        url: 'auth/login',
        method: 'POST',
        body: userData,
      }),
    }),

    confirmEmail: build.mutation({
      query: (confirmationCode: string) => ({
        url: 'auth/registration-confirmation',
        method: 'POST',
        body: { confirmationCode },
      }),
    }),

    getMe: build.query<any, void>({
      query: () => ({ url: 'auth/me' }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useGetMeQuery,
  useLoginUserMutation,
  useConfirmEmailMutation,
} = authAPI;
