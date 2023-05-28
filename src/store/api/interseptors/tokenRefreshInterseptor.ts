import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { localStorageService } from '@/shared/services';
import { isTokenExpired } from '@/shared/utils';

type ApiRequest = Parameters<BaseQueryFn>[0];

const exceptionUrls = [
  'loginUser',
  'registration',
  'recoveryPassword',
  'resendEmail',
  'confirmEmail',
];

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const BaseQueryWithAuth =
  (baseQueryApi: BaseQueryFn): BaseQueryFn =>
  async (args: ApiRequest, api, extraOptions) => {
    if (!exceptionUrls.includes(args.endpointName)) {
      let token = localStorageService.getToken();

      if (token) {
        const { exp, iat } = jwt.decode(token) as JwtPayload;
        const isExpired = isTokenExpired(iat as number, exp as number);

        if (isExpired) {
          token = await updateTokens();
        }

        setAccessTokenToHeaders(args, token);
      }
    }

    const result = await baseQueryApi(args, api, extraOptions);

    return result;
  };

function setAccessTokenToHeaders(args: ApiRequest, token: string) {
  args.headers = {
    ...args.headers,
    Authorization: `Bearer ${token}`,
  };
}

async function fetchUpdateTokens() {
  const res = await fetch(`${BASE_URL}auth/update-tokens`, {
    method: 'POST',
    credentials: 'include',
  });
  const data: { accessToken: string } = await res.json();

  return data.accessToken;
}

async function updateTokens() {
  try {
    const token = await fetchUpdateTokens();

    await localStorageService.setToken(token);

    return token;
  } catch (e) {
    console.log('Error in updateTokens function', e);
  }
}
