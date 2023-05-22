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

    if (isUserAuth && !isUnprotectedRoute) {
      router.push(currentPath).then();
    } else if (isError && !isUnprotectedRoute) {
      router.push(Routes.auth.Login).then();
    }
  }, [isError, isSuccess, isUnprotectedRoute]);

  if (isLoading) {
    return <GlobalLoader />;
  }

  return <>{children}</>;
};
