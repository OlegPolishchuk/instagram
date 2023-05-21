import React from 'react';

import { GetServerSideProps } from 'next';

import { AsideNav } from '@/components';
import { getAsideNavLayout } from '@/components/Layouts';
import { getStaticPropsWithLocale } from '@/shared/utils';

const Profile = () => {
  return <div>Profile page</div>;
};

Profile.getLayout = getAsideNavLayout;
export default Profile;

export const getServerSideProps: GetServerSideProps = getStaticPropsWithLocale();
