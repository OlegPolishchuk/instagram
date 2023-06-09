import React, { ReactNode } from 'react';

import { BaseModalContent } from '@/components/Modals/CommonModal/BaseModalContent/BaseModalContent';
import { BaseModal } from '@/shared/ui';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  title?: string;
  closeCallback?: () => void;
  confirmCallback: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  buttons?: ReactNode;
  confirmBtnTitle?: string;
  status?: 'success' | 'error';
}
export const CommonModal = ({
  buttons,
  disabled,
  confirmBtnTitle,
  confirmCallback,
  title,
  isLoading,
  closeCallback,
  children,
  isOpen,
  status,
}: Props) => {
  const handleClose = () => {
    if (closeCallback) {
      closeCallback();

      return;
    }

    confirmCallback();
  };

  return (
    <BaseModal isOpen={isOpen} confirmCallback={confirmCallback} status={status}>
      <BaseModalContent
        title={title}
        handleClose={handleClose}
        confirmCallback={confirmCallback}
        confirmBtnTitle={confirmBtnTitle}
        buttons={buttons}
        disabled={disabled}
        isLoading={isLoading}
      >
        {children}
      </BaseModalContent>
    </BaseModal>
  );
};
