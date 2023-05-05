import React, { ComponentPropsWithRef, FC } from 'react';

import clsx from 'clsx';
import { BsSearch } from 'react-icons/bs';

import cls from './SearchInput.module.css';

interface Props extends ComponentPropsWithRef<'input'> {
  callback?: (value: string) => void;
  errorMessage?: string;
  fullWidth?: boolean;
}

export const SearchInput: FC<Props> = ({
  errorMessage,
  disabled,
  callback,
  className,
  fullWidth = false,
  ...restProps
}) => {
  return (
    <div
      className={clsx(
        cls.wrapper,
        fullWidth && cls.full,
        errorMessage && cls.error,
        disabled && cls.disabled,
        className && className,
      )}
    >
      <BsSearch className={cls.icon} />
      <input
        className={clsx(cls.input)}
        {...restProps}
        type="text"
        placeholder="Search"
        disabled={disabled}
      />
      <span className={cls.errorMessage}>{errorMessage}</span>
    </div>
  );
};
