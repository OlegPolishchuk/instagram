import React from 'react';

import { AvatarSettings } from './avatarSettings/AvatarSettings';
import cls from './GeneralInfo.module.css';
import { ProfileForm } from './profileForm/ProfileForm';

import { Button } from '@/shared/ui';

export const GeneralInfo = () => {
  return (
    <div className={cls.container}>
      <div className={cls.data_container}>
        <AvatarSettings />

        <ProfileForm />
      </div>

      <Button className={cls.button_save}>Save Changes</Button>
    </div>
  );
};
