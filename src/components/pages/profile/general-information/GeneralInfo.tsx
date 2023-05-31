import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { AvatarSettings } from './avatarSettings/AvatarSettings';
import cls from './GeneralInfo.module.css';
import { ProfileForm } from './profileForm/ProfileForm';
import { ProfileFormData, ProfileFormSchema } from './profileForm/profileFormSchema';

import { Button } from '@/shared/ui';
import {
  ProfileUpdateData,
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '@/store/api';

export const GeneralInfo = () => {
  const { data } = useGetProfileQuery();
  const [handleUpdateProfile, { isError, isLoading }] = useUpdateProfileMutation();

  const { t } = useTranslation('profileSettingsPage');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({ resolver: yupResolver(ProfileFormSchema) });

  if (!data) {
    return null;
  }

  if (isError) {
    toast.error(t('generalInfo.error.message'));
  }

  const { avatars } = data;
  const profileAvatar = avatars.length ? avatars[0].url : '';

  const handleSave = (data: ProfileFormData) => {
    handleUpdateProfile(data as ProfileUpdateData);
  };

  return (
    <div className={cls.container}>
      <div className={cls.data_container}>
        <AvatarSettings src={profileAvatar} />

        <ProfileForm
          data={data}
          register={register}
          errors={errors}
          disabled={isLoading}
        />
      </div>

      <Button
        className={cls.button_save}
        onClick={handleSubmit(handleSave)}
        disabled={isLoading}
      >
        Save Changes
      </Button>
    </div>
  );
};
