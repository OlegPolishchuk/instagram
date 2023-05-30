import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { GeneralInfo } from '@/components';
import { getProfileSettingsLayout } from '@/components/Layouts';

const GeneralInformation: InferGetServerSidePropsType<typeof getServerSideProps> = () => {
  return <GeneralInfo />;
};

GeneralInformation.getLayout = getProfileSettingsLayout;
export default GeneralInformation;

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
