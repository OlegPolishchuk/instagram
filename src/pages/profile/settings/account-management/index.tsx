import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import cls from './AccountManagement.module.css';

import { getProfileSettingsLayout } from '@/components/Layouts';
import { Checkbox } from '@/shared/ui';

const AccountManagement: InferGetServerSidePropsType<typeof getServerSideProps> = () => {
  return (
    <div>
      <h3 className={cls.title}>Account Management</h3>

      <div className={cls.container}>
        <Checkbox label="Personal" />
        <Checkbox label="Business" />
      </div>
    </div>
  );
};

AccountManagement.getLayout = getProfileSettingsLayout;
export default AccountManagement;

export const getServerSideProps: GetServerSideProps = async ({
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
