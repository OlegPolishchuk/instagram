import React, { useCallback, useEffect, useState } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import { getHeaderLayout, RegisterForm } from '@/components';
import { Routes } from '@/shared/constants';
import { BaseModal } from '@/shared/ui';
import { RegistrationUserFormData, useRegistrationMutation } from '@/store/api';

const Register: InferGetStaticPropsType<typeof getStaticProps> = () => {
  const router = useRouter();

  const [registerUser, { isLoading, isSuccess }] = useRegistrationMutation();

  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const { t } = useTranslation('registerPage');

  const handleCloseModal = useCallback(() => {
    setShowModal(false);

    router.push(Routes.auth.Login);
  }, []);

  const handleFormSubmit = (registrationFormData: RegistrationUserFormData) => {
    setUserEmail(registrationFormData.email);
    registerUser(registrationFormData);
  };

  useEffect(() => {
    if (isSuccess) {
      setShowModal(true);
    }
  }, [isSuccess]);

  return (
    <div className="flex_center">
      <RegisterForm
        submitCallback={handleFormSubmit}
        isLoading={isLoading}
        disabled={isSuccess}
      />
      <BaseModal
        isOpen={showModal}
        confirmCallback={handleCloseModal}
        title={t('email_sent_modal.title')}
      >
        <h1>{t('email_sent_modal.message', { userEmail })}</h1>
      </BaseModal>
    </div>
  );
};

Register.getLayout = getHeaderLayout;

export default Register;

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
