import React, { ReactNode } from 'react';

import cls from '../Form.module.css';

interface Props {
  children?: ReactNode;
}
export const FormFooter = ({ children }: Props) => {
  return <footer className={cls.form_footer}>{children}</footer>;
};
