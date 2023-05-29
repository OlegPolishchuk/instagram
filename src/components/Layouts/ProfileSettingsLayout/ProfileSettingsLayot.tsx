import React, { ReactElement, ReactNode } from 'react';

import clsx from 'clsx';

import { AsideNav, Header } from '@/components';
import cls from '@/components/Layouts/asideNav/AsideNav.module.css';
import { MobileNavigations, ProfileSettingsNav } from '@/components/Navigations';

interface Props {
  children?: ReactNode;
}
const ProfileSettingsLayout = ({ children }: Props) => {
  return (
    <>
      <Header>
        <MobileNavigations />
      </Header>

      <div className={clsx(cls.container, 'container')}>
        <AsideNav />
        <main className={cls.main}>
          <ProfileSettingsNav />
          {children}
        </main>
      </div>
    </>
  );
};

export const getProfileSettingsLayout = (page: ReactElement) => {
  return <ProfileSettingsLayout>{page}</ProfileSettingsLayout>;
};
