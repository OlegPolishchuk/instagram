import React, { ReactNode } from 'react';

import cls from '../../CommonModal.module.css';

import { Button } from '@/shared/ui';

interface Props {
  isLoading?: boolean;
  disabled?: boolean;
  confirmBtnTitle?: string;
  confirmCallback: () => void;
  buttons?: ReactNode;
}
export const ModalFooter = ({
  confirmCallback,
  confirmBtnTitle,
  disabled,
  isLoading,
  buttons,
}: Props) => {
  return (
    <footer className={cls.modal_footer}>
      <Button onClick={confirmCallback} isLoading={isLoading} disabled={disabled}>
        {confirmBtnTitle || 'OK'}
      </Button>

      {buttons && <>{buttons}</>}
    </footer>
  );
};
