import React, { ReactNode, useEffect } from 'react';

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
  const router = useRouter();
  const { isError, isSuccess, isLoading } = useGetMeQuery();

  const currentPath = router.pathname;
  const isUnprotectedRoute = unProtectedRoutes.includes(currentPath);

  useEffect(() => {
    const isUserAuth = localStorageService.getToken();

    if (isUserAuth && isUnprotectedRoute) {
      if (isSuccess) router.push(Routes.Profile);
    }

    if (isError) router.push(Routes.auth.Login);
  }, [isError, isSuccess, isUnprotectedRoute]);

  if (isLoading) {
    return <GlobalLoader />;
  }

  return <>{children}</>;
};
