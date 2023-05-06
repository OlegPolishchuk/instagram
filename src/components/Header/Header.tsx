import React from 'react';

import cls from './Header.module.css';
import { Logo } from './Logo/Logo';

export const Header = () => {
  return (
    <header className={cls.header}>
      <Logo />
    </header>
  );
};
