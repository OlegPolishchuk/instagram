import React from 'react';

import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { MdOutlineLogout } from 'react-icons/md';
import { RxPerson } from 'react-icons/rx';

import cls from '../AsideNav.module.css';
import { NavLink } from '../NavLink/NavLink';

import { Routes } from '@/shared/constants';
import { Button } from '@/shared/ui';

interface Props {
  className?: string;
}

export const Nav = ({ className }: Props) => {
  const router = useRouter();

  const { t } = useTranslation('common');

  const currentUrlParams = router.pathname;
  const handleChangeLocale = router.locale === 'en' ? 'ru' : 'en';

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
