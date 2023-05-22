import React, { ReactNode } from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import cls from '@/components/Header/Header.module.css';

interface Props {
  children?: ReactNode;
}

export const Controls = ({ children }: Props) => {
  const router = useRouter();

  const { t } = useTranslation('common');

  const currentUrlParams = router.pathname;
  const handleChangeLocale = router.locale === 'en' ? 'ru' : 'en';

  return (
    <div className={cls.header_controls}>
      <Link className={cls.btn_change_locale} href={currentUrlParams} locale={handleChangeLocale}>
        {t('changeLocaleTo')}
      </Link>

      {children}
    </div>
  );
};
