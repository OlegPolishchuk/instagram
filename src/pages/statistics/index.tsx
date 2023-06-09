import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getAsideNavLayout } from '@/components/Layouts';

const Statistics: InferGetStaticPropsType<typeof getStaticProps> = () => {
  return <div>Statistics Page</div>;
};

Statistics.getLayout = getAsideNavLayout;
export default Statistics;

export const getStaticProps: GetStaticProps = async ({
  locale,
}: {
  locale?: string | undefined;
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'createPost'])),
    },
  };
};
