import React from 'react';

import { useTranslation } from 'next-i18next';

import cls from './ProfileSettingNav.module.css';

import { NavLink } from '@/components';
import { Routes } from '@/shared/constants';

interface SettingsRoutes {
  route: string;
  path: string;
}

const settingRoutes: SettingsRoutes[] = Object.entries(Routes.Profile.settings).map(
  route => ({
    route: route[0],
    path: route[1],
  }),
);

export const ProfileSettingsNav = () => {
  const { t } = useTranslation('profile');

  return (
    <nav className={cls.nav}>
      {settingRoutes.map(route => (
        <div key={route.path} className={cls.nav_item}>
          <NavLink
            className={cls.link}
            activeClassName={cls.link_active}
            href={route.path}
          >
            {t(`settings.${route.route}`)}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};
