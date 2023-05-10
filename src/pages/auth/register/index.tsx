import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getHeaderLayout, RegisterForm } from '@/components';
import { getStaticPropsWithLocale } from '@/shared/utils';

const Register: InferGetStaticPropsType<typeof getStaticProps> = () => {
  return (
    <div className="flex_center">
      <RegisterForm />
    </div>
  );
};

Register.getLayout = getHeaderLayout;

export default Register;

export const getStaticProps: GetStaticProps = getStaticPropsWithLocale();
