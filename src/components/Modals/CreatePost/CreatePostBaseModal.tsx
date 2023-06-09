import React from 'react';

import { BaseModal, Portal } from '@/shared/ui';
import { ModalLayout } from '@/shared/ui/Modals/BaseModal/ModalLayout/ModalLayout';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CreatePostBaseModal = ({ isOpen, setIsOpen }: Props) => {
  const handleConfirm = () => {
    console.log('confirm');
  };

  const handleCLose = () => {
    setIsOpen(false);
  };

  return (
    <BaseModal isOpen={isOpen} confirmCallback={handleConfirm}>
      Some content
    </BaseModal>
  );
};
