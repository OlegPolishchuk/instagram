import React from 'react';

import clsx from 'clsx';

import cls from '../Payments.module.css';

import { useFormatTranslations } from '@/shared/hooks';

export const TableHead = () => {
  const formatMessage = useFormatTranslations('profileSettingsPage', 'payments.table');

  return (
    <div className={cls.table_head}>
      <div className={clsx(cls.row, cls.row_col_4)}>
        <div className={cls.col}>{formatMessage('date')}</div>
        <div className={cls.col}>{formatMessage('price')}</div>
        <div className={cls.col}>{formatMessage('subscriptionType')}</div>
        <div className={cls.col}>{formatMessage('paymentsType')}</div>
      </div>
    </div>
  );
};
