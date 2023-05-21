import React from 'react';

import { Controls } from './Controls/Controls';
import cls from './Header.module.css';
import { Logo } from './Logo/Logo';

export const Header = () => {
  return (
    <header className={cls.header}>
      <Logo />

      <Controls />
    </header>
  );
};
