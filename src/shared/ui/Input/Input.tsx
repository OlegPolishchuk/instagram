import React, { ComponentPropsWithRef, FC, KeyboardEvent, useState } from 'react';

import clsx from 'clsx';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import cls from './Input.module.css';

interface Props extends ComponentPropsWithRef<'input'> {
  error?: string;
  onEnterCallback?: () => void;
  label?: string;
}
export const Input: FC<Props> = ({
  type,
  error,
  label,
  disabled,
  onEnterCallback,
  ...restProps
}) => {
  const [inputType, setInputType] = useState(type);
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (onEnterCallback) {
      event.key === 'Enter' && onEnterCallback();
    }
  };

  const handleToggleSowPassword = () => {
    setShowPassword(!showPassword);
    setInputType(!showPassword ? 'text' : 'password');
  };

  return (
    <div className={clsx(cls.wrapper, disabled && cls.disabled, error && cls.error)}>
      <label className={cls.label}>
        {label}:
        <input
          className={cls.input}
          type={inputType}
          onKeyUp={handleKeyUp}
          disabled={disabled}
          {...restProps}
        />
      </label>

      {type === 'password' &&
        (showPassword ? (
          <BsEyeSlashFill className={cls.icon} onClick={handleToggleSowPassword} />
        ) : (
          <BsEyeFill className={cls.icon} onClick={handleToggleSowPassword} />
        ))}

      {error && <span className={cls.errorMessage}>{error}</span>}
    </div>
  );
};
