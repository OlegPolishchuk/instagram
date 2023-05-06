import React, { ReactElement, ReactNode } from 'react';

import { Header } from '@/components';

interface Props {
  children?: ReactNode;
}

const HeaderLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export const getHeaderLayout = (page: ReactElement) => {
  return <HeaderLayout>{page}</HeaderLayout>;
};
