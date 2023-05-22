import React, { ReactNode } from 'react';

import { Controls } from './Controls/Controls';
import cls from './Header.module.css';
import { Logo } from './Logo/Logo';

interface Props {
  children?: ReactNode;
}
export const Header = ({ children }: Props) => {
  return (
    <header className={cls.header}>
      <Logo />

      {children}
    </header>
  );
};
