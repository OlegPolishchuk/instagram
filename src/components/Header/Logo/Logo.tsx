import React from 'react';

import Link from 'next/link';

import cls from './Logo.module.css';

export const Logo = () => {
  return (
    <h1>
      <Link className={cls.logo} href="/">
        Instagram
      </Link>
    </h1>
  );
};
