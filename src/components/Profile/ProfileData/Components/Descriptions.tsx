import React from 'react';

import cls from '../ProfileData.module.css';

import { AboutMe } from './AboutMe';
import { ProfileDataHeader } from './ProfileDataHeader';
import { SubscriptionsPanel } from './SubscriptionsPanel';

import { Profile } from '@/store/api';

interface Props {
  profile: Profile;
}
export const Descriptions = ({ profile }: Props) => {
  const { aboutMe, userName } = profile;

  return (
    <div className={cls.description}>
      <ProfileDataHeader userName={userName} />

      <SubscriptionsPanel />

      <AboutMe aboutMe={aboutMe} className={cls.description_aboutMe} />
    </div>
  );
};
