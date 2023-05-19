import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import cls from './style.module.css';

import { getHeaderLayout } from '@/components';
import { ForgotPasswordForm } from '@/components/Forms';
import { getStaticPropsWithLocale } from '@/shared/utils';

const ForgotPassword: InferGetStaticPropsType<typeof getStaticProps> = () => {
  return (
    <div className={cls.wrapper}>
      <ForgotPasswordForm />
    </div>
  );
};

ForgotPassword.getLayout = getHeaderLayout;
export default ForgotPassword;

export const getStaticProps: GetStaticProps = getStaticPropsWithLocale();
