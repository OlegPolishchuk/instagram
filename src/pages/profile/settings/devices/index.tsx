import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import cls from './devices.module.css';

import { getProfileSettingsLayout } from '@/components/Layouts';
import { ActiveDevices, CurrentDevice } from '@/components/pages';
import { useFormatTranslations } from '@/shared/hooks';
import { Button } from '@/shared/ui';

const Devices: InferGetServerSidePropsType<typeof getServerSideProps> = () => {
  const formatMessage = useFormatTranslations('profileSettingsPage');

  return (
    <div className={cls.container}>
      <CurrentDevice />

      <Button variant="outlined" className={cls.button_terminate}>
        {formatMessage('devices.button_terminate')}
      </Button>

      <ActiveDevices />
    </div>
  );
};

Devices.getLayout = getProfileSettingsLayout;
export default Devices;

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
