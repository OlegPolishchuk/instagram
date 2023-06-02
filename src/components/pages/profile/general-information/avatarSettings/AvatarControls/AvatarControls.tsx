import React, { useState } from 'react';

import { AvatarModal, UploadedAvatar } from '../AvatarModal/AvatarModal';
import { ButtonAvatarUpload } from '../ButtonAvatarUpload/ButtonAvatarUpload';
import { AvatarState } from '../types';

import { useUploadAvatarMutation } from '@/store/api';

interface Props {
  setState: React.Dispatch<React.SetStateAction<AvatarState>>;
}
export const AvatarControls = ({ setState }: Props) => {
  const [handleUpload, { isError, isLoading: isUploadLoading }] =
    useUploadAvatarMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAvatar, setNewAvatar] = useState<UploadedAvatar>({ file: null, src: '' });

  const handleUploadLocalAvatar = (file: FormData, src: string) => {
    setNewAvatar({ file, src });
    setIsModalOpen(true);
  };

  const handleUploadAvatarToServer = async () => {
    setState(prevState => ({ ...prevState, avatarSrc: newAvatar.src, isLoading: true }));
    setIsModalOpen(false);

    await handleUpload(newAvatar.file as FormData);
    setState(prevState => ({ ...prevState, isLoading: false }));
  };

  return (
    <>
      <ButtonAvatarUpload onUpload={handleUploadLocalAvatar} />

      <AvatarModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        uploadedAvatar={newAvatar}
        uploadToServer={handleUploadAvatarToServer}
        disabled={isUploadLoading}
      />
    </>
  );
};
