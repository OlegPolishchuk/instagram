import React, { memo, ReactNode } from 'react';

import { ModalLayout } from './ModalLayout/ModalLayout';
import { useMount } from './useMount/UseMount';

import { Portal } from '@/shared/ui';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  closeCallback?: () => void;
  confirmCallback: () => void;
  status?: 'error' | 'success';
}
export const BaseModal = memo(
  ({ isOpen, children, closeCallback, confirmCallback, status }: Props) => {
    const { mounted } = useMount({ opened: isOpen });

    if (!mounted) {
      return null;
    }

    const handleClose = () => {
      if (closeCallback) {
        closeCallback();

        return;
      }

      confirmCallback();
    };

    return (
      <Portal>
        <ModalLayout onClose={handleClose} opened={isOpen} status={status}>
          {children}
        </ModalLayout>
      </Portal>
    );
  },
);
