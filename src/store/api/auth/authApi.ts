import {
  AuthError,
  GetMeResponseUserData,
  LoginUserFormData,
  RegistrationUserFormData,
} from './types';

import { localStorageService } from '@/shared/services';
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

    loginUser: build.mutation<{ accessToken: string }, LoginUserFormData>({
      query: userData => ({
        url: 'auth/login',
        method: 'POST',
        body: userData,
      }),
    }),

    logout: build.mutation({
      query: () => ({
        url: 'auth/logout',
        method: 'Post',
      }),
    }),

    confirmEmail: build.mutation({
      query: (confirmationCode: string) => ({
        url: 'auth/registration-confirmation',
        method: 'POST',
        body: { confirmationCode },
      }),
    }),

    resendEmail: build.mutation({
      query: (email: string) => ({
        url: 'auth/registration-email-resending',
        method: 'POST',
        body: { email },
      }),
    }),

    recoveryPassword: build.mutation({
      query: ({ email, recaptcha }: { email: string; recaptcha: string }) => ({
        url: 'auth/password-recovery',
        method: 'POST',
        body: { email, recaptcha },
      }),
    }),

    getMe: build.query<GetMeResponseUserData, void>({
      query: () => ({
        url: 'auth/me',
        headers: {
          // Authorization: `Bearer ${localStorageService.getToken()}`,
        },
      }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useGetMeQuery,
  useLoginUserMutation,
  useConfirmEmailMutation,
  useLogoutMutation,
  useResendEmailMutation,
  useRecoveryPasswordMutation,
} = authAPI;

export const { getMe, logout, confirmEmail, loginUser, registration, resendEmail } =
  authAPI.endpoints;
