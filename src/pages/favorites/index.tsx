import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getAsideNavLayout } from '@/components/Layouts';

const Favorites: InferGetStaticPropsType<typeof getStaticProps> = () => {
  return <div>Favorites Page</div>;
};

Favorites.getLayout = getAsideNavLayout;
export default Favorites;

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
