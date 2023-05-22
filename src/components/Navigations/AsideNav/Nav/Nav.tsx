import React from 'react';

import clsx from 'clsx';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { MdOutlineLogout } from 'react-icons/md';
import { RxPerson } from 'react-icons/rx';

import cls from '@/components/Navigations/AsideNav/AsideNav.module.css';
import { NavLink } from '@/components/Navigations/AsideNav/NavLink/NavLink';
import { Routes } from '@/shared/constants';
import { Button } from '@/shared/ui';

interface Props {
  className?: string;
}

export const Nav = ({ className }: Props) => {
  return (
    <nav className={clsx(cls.nav, className && className)}>
      <div className={cls.links_box}>
        <NavLink href={Routes.Home} icon={<BiHomeAlt />}>
          Home
        </NavLink>

        <NavLink href={Routes.Create} icon={<AiOutlinePlusSquare />}>
          Create
        </NavLink>

        <NavLink href={Routes.Profile.base} icon={<RxPerson />}>
          My Profile
        </NavLink>
      </div>

      <div className={cls.links_box}>
        <NavLink href={Routes.Statistics} icon={<HiArrowTrendingUp />}>
          Statistics
        </NavLink>
      </div>

      <Button className={cls.btn_logout} variant="subtle" leftIcon={<MdOutlineLogout />}>
        Logout
      </Button>
    </nav>
  );
};
