import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Confirmation, getHeaderLayout } from '@/components';
import { Routes } from '@/shared/constants';
import { getStaticPropsWithLocale } from '@/shared/utils';

const ConfirmationPage: InferGetStaticPropsType<typeof getStaticProps> = () => {
  const router = useRouter();

  const { t } = useTranslation('registerPage');
  const handleClick = async () => {
    await router.push(Routes.Register.ConfirmationEmail);
  };

  return (
    <Confirmation
      buttonTitle={t('email_confirmation.button_title')}
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
