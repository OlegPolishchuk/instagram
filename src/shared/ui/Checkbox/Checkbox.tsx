import React, { ChangeEvent, ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import cls from './Checkbox.module.css';

interface Props extends ComponentPropsWithRef<'input'> {
  onChangeCallback?: (checked: boolean) => void;
  label?: string;
}

export const Checkbox = ({
  checked,
  onChangeCallback,
  disabled,
  className,
  onChange,
  label,
  type,
  ...restProps
}: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);

    onChangeCallback && onChangeCallback(event.target.checked);
  };

  return (
    <label className={cls.wrapper}>
      <div className={cls.checkbox_container}>
        <input
          className={clsx(cls.checkbox, className && className)}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          {...restProps}
        />
      </div>

      <span className={cls.label}>{label}</span>
    </label>
  );
};
