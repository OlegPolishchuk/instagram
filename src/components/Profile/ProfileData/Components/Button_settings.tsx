import React from 'react';

import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { IoMdSettings } from 'react-icons/io';

import cls from '@/components/Profile/ProfileData/ProfileData.module.css';
import { Routes } from '@/shared/constants';
import { Button } from '@/shared/ui';

interface Props {
  className?: string;
}
export const ButtonSettings = ({ className }: Props) => {
  const router = useRouter();
  const { t } = useTranslation('profile');

  const handleNavigateToSettings = async () => {
    await router.push(Routes.Profile.settings.GeneralInfo);
  };

  return (
    <Button
      className={clsx(cls.button_settings, className && className)}
      variant="default"
      leftIcon={<IoMdSettings />}
      onClick={handleNavigateToSettings}
    >
      {t('button_settings.title')}
    </Button>
  );
};
