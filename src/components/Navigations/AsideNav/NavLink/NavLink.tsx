import React, { ReactNode } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import cls from './NavLink.module.css';

interface Props {
  href: string;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
  activeClassName?: string;
}
export const NavLink = ({ href, children, icon, className, activeClassName }: Props) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (href: string) => {
    const pathNameList = currentPath.split('/');
    const endpoint = `/${href.split('/').reverse()[0]}`;
    const parentPath = `/${pathNameList[1]}`;

    return endpoint === parentPath || currentPath === href;
  };

  const LinkCLassName = isActive(href)
    ? clsx(cls.link, className, cls.active, activeClassName)
    : clsx(cls.link, className);

  return (
    <Link href={href} className={LinkCLassName}>
      {icon && <div className={cls.icon}>{icon}</div>}
      <span>{children}</span>
    </Link>
  );
};
