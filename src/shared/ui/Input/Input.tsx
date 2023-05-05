import React, { ComponentPropsWithRef, FC, KeyboardEvent, useState } from 'react';

import clsx from 'clsx';

import cls from './Input.module.css';

import { EyeIcon, EyeOffIcon } from '@/shared/svg_icons';

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
          <EyeOffIcon className={cls.icon} onClick={handleToggleSowPassword} />
        ) : (
          <EyeIcon className={cls.icon} onClick={handleToggleSowPassword} />
        ))}

      {error && <span className={cls.errorMessage}>{error}</span>}
    </div>
  );
};
