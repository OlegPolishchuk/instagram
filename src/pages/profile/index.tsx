import React from 'react';

import { GetServerSideProps } from 'next';

import { Routes } from '@/shared/constants';
import { getMe, GetMeResponseUserData, useGetMeQuery } from '@/store/api';
import { authAPI } from '@/store/api/auth/authApi';
import { wrapper } from '@/store/store';

interface Props {
  userData: GetMeResponseUserData;
}

const Profile = ({ userData }: Props) => {
  console.log(userData);

  const { data, error } = useGetMeQuery();

  console.log('data => ', data);
  console.log('error => ', error);

  return <div>Profile page</div>;
};

export default Profile;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    const data = await store.dispatch(getMe.initiate());

    // const { isError, data: userData } = data;
    //
    // console.log('///////////////////');
    // console.log('isError => ', isError);
    // console.log('data => ', data);
    //
    // if (isError) {
    //   return {
    //     redirect: {
    //       destination: Routes.auth.Login,
    //     },
    //     props: {
    //       userData: {} as GetMeResponseUserData,
    //     },
    //   };
    // }
    //
    // return {
    //   props: {
    //     userData,
    //   },
    // };

    return {
      props: {
        userData: {} as GetMeResponseUserData,
      },
    };
  },
);
