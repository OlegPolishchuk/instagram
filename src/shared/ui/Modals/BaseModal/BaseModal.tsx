import React, { memo, ReactNode } from 'react';

import { ModalLayout } from './ModalLayout/ModalLayout';
import { useMount } from './useMount/UseMount';

import { Portal } from '@/shared/ui';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  title?: string;
  closeCallback?: () => void;
  confirmCallback: () => void;
  status?: 'error' | 'success';
  isLoading?: boolean;
  buttons?: ReactNode;
  confirmBtnTitle?: string;
}
export const BaseModal = memo(
  ({
    isOpen,
    title,
    isLoading,
    children,
    closeCallback,
    confirmCallback,
    confirmBtnTitle,
    buttons,
    status,
  }: Props) => {
    const { mounted } = useMount({ opened: isOpen });

    if (!mounted) {
      return null;
    }

    return (
      <Portal>
        <ModalLayout
          onClose={closeCallback}
          onConfirm={confirmCallback}
          opened={isOpen}
          title={title}
          status={status}
          isLoading={isLoading}
          buttons={buttons}
          confirmBtnTitle={confirmBtnTitle}
        >
          {children}
        </ModalLayout>
      </Portal>
    );
  },
);
