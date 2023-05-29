import React from 'react';

import clsx from 'clsx';

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
    >
      Profile Settings
    </Button>
  );
};
