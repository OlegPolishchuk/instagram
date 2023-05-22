import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import cls from './MobileNavigation.module.css';

import { Nav } from '@/components/Navigations/AsideNav/Nav/Nav';
import { MobileMenuBtn } from '@/components/Navigations/MobileNavigations/MobileMenuBtn/MobileMenuBtn';
import { useMediaQuery } from '@/shared/hooks';

export const MobileNavigations = () => {
  const isLargeScreen = useMediaQuery('(min-width: 769px)');

  const [open, setOpen] = useState(false);

  const handleToggleNavigation = () => {
    setOpen(prevState => !prevState);
  };

  useEffect(() => {
    isLargeScreen && setOpen(false);
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
    <div>
      <MobileMenuBtn
        onClick={handleToggleNavigation}
        className={clsx(cls.btn_menu, isLargeScreen && cls.hide, open && cls.btn_active)}
      />

      <div className={clsx(cls.menu, open && cls.open)}>
        <Nav className={cls.mobileNav} />
      </div>
    </div>
  );
};
