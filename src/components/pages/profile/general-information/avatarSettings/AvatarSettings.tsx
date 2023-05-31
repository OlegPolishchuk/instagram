import React, { useEffect, useState } from 'react';

import { useTranslation } from 'next-i18next';
import { IoMdCloseCircle } from 'react-icons/io';
import { toast } from 'react-toastify';

import cls from './AvatarSettings.module.css';

import { Avatar } from '@/components';
import { ButtonAvatarUpload } from '@/components/pages/profile/general-information/avatarSettings/ButtonAvatarUpload/ButtonAvatarUpload';
import { useDeleteAvatarMutation, useUploadAvatarMutation } from '@/store/api';

interface Props {
  src: string;
}
export const AvatarSettings = ({ src }: Props) => {
  const { t } = useTranslation('profileSettingsPage');

  const [handleUpload, { isError: uploadError, isLoading: isUploadLoading }] =
    useUploadAvatarMutation();
  const [handleDelete, { isLoading: isDeleteLoading }] = useDeleteAvatarMutation();

  const [uploadedAvatarSrc, setUploadedAvatarSrc] = useState('');
  const [currentAvatarSrc, setCurrentAvatarSrc] = useState(src);

  const handleUploadAvatar = async (file: FormData, src: string) => {
    setUploadedAvatarSrc(src);
    await handleUpload(file);
  };

  const handleDeleteAvatar = () => {
    if (!currentAvatarSrc) {
      return;
    }

    setCurrentAvatarSrc('');
    handleDelete();
  };

  useEffect(() => {
    if (uploadedAvatarSrc) {
      setCurrentAvatarSrc(uploadedAvatarSrc);
    }
  }, [uploadedAvatarSrc]);

  if (uploadError) {
    toast.error(t('generalInfo.avatar.errors.upload'));
  }

  return (
    <aside>
      <div className={cls.avatar_wrapper}>
        <Avatar className={cls.avatar} imgSrc={currentAvatarSrc} />

        <button
          type="button"
          className={cls.button_delete}
          onClick={handleDeleteAvatar}
          disabled={isDeleteLoading}
        >
          <IoMdCloseCircle className={cls.button_delete_icon} />
        </button>
      </div>

      <ButtonAvatarUpload onUpload={handleUploadAvatar} isLoading={isUploadLoading} />
    </aside>
  );
};
