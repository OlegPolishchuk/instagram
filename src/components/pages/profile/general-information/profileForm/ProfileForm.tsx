import React from 'react';

import { FieldErrors, UseFormRegister } from 'react-hook-form';

import cls from './ProfileForm.module.css';
import { ProfileFormData } from './profileFormSchema';

import { DatePicker } from '@/components/DatePicker/DatePicker';
import { useFormatTranslations } from '@/shared/hooks';
import { Input, Textarea } from '@/shared/ui';
import { formatDate } from '@/shared/utils/formatDate';
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
  dateOfBirth: string;
  setDateOfBirth: React.Dispatch<React.SetStateAction<string>>;
}
export const ProfileForm = ({
  data,
  errors,
  register,
  disabled,
  setDateOfBirth,
  dateOfBirth,
}: Props) => {
  const { aboutMe, userName, firstName, lastName, city } = data;

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

        <DatePicker
          setDateOfBirth={setDateOfBirth}
          dateOfBirth={dateOfBirth}
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
