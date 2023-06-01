import React, { Dispatch, forwardRef, SetStateAction } from 'react';

import clsx from 'clsx';
import { FaRegCalendarAlt } from 'react-icons/fa';

import cls from './DatePickerButton.module.css';

interface Props {
  title: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const DatePickerButton = forwardRef<HTMLButtonElement, Props>(
  ({ setOpen, title }, ref) => {
    const handleOpen = () => {
      setOpen(true);
    };

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(cls.button, cls.container)}
        onClick={handleOpen}
      >
        <span className={cls.button_title}>{title}</span>
        <FaRegCalendarAlt className={cls.button_icon} />
      </button>
    );
  },
);
