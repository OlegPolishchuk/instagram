import React, { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { AvatarSettings } from './avatarSettings/AvatarSettings';
import cls from './GeneralInfo.module.css';
import { ProfileForm } from './profileForm/ProfileForm';
import { ProfileFormData, ProfileFormSchema } from './profileForm/profileFormSchema';

import { useFormatTranslations } from '@/shared/hooks';
import { Button } from '@/shared/ui';
import { formatDate } from '@/shared/utils/formatDate';
import {
  ProfileUpdateData,
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '@/store/api';

export const GeneralInfo = () => {
  const { data, isSuccess } = useGetProfileQuery();
  const [handleUpdateProfile, { isError, isLoading }] = useUpdateProfileMutation();

  const [dateOfBirth, setDateOfBirth] = useState('');

  const formatMessage = useFormatTranslations('profileSettingsPage', 'generalInfo');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({ resolver: yupResolver(ProfileFormSchema) });

  useEffect(() => {
    if (isSuccess) {
      setDateOfBirth(formatDate(data.dateOfBirth));
    }
  }, [isSuccess]);

  if (!data) {
    return null;
  }

  if (isError) {
    toast.error(formatMessage('error.message'));
  }

  const { avatars } = data;
  const profileAvatar = avatars.length ? avatars[0].url : '';

  const handleSave = (data: ProfileFormData) => {
    const newData = {
      ...data,
      dateOfBirth,
    } as ProfileUpdateData;

    handleUpdateProfile(newData);
  };

  return (
    <div className={cls.container}>
      <div className={cls.data_container}>
        <AvatarSettings src={profileAvatar} />

        <ProfileForm
          key={data.dateOfBirth}
          data={data}
          register={register}
          errors={errors}
          disabled={isLoading}
          dateOfBirth={dateOfBirth || ''}
          setDateOfBirth={setDateOfBirth}
        />
      </div>

      <Button
        className={cls.button_save}
        onClick={handleSubmit(handleSave)}
        disabled={isLoading}
      >
        {formatMessage('button_save')}
      </Button>
    </div>
  );
};
