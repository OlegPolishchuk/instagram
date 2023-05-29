import React, { ComponentPropsWithRef, forwardRef, KeyboardEvent, useState } from 'react';

import clsx from 'clsx';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import cls from './Input.module.css';

interface Props extends ComponentPropsWithRef<'input'> {
  errorMessage?: string;
  onEnterCallback?: () => void;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, errorMessage, label, disabled, onEnterCallback, ...restProps }, ref) => {
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
      <div
        className={clsx(cls.wrapper, disabled && cls.disabled, errorMessage && cls.error)}
      >
        <label className={cls.label}>
          {label}:
          <input
            ref={ref}
            className={cls.input}
            type={inputType}
            onKeyUp={handleKeyUp}
            disabled={disabled}
            {...restProps}
          />
          {type === 'password' &&
            (showPassword ? (
              <BsEyeSlashFill className={cls.icon} onClick={handleToggleSowPassword} />
            ) : (
              <BsEyeFill className={cls.icon} onClick={handleToggleSowPassword} />
            ))}
          {errorMessage && <span className={cls.errorMessage}>{errorMessage}</span>}
        </label>
      </div>
    );
  },
);
