import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';

import { Confirmation, getHeaderLayout } from '@/components';
import { getStaticPropsWithLocale } from '@/shared/utils';

const VerificationExpired: InferGetStaticPropsType<typeof getStaticProps> = () => {
  const { t } = useTranslation('registerPage');

  const handleResendVerification = () => {
    console.log('s');
  };

  return (
    <Confirmation
      clickCallback={handleResendVerification}
      buttonTitle={t('email_verification.button_title')}
      title={t('email_verification.title')}
      message={t('email_verification.message')}
      img="/images/expired_time_mobile.png"
    />
  );
};

VerificationExpired.getLayout = getHeaderLayout;
export default VerificationExpired;

export const getStaticProps: GetStaticProps = getStaticPropsWithLocale();
