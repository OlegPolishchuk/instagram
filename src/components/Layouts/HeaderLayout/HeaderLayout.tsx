import React, { ReactElement, ReactNode } from 'react';

import cls from './HeaderLayout.module.css';

import { Header } from '@/components';

interface Props {
  children?: ReactNode;
}

const HeaderLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <main className={cls.main}>{children}</main>
    </>
  );
};

export const getHeaderLayout = (page: ReactElement) => {
  return <HeaderLayout>{page}</HeaderLayout>;
};
