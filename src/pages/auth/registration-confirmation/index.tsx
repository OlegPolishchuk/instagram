import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Confirmation, getHeaderLayout } from '@/components';
import { Routes } from '@/shared/constants';
import { getStaticPropsWithLocale } from '@/shared/utils';
import { useConfirmEmailMutation } from '@/store/api';

const ConfirmationPage: InferGetStaticPropsType<typeof getStaticProps> = () => {
  const router = useRouter();

  const [confirmEmail, { isSuccess, isLoading, error }] = useConfirmEmailMutation();

  const { t } = useTranslation('registerPage');
  const handleClick = async () => {
    const confirmationCode = router.query.code;

    confirmEmail(confirmationCode as string);
  };

  if (isSuccess) {
    router.push(Routes.auth.RegistrationConfirmation);
  }

  if (error) {
    // router.push(Routes.auth.VerificationExpired);
  }

  console.log(isLoading);

  return (
    <Confirmation
      buttonTitle={t('email_confirmation.button_title')}
      isButtonDisabled={isLoading}
      title={t('email_confirmation.title')}
      message={t('email_confirmation.message')}
      clickCallback={handleClick}
      img="/images/confirmation_email.png"
    />
  );
};

ConfirmationPage.getLayout = getHeaderLayout;
export default ConfirmationPage;

export const getStaticProps: GetStaticProps = getStaticPropsWithLocale();
