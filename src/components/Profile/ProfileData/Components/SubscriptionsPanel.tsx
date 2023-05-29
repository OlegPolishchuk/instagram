import React from 'react';

import { useTranslation } from 'next-i18next';

import cls from '../ProfileData.module.css';

export const SubscriptionsPanel = () => {
  const { t } = useTranslation('profile');

  return (
    <div className={cls.subscriptions}>
      <div className={cls.subscriptions_item}>
        <p className={cls.item_number}>2218</p>
        <p>{t('profile_data.subscriptions')}</p>
      </div>

      <div className={cls.subscriptions_item}>
        <p className={cls.item_number}>2358</p>
        <p>{t('profile_data.subscribers')}</p>
      </div>

      <div className={cls.subscriptions_item}>
        <p className={cls.item_number}>2764</p>
        <p>{t('profile_data.publications')}</p>
      </div>
    </div>
  );
};
