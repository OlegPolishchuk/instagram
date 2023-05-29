import React from 'react';

import cls from '../ProfileData.module.css';

import { ButtonSettings } from './Button_settings';

import { useMediaQuery } from '@/shared/hooks';

interface Props {
  userName: string;
}
export const ProfileDataHeader = ({ userName }: Props) => {
  const IsLargeScreen = useMediaQuery('(min-width: 769px)');

  return (
    <div className={cls.description_header}>
      <h1>{userName}</h1>

      {IsLargeScreen && <ButtonSettings />}
    </div>
  );
};
