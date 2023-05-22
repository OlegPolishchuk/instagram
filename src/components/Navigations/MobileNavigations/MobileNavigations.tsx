import React, { useState } from 'react';

import { BiDotsHorizontalRounded } from 'react-icons/bi';

import cls from './MobileNavigation.module.css';

import { Nav } from '@/components/Navigations/AsideNav/Nav/Nav';
import { Button } from '@/shared/ui';

export const MobileNavigations = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        className={cls.btn_menu}
        variant="subtle"
        leftIcon={<BiDotsHorizontalRounded />}
      />

      <div className={cls.menu}>
        <Nav className={cls.mobileNav} />
      </div>
    </div>
  );
};
