import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getHeaderLayout, LoginForm } from '@/components';
import { getStaticPropsWithLocale } from '@/shared/utils';

const Login = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex_center">
      <LoginForm />
    </div>
  );
};

Login.getLayout = getHeaderLayout;

export default Login;

export const getStaticProps: GetStaticProps = getStaticPropsWithLocale();
