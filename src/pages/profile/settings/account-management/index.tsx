import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getProfileSettingsLayout } from '@/components/Layouts';

const AccountManagement: InferGetServerSidePropsType<typeof getServerSideProps> = () => {
  return <div>Account Management</div>;
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
