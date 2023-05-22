import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import { MobileMenuBtn } from './MobileMenuBtn/MobileMenuBtn';
import cls from './MobileNavigation.module.css';

import { Nav } from '@/components/Navigations/AsideNav/Nav/Nav';
import { useMediaQuery } from '@/shared/hooks';

export const MobileNavigations = () => {
  const isLargeScreen = useMediaQuery('(min-width: 769px)');

  const [open, setOpen] = useState(false);
  const [btnClassname, setBtnClassname] = useState('');

  const handleToggleNavigation = () => {
    setOpen(prevState => !prevState);
  };

  useEffect(() => {
    isLargeScreen && setOpen(false);
    setBtnClassname(clsx(cls.btn_menu, isLargeScreen && cls.hide, open && cls.btn_active));
  }, [isLargeScreen]);

  useEffect(() => {
    const handleWindowClick = () => {
      setOpen(false);
    };

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <>
      <MobileMenuBtn onClick={handleToggleNavigation} className={btnClassname} />

      <div className={clsx(cls.menu, open && cls.open)}>
        <Nav className={cls.mobileNav} />
      </div>
    </>
  );
};
