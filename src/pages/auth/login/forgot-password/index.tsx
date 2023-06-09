import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import cls from './style.module.css';

import { getHeaderLayout } from '@/components';
import { ForgotPasswordForm } from '@/components/Forms';
import { CommonModal } from '@/components/Modals';
import { Routes } from '@/shared/constants';
import { useRecoveryPasswordMutation } from '@/store/api/auth/authApi';

const ForgotPassword: InferGetStaticPropsType<typeof getStaticProps> = () => {
  const router = useRouter();
  const [handleSend, { isSuccess, isLoading, isError }] = useRecoveryPasswordMutation();

  const { t } = useTranslation('loginPage');

  const handleFormSubmit = ({
    email,
    recaptcha,
  }: {
    email: string;
    recaptcha: string;
  }) => {
    handleSend({ email, recaptcha });
  };

  const handleCloseModal = () => {
    router.push(Routes.auth.Login);
  };

  if (isError) {
    toast.error(t('toaster.message'));
  }

  return (
    <>
      <div className={cls.wrapper}>
        <ForgotPasswordForm onSubmit={handleFormSubmit} isLoading={isLoading} />
      </div>

      <CommonModal
        isOpen={isSuccess}
        status={isSuccess ? 'success' : 'error'}
        confirmCallback={handleCloseModal}
        title={t('modal.title')}
      >
        <h1>{t('modal.message')}</h1>
      </CommonModal>
    </>
  );
};

ForgotPassword.getLayout = getHeaderLayout;
export default ForgotPassword;

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
