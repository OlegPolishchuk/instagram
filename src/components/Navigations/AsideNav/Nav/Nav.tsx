import React from 'react';

import clsx from 'clsx';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { BiBookmark, BiHomeAlt } from 'react-icons/bi';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { RxPerson } from 'react-icons/rx';

import cls from '../AsideNav.module.css';
import { NavLink } from '../NavLink/NavLink';

import { ButtonCreatePost } from './ButtonCreatePost/ButtonCreatePost';

import { LogoutButton } from '@/components/Navigations/LogoutButton/LogoutButton';
import { Routes } from '@/shared/constants';
import { useFormatTranslations } from '@/shared/hooks';

interface Props {
  className?: string;
}

export const Nav = ({ className }: Props) => {
  const format = useFormatTranslations('common', 'nav');

  return (
    <nav className={clsx(cls.nav, className && className)}>
      <div className={cls.links_box}>
        <NavLink href={Routes.Home} icon={<BiHomeAlt />}>
          {format('home')}
        </NavLink>

        <ButtonCreatePost />

        <NavLink href={Routes.Profile.base} icon={<RxPerson />}>
          {format('profile')}
        </NavLink>
      </div>

      <div className={cls.links_box}>
        <NavLink href={Routes.Statistics} icon={<HiArrowTrendingUp />}>
          {format('statistics')}
        </NavLink>

        <NavLink href={Routes.Favorites} icon={<BiBookmark />}>
          {format('favorites')}
        </NavLink>
      </div>

      <LogoutButton />
    </nav>
  );
};
