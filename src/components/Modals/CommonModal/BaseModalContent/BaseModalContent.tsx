import React, { ReactNode } from 'react';

import cls from '../CommonModal.module.css';

import { ModalFooter } from './ModalFooter/ModalFooter';
import { ModalHeader } from './ModalHeader/ModalHeader';

interface Props {
  title?: string;
  handleClose: () => void;
  children?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  buttons?: ReactNode;
  confirmCallback: () => void;
  confirmBtnTitle?: string;
}
export const BaseModalContent = ({
  buttons,
  disabled,
  confirmCallback,
  confirmBtnTitle,
  title,
  isLoading,
  children,
  handleClose,
}: Props) => {
  return (
    <div>
      <ModalHeader title={title} handleClose={handleClose} />

      <div className={cls.modal_content}>{children}</div>

      <ModalFooter
        confirmCallback={confirmCallback}
        isLoading={isLoading}
        disabled={disabled}
        buttons={buttons}
        confirmBtnTitle={confirmBtnTitle}
      />
    </div>
  );
};
