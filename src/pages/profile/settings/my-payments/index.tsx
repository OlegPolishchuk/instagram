import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getProfileSettingsLayout } from '@/components/Layouts';

const MyPayments: InferGetServerSidePropsType<typeof getServerSideProps> = () => {
  return <div>My Payments</div>;
};

MyPayments.getLayout = getProfileSettingsLayout;
export default MyPayments;

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
