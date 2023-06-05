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
    <div className={clsx(cls.wrapper, className)}>
      <label className={cls.label_wrapper}>
        <div className={cls.checkbox_container}>
          <input
            className={cls.checkbox}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            {...restProps}
          />
        </div>

        <span className={cls.label}>{label}</span>
      </label>
    </div>
  );
};
