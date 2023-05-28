import { useEffect } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { getHeaderLayout, LoginForm } from '@/components';
import { Routes } from '@/shared/constants';
import { localStorageService } from '@/shared/services';
import { LoginUserFormData, useLoginUserMutation } from '@/store/api';

const Login: InferGetStaticPropsType<typeof getStaticProps> = () => {
  const router = useRouter();
  const { t } = useTranslation('loginPage');

  const [handleLogin, { isLoading, isSuccess, isError, data }] = useLoginUserMutation();

  const handleSubmitForm = (formData: LoginUserFormData) => {
    handleLogin(formData);
  };

  if (isError) {
    toast.error(t('toaster.message'));
  }

  useEffect(() => {
    if (isSuccess && data) {
      localStorageService.setToken(data.accessToken);

      router.push(Routes.Profile.base).then();
    }
  }, [isSuccess]);

  return (
    <div className="flex_center">
      <LoginForm
        handleSubmitFormCallback={handleSubmitForm}
        disabled={isLoading || isSuccess}
        isLoading={isLoading}
      />
    </div>
  );
};

Login.getLayout = getHeaderLayout;

export default Login;

export const getStaticProps: GetStaticProps = async ({
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
