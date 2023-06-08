import React, { ComponentPropsWithRef, ReactNode } from 'react';

import clsx from 'clsx';

import cls from './IconButton.module.css';

interface Props extends ComponentPropsWithRef<'button'> {
  icon: ReactNode;
  className?: string;
}

export const IconButton = ({ icon, className, disabled, ...restProps }: Props) => {
  return (
    <button
      type="button"
      className={clsx(cls.button, className)}
      disabled={disabled}
      {...restProps}
    >
      {icon}
    </button>
  );
};
