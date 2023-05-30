import React from 'react';

import { FieldErrors, UseFormRegister } from 'react-hook-form';

import cls from './ProfileForm.module.css';
import { ProfileFormData } from './profileFormSchema';

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

  return (
    <div className={cls.container}>
      <form className={cls.form}>
        <Input
          label="Username"
          defaultValue={userName}
          {...register('userName')}
          errorMessage={errors?.userName?.message}
          disabled={disabled}
        />

        <Input
          label="First name"
          defaultValue={firstName}
          {...register('firstName')}
          disabled={disabled}
        />

        <Input
          label="Last name"
          defaultValue={lastName}
          {...register('lastName')}
          disabled={disabled}
        />

        <Input
          label="City"
          defaultValue={city}
          {...register('city')}
          disabled={disabled}
        />

        <Input
          label="Date of birthday"
          type="date"
          defaultValue={formattedDate}
          {...register('dateOfBirth')}
          errorMessage={errors?.dateOfBirth?.message}
          disabled={disabled}
        />

        <Textarea
          label="About me"
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
