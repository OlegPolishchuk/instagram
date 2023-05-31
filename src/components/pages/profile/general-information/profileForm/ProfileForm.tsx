import React from 'react';

import { FieldErrors, UseFormRegister } from 'react-hook-form';

import cls from './ProfileForm.module.css';
import { ProfileFormData } from './profileFormSchema';

import { useFormatTranslations } from '@/shared/hooks';
import { Input, Textarea } from '@/shared/ui';
import { Profile } from '@/store/api';

interface Props {
  data: Profile;
  register: UseFormRegister<ProfileFormData>;
  disabled?: boolean;
  errors: FieldErrors<{
    firstName?: string | undefined;
    lastName?: string | undefined;
    city?: string | undefined;
    aboutMe?: string | undefined;
    userName: string;
    dateOfBirth: string;
  }>;
}
export const ProfileForm = ({ data, errors, register, disabled }: Props) => {
  const { aboutMe, userName, firstName, lastName, city, dateOfBirth } = data;

  const date = new Date(dateOfBirth);
  const formattedDate = date.toISOString().split('T')[0];

  const formatMessage = useFormatTranslations('profileSettingsPage', 'generalInfo.form');

  return (
    <div className={cls.container}>
      <form className={cls.form}>
        <Input
          label={formatMessage('username')}
          defaultValue={userName}
          {...register('userName')}
          errorMessage={errors?.userName?.message}
          disabled={disabled}
        />

        <Input
          label={formatMessage('firstName')}
          defaultValue={firstName}
          {...register('firstName')}
          disabled={disabled}
        />

        <Input
          label={formatMessage('lastName')}
          defaultValue={lastName}
          {...register('lastName')}
          disabled={disabled}
        />

        <Input
          label={formatMessage('city')}
          defaultValue={city}
          {...register('city')}
          disabled={disabled}
        />

        <Input
          label={formatMessage('dateOfBirth')}
          type="date"
          defaultValue={formattedDate}
          {...register('dateOfBirth')}
          errorMessage={errors?.dateOfBirth?.message}
          disabled={disabled}
        />

        <Textarea
          label={formatMessage('aboutMe')}
          fullWidth
          placeholder="About me"
          defaultValue={aboutMe}
          {...register('aboutMe')}
          disabled={disabled}
        />
      </form>
    </div>
  );
};
