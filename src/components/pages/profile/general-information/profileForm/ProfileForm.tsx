import React from 'react';

import cls from './ProfileForm.module.css';

import { Input, Textarea } from '@/shared/ui';

export const ProfileForm = () => {
  return (
    <div className={cls.container}>
      <form className={cls.form}>
        <Input label="Username" />
        <Input label="First name" />
        <Input label="Last name" />
        <Input label="Date of birthday" type="date" />

        <Textarea label="About me" fullWidth placeholder="About me" />
      </form>
    </div>
  );
};
