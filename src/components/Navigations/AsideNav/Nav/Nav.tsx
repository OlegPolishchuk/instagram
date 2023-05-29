import React from 'react';

import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { BiHomeAlt, BiBookmark } from 'react-icons/bi';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { RxPerson } from 'react-icons/rx';

import cls from '../AsideNav.module.css';
import { NavLink } from '../NavLink/NavLink';

import { LogoutButton } from '@/components/Navigations/LogoutButton/LogoutButton';
import { Routes } from '@/shared/constants';

interface Props {
  className?: string;
}

export const Nav = ({ className }: Props) => {
  const { t } = useTranslation('common');

  return (
    <nav className={clsx(cls.nav, className && className)}>
      <div className={cls.links_box}>
        <NavLink href={Routes.Home} icon={<BiHomeAlt />}>
          {t('nav.home')}
        </NavLink>

        <NavLink href={Routes.Create} icon={<AiOutlinePlusSquare />}>
          {t('nav.create')}
        </NavLink>

        <NavLink href={Routes.Profile.base} icon={<RxPerson />}>
          {t('nav.profile')}
        </NavLink>
      </div>

      <div className={cls.links_box}>
        <NavLink href={Routes.Statistics} icon={<HiArrowTrendingUp />}>
          {t('nav.statistics')}
        </NavLink>

        <NavLink href={Routes.Favorites} icon={<BiBookmark />}>
          {t('nav.favorites')}
        </NavLink>
      </div>

      <LogoutButton />
    </nav>
  );
};
