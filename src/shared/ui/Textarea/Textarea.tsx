import React, { ChangeEvent, ComponentPropsWithRef, FC, forwardRef } from 'react';

import clsx from 'clsx';

import cls from './Textarea.module.css';

interface Props extends ComponentPropsWithRef<'textarea'> {
  errorMessage?: string;
  callback?: (value: string) => void;
  fullWidth?: boolean;
  label?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      callback,
      label,
      fullWidth,
      errorMessage,
      className,
      disabled,
      onChange,
      placeholder,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange && onChange(event);

      callback && callback(event.target.value);
    };

    return (
      <div className={clsx(cls.wrapper, fullWidth && cls.full)}>
        <label className={cls.label}>
          {label && `${label}:`}

          <textarea
            ref={ref}
            className={clsx(
              cls.textarea,
              className && className,
              errorMessage && cls.error,
              fullWidth && cls.full,
            )}
            disabled={disabled}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          <span className={cls.errorMessage}>{errorMessage}</span>
        </label>
      </div>
    );
  },
);
