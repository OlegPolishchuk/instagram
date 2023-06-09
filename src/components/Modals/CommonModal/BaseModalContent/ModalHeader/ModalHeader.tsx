import React from 'react';

import { MdOutlineClose } from 'react-icons/md';

import cls from '../../CommonModal.module.css';

interface Props {
  title?: string;
  handleClose: () => void;
}
export const ModalHeader = ({ handleClose, title }: Props) => {
  return (
    <header className={cls.modal_header}>
      <h2 className={cls.title}>{title}</h2>

      <MdOutlineClose className={cls.modal_btn_close} onClick={handleClose} />
    </header>
  );
};
