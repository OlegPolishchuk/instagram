import React from 'react';

import { ButtonSettings, Descriptions } from './Components';
import cls from './ProfileData.module.css';

import { Avatar } from '@/components';
import { useMediaQuery } from '@/shared/hooks';
import { Profile } from '@/store/api';

interface Props {
  profile: Profile;
}

export const ProfileData = ({ profile }: Props) => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const { avatars } = profile;
  const avatar = avatars.length ? avatars[0].url : '';

  return (
    <div className={cls.container}>
      {isSmallScreen && <ButtonSettings className={cls.button_settings_smallScreen} />}

      <Avatar imgSrc={avatar} className={cls.avatar} />
      <Descriptions profile={profile} />
    </div>
  );
};
