import React from 'react';

import Image from 'next/image';

import cls from './AvatarModal.module.css';

import { CommonModal } from '@/components/Modals';
import { BaseModal } from '@/shared/ui';

export interface UploadedAvatar {
  file: FormData | null;
  src: string;
}
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uploadedAvatar: UploadedAvatar;

  uploadToServer: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}
export const AvatarModal = ({
  isOpen,
  setIsOpen,
  uploadedAvatar,
  uploadToServer,
  isLoading,
  disabled,
}: Props) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <CommonModal
      isOpen={isOpen}
      confirmCallback={uploadToServer}
      closeCallback={handleCloseModal}
      title="Add a Profile Photo"
      isLoading={isLoading}
      disabled={disabled}
    >
      <div className={cls.wrapper}>
        <Image
          className={cls.image}
          src={uploadedAvatar.src}
          alt="new user avatar"
          fill
        />
      </div>
    </CommonModal>
  );
};
