import React, { ChangeEvent, ComponentPropsWithRef, FC } from 'react';

import clsx from 'clsx';

import cls from './Textarea.module.css';

interface Props extends ComponentPropsWithRef<'textarea'> {
  errorMessage?: string;
  callback?: (value: string) => void;
  fullWidth?: boolean;
}

export const Textarea: FC<Props> = ({
  callback,
  fullWidth,
  errorMessage,
  className,
  disabled,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(event);

    callback && callback(event.target.value);
  };

  return (
    <div className={clsx(cls.wrapper, fullWidth && cls.full)}>
      <textarea
        className={clsx(cls.textarea, className && className, errorMessage && cls.error)}
        disabled={disabled}
        onChange={handleChange}
        placeholder="Some text"
      />
      <span className={cls.errorMessage}>{errorMessage}</span>
    </div>
  );
};
