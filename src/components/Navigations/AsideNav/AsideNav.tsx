import React from 'react';

import cls from './AsideNav.module.css';

import { Nav } from '@/components/Navigations/AsideNav/Nav/Nav';

export const AsideNav = () => {
  return (
    <aside className={cls.aside}>
      <Nav />
    </aside>
  );
};
