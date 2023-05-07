import React, { ReactNode } from 'react';

import { ModalLayout } from './ModalLayout/ModalLayout';
import { useMount } from './useMount/UseMount';

import { Portal } from '@/shared/ui';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  title?: string;
  closeCallback: () => void;
}
export const BaseModal = ({ isOpen, title, children, closeCallback }: Props) => {
  const { mounted } = useMount({ opened: isOpen });

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <ModalLayout onClose={closeCallback} opened={isOpen} title={title}>
        {children}
      </ModalLayout>
    </Portal>
  );
};
