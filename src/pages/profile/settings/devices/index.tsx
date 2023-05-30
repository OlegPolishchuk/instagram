import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getProfileSettingsLayout } from '@/components/Layouts';

const Devices: InferGetServerSidePropsType<typeof getServerSideProps> = () => {
  return <div>Devices</div>;
};

Devices.getLayout = getProfileSettingsLayout;
export default Devices;

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
