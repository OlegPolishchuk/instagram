import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { Controls } from './Controls/Controls';
import cls from './Header.module.css';
import { Logo } from './Logo/Logo';

interface Props {
  children?: ReactNode;
}
export const Header = ({ children }: Props) => {
  return (
    <header className={cls.header}>
      <div className={clsx('container', cls.header_container)}>
        <Logo />

        <Controls>{children}</Controls>
      </div>
    </header>
  );
};
