import React from 'react';

import { AvatarSettings } from './avatarSettings/AvatarSettings';
import cls from './GeneralInfo.module.css';

import { Button, Input, Textarea } from '@/shared/ui';

export const GeneralInfo = () => {
  return (
    <div className={cls.container}>
      <AvatarSettings />
      <div>
        <form>
          <Input label="Username" />
          <Input label="First name" />
          <Input label="Last name" />
          <Input label="Date of birthday" type="date" />

          <Textarea placeholder="About me" />
        </form>
      </div>
    </div>
  );
};
