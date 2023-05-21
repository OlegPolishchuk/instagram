import React, { ReactNode } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import cls from './NavLink.module.css';

interface Props {
  href: string;
  children?: ReactNode;
  icon?: ReactNode;
}
export const NavLink = ({ href, children, icon }: Props) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const LinkCLassName = href === currentPath ? clsx(cls.active, cls.link) : cls.link;

  return (
    <Link href={href} className={LinkCLassName}>
      <div className={cls.icon}>{icon}</div>
      <span>{children}</span>
    </Link>
  );
};
