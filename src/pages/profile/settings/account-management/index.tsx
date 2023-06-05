import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import cls from './AccountManagement.module.css';

import { getProfileSettingsLayout } from '@/components/Layouts';
import { useFormatTranslations } from '@/shared/hooks';
import { Checkbox } from '@/shared/ui';

const AccountManagement: InferGetServerSidePropsType<typeof getServerSideProps> = () => {
  const formatMessage = useFormatTranslations(
    'profileSettingsPage',
    'account_management',
  );

  return (
    <div>
      <h3 className={cls.title}>{formatMessage('title')}</h3>

      <div className={cls.container}>
        <Checkbox label={formatMessage('checkboxes.personal')} />
        <Checkbox label={formatMessage('checkboxes.business')} />
      </div>
    </div>
  );
};

AccountManagement.getLayout = getProfileSettingsLayout;
export default AccountManagement;

export const getServerSideProps: GetServerSideProps = async ({
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
