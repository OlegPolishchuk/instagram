import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import cls from './style.module.css';

import { getHeaderLayout } from '@/components';
import { ForgotPasswordForm } from '@/components/Forms';

const ForgotPassword: InferGetStaticPropsType<typeof getStaticProps> = () => {
  return (
    <div className={cls.wrapper}>
      <ForgotPasswordForm />
    </div>
  );
};

ForgotPassword.getLayout = getHeaderLayout;
export default ForgotPassword;

export const getStaticProps: GetStaticProps = async ({
  locale,
}: {
  locale?: string | undefined;
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  };
};
