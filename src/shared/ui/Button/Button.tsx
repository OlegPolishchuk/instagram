import React, { ComponentPropsWithRef, FC, ReactNode } from 'react';

import clsx from 'clsx';

import cls from './Button.module.css';

interface Props extends ComponentPropsWithRef<'button'> {
  variant?: 'outlined' | 'filled' | 'default' | 'subtle';
  fullwidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button: FC<Props> = ({
  variant = 'filled',
  fullwidth = false,
  disabled,
  leftIcon,
  rightIcon,
  type,
  children,
  ...restProps
}) => {
  return (
    <button
      className={clsx([
        cls.button,
        cls[variant],
        disabled && cls.disabled,
        fullwidth && cls.fullwidth,
      ])}
      type={type === 'submit' ? 'submit' : 'button'}
      {...restProps}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};
