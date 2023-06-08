import React, { useRef } from 'react';

import { useTranslation } from 'next-i18next';

import cls from './ProfileSettingNav.module.css';

import { NavLink } from '@/components';
import { Routes } from '@/shared/constants';
import { useMediaQuery } from '@/shared/hooks';

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

  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const containerRef = useRef<HTMLDivElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  const activeLinkItemRef = useRef<HTMLDivElement>(null);

  const containerWidth = isSmallScreen ? containerRef?.current?.offsetWidth : '';

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isSmallScreen) {
      return;
    }

    if (containerRef.current && containerWidth) {
      const navItem = event.target as HTMLAnchorElement;

      const containerRect = containerRef.current.getBoundingClientRect();
      const navItemRect = navItem.getBoundingClientRect();

      const navItemOffset = navItemRect.left - containerRect.left;
      const containerCenter = containerWidth / 2;
      const navItemCenter = navItemOffset + navItemRect.width / 2;

      const scrollLeft = navItemCenter - containerCenter;

      containerRef.current.scrollLeft += scrollLeft;
    }
  };

  return (
    <nav className={cls.nav} ref={containerRef}>
      {settingRoutes.map(route => (
        <div key={route.path} className={cls.nav_item} ref={activeLinkItemRef}>
          <NavLink
            className={cls.link}
            activeClassName={cls.link_active}
            href={route.path}
            ref={activeLinkRef}
            onClick={handleLinkClick}
          >
            {t(`settings.${route.route}`)}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};
