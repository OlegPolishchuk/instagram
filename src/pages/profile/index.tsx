import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getAsideNavLayout } from '@/components/Layouts';
import { PostsList, ProfileData } from '@/components/Profile';
import { useGetProfileQuery } from '@/store/api';

const Profile: InferGetServerSidePropsType<typeof getServerSideProps> = () => {
  const { isLoading, data } = useGetProfileQuery();

  if (!data) return null;

  return (
    <>
      <ProfileData profile={data} />

      <PostsList />
    </>
  );
};

Profile.getLayout = getAsideNavLayout;
export default Profile;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: {
  locale?: string | undefined;
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'profile'])),
    },
  };
};
