import React from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import cls from './Header.module.css';
import { Logo } from './Logo/Logo';

export const Header = () => {
  const router = useRouter();

  const { t } = useTranslation('common');

  const currentUrlParams = router.pathname;
  const handleChangeLocale = router.locale === 'en' ? 'ru' : 'en';

  return (
    <header className={cls.header}>
      <Logo />

      <div className={cls.header_controls}>
        <div className={cls.btn_change_locale}>
          <Link href={currentUrlParams} locale={handleChangeLocale}>
            {t('changeLocaleTo')}
          </Link>
        </div>
      </div>
    </header>
  );
};
