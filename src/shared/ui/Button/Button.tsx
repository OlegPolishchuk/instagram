import React, { ComponentPropsWithRef, FC, ReactNode } from 'react';

import clsx from 'clsx';

import { Spinner } from '../Spinner/Spinner';

import cls from './Button.module.css';

interface Props extends ComponentPropsWithRef<'button'> {
  variant?: 'outlined' | 'filled' | 'default' | 'subtle';
  fullwidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
}

export const Button: FC<Props> = ({
  variant = 'filled',
  fullwidth = false,
  disabled,
  leftIcon,
  rightIcon,
  type,
  children,
  className,
  isLoading,
  ...restProps
}) => {
  return (
    <button
      className={clsx([
        cls.button,
        cls[variant],
        disabled && cls.disabled,
        fullwidth && cls.fullwidth,
        className && className,
      ])}
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={disabled}
      {...restProps}
    >
      <p className={cls.icon}> {leftIcon && leftIcon}</p>
      {children}
      <p className={cls.icon}>{rightIcon && rightIcon}</p>
      {isLoading && <Spinner />}
    </button>
  );
};
