import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import { Confirmation, getHeaderLayout, EmailConfirmationModal } from '@/components';
import { CommonModal } from '@/components/Modals';
import { Routes } from '@/shared/constants';
import { BaseModal, Input } from '@/shared/ui';
import { AuthError, useResendEmailMutation } from '@/store/api';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VerificationExpired: InferGetStaticPropsType<typeof getStaticProps> = () => {
  const router = useRouter();
  const { t } = useTranslation('registerPage');

  const [handeResendEmail, { isSuccess, isError, error, isLoading }] =
    useResendEmailMutation();
  const [emailValue, setEmailValue] = useState({ value: '', error: '' });

  const handleResendVerification = () => {
    const email = emailValue.value;

    if (!emailRegex.test(email)) {
      setEmailValue(prevState => ({ ...prevState, error: 'Email is not valid' }));

      return;
    }

    handeResendEmail(emailValue.value);
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(prevState => ({ ...prevState, value: event.target.value }));
  };

  const handleRedirectToLogin = () => {
    router.push(Routes.auth.Login);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleResendVerification();
    }
  };

  if (error) {
    const err = error as AuthError;

    return (
      <CommonModal
        isOpen={isError}
        title={t('email_verification.modal.error.title')}
        confirmCallback={handleRedirectToLogin}
      >
        <p>{err.data.messages[0] && err.data.messages[0].message}</p>
      </CommonModal>
    );
  }

  return (
    <>
      <Confirmation
        clickCallback={handleResendVerification}
        buttonTitle={t('email_verification.button_title')}
        title={t('email_verification.title')}
        message={t('email_verification.message')}
        img="/images/expired_time_mobile.png"
        isButtonDisabled={isLoading}
      >
        <div>
          <Input
            label={t('form.input_email.label')}
            value={emailValue.value}
            onChange={handleChangeInput}
            onKeyDown={handleKeyDown}
            errorMessage={emailValue.error}
            disabled={isLoading}
          />
        </div>
      </Confirmation>

      {isSuccess && (
        <EmailConfirmationModal
          isOpen={isSuccess}
          closeCallback={handleRedirectToLogin}
          email={emailValue.value}
        />
      )}
    </>
  );
};

VerificationExpired.getLayout = getHeaderLayout;
export default VerificationExpired;

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
