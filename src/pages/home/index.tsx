import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getAsideNavLayout } from '@/components/Layouts';

const Home: InferGetStaticPropsType<typeof getStaticProps> = () => {
  return <div>Home Page</div>;
};

Home.getLayout = getAsideNavLayout;
export default Home;

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
