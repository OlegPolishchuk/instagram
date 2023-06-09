import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import cls from './style.module.css';

import { getHeaderLayout, RecoveryForm } from '@/components';
import { CommonModal } from '@/components/Modals';
import { Routes } from '@/shared/constants';
import { useNewPasswordMutation } from '@/store/api/auth/authApi';

export const NewPassword: InferGetStaticPropsType<typeof getStaticProps> = () => {
  const { t } = useTranslation('loginPage');

  const router = useRouter();
  const recoveryCode = router.query.code as string;

  const [setNewPassword, { isLoading, isSuccess, isError }] = useNewPasswordMutation();

  const modalTitle = isError
    ? t('new_password.modal.error.title')
    : t('new_password.modal.success.title');

  const modalMessage = isError
    ? t('new_password.modal.error.message')
    : t('new_password.modal.success.message');

  if (isError) {
    toast.error(t('new_password.toaster.message'));
  }

  const handleSubmitForm = (newPassword: string) => {
    setNewPassword({ newPassword, recoveryCode });
  };

  const handleNavigate = async (path: string) => {
    await router.push(path);
  };

  return (
    <div className={cls.wrapper}>
      <RecoveryForm onSubmitCallback={handleSubmitForm} isLoading={isLoading} />

      <CommonModal
        isOpen={isSuccess || isError}
        status={isSuccess ? 'success' : 'error'}
        confirmCallback={() =>
          handleNavigate(isError ? Routes.auth.ForgotPassword : Routes.auth.Login)
        }
        title={modalTitle}
      >
        <h1>{modalMessage}</h1>
      </CommonModal>
    </div>
  );
};

NewPassword.getLayout = getHeaderLayout;
export default NewPassword;

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
