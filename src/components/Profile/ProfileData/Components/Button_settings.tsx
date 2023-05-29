import React from 'react';

import clsx from 'clsx';
import { IoMdSettings } from 'react-icons/io';

import cls from '@/components/Profile/ProfileData/ProfileData.module.css';
import { Button } from '@/shared/ui';

interface Props {
  className?: string;
}
export const ButtonSettings = ({ className }: Props) => {
  return (
    <Button
      className={clsx(cls.button_settings, className && className)}
      variant="default"
      leftIcon={<IoMdSettings />}
    >
      Profile Settings
    </Button>
  );
};
