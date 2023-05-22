import React, { ReactElement, ReactNode } from 'react';

import cls from './AsideNav.module.css';

import { AsideNav, Header } from '@/components';
import { MobileNavigations } from '@/components/Navigations';

interface Props {
  children?: ReactNode;
}

const AsideNavLayout = ({ children }: Props) => {
  return (
    <>
      <Header>
        <MobileNavigations />
      </Header>

      <div className={cls.container}>
        <AsideNav />
        <main className={cls.main}>{children}</main>
      </div>
    </>
  );
};

export const getAsideNavLayout = (page: ReactElement) => {
  return <AsideNavLayout>{page}</AsideNavLayout>;
};
