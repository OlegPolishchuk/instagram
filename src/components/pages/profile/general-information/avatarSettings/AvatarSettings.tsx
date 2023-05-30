import React, { useEffect, useState } from 'react';

import { IoMdCloseCircle } from 'react-icons/io';

import cls from './AvatarSettings.module.css';

import { Avatar } from '@/components';
import { ButtonAvatarUpload } from '@/components/pages/profile/general-information/avatarSettings/ButtonAvatarUpload/ButtonAvatarUpload';
import { useDeleteAvatarMutation, useUploadAvatarMutation } from '@/store/api';

interface Props {
  src: string;
}
export const AvatarSettings = ({ src }: Props) => {
  const [handleUpload, { isSuccess: isUploadSuccess, isLoading: isUploadLoading }] =
    useUploadAvatarMutation();
  const [handleDelete] = useDeleteAvatarMutation();

  const [uploadedAvatarSrc, setUploadedAvatarSrc] = useState('');
  const [currentAvatarSrc, setCurrentAvatarSrc] = useState(src);

  const handleUploadAvatar = async (file: FormData, src: string) => {
    setUploadedAvatarSrc(src);
    await handleUpload(file);
  };

  useEffect(() => {
    if (isUploadSuccess) {
      setCurrentAvatarSrc(uploadedAvatarSrc);
    }
  }, [isUploadSuccess]);

  return (
    <aside>
      <div className={cls.avatar_wrapper}>
        <Avatar className={cls.avatar} imgSrc={currentAvatarSrc} />

        <button type="button" className={cls.button_delete}>
          <IoMdCloseCircle className={cls.button_delete_icon} />
        </button>
      </div>

      <ButtonAvatarUpload onUpload={handleUploadAvatar} isLoading={isUploadLoading} />
    </aside>
  );
};
