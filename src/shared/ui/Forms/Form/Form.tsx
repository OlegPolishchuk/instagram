import React, { ComponentPropsWithRef, ReactNode } from 'react';

import cls from './Form.module.css';

interface Props extends ComponentPropsWithRef<'form'> {
  children?: ReactNode;
  title?: string;
  status?: 'error' | 'success' | 'normal';
}
export const Form = ({ children, title, status, ...restProps }: Props) => {
  return (
    <form className={cls.form} {...restProps}>
      <h2 className={cls.form_title}>{title}</h2>
      {children}
    </form>
  );
};
