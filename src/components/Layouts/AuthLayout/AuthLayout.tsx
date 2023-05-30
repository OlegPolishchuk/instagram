import React, { ReactNode, useEffect, useState } from 'react';

import { skipToken } from '@reduxjs/toolkit/query';
import { useRouter } from 'next/router';

import { GlobalLoader } from '@/components';
import { Routes } from '@/shared/constants';
import { localStorageService } from '@/shared/services';
import { useGetMeQuery } from '@/store/api';

interface Props {
  children?: ReactNode;
}

const unProtectedRoutes = [...Object.values(Routes.auth)];

export const AuthLayout = ({ children }: Props) => {
  const [skipRequest, setSkipRequest] = useState(true);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { isError, isSuccess } = useGetMeQuery(skipRequest && skipToken);

  const currentPath = router.pathname;
  const protectedRoute = !unProtectedRoutes.includes(currentPath);

  useEffect(() => {
    const isTokenExist = !!localStorageService.getToken();

    if ((!isTokenExist && protectedRoute) || isError) {
      router.push(Routes.auth.Login).then();
    }

    if (isTokenExist && protectedRoute) {
      setSkipRequest(false);
    }

    if (isSuccess || isError) {
      setLoading(false);
    }

    if (!protectedRoute) {
      setLoading(false);
    }
  }, [protectedRoute, isError, isSuccess, skipRequest]);

  if (loading) {
    return <GlobalLoader />;
  }

  /* Сделать редиррект если пользователь залогинен и переходит на auth роуты */
  return <>{children}</>;
};
