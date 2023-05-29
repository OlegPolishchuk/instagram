import React from 'react';

import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getProfileSettingsLayout } from '@/components/Layouts';

const AccountManagement = () => {
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
