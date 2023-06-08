import React, { forwardRef, ReactNode } from 'react';

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
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  id?: string;
}
export const NavLink = forwardRef<HTMLAnchorElement, Props>(
  ({ href, children, icon, onClick, id, className, activeClassName }, ref) => {
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
      <Link href={href} className={LinkCLassName} onClick={onClick} id={id} ref={ref}>
        {icon && <div className={cls.icon}>{icon}</div>}
        <span>{children}</span>
      </Link>
    );
  },
);
