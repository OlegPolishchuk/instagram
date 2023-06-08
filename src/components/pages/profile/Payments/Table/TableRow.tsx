import React from 'react';

import clsx from 'clsx';

import cls from '../Payments.module.css';

import { useFormatTranslations } from '@/shared/hooks';

interface Props {
  data: {
    id: number;
    date: string;
    price: string;
    subscriptionType: string;
    paymentType: string;
  };
  className?: string;
}
export const TableRow = ({ data, className }: Props) => {
  const { id, price, subscriptionType, paymentType, date } = data;

  const formatMessage = useFormatTranslations('profileSettingsPage', 'payments.table');

  return (
    <div key={id} className={clsx(cls.row, cls.row_col_4, className)}>
      <div className={cls.col_container}>
        <p className={cls.mobile_col_title}>{formatMessage('date')}:</p>
        {date}
      </div>

      <div className={clsx(cls.col_price, cls.col_container)}>
        <p className={cls.mobile_col_title}>{formatMessage('price')}:</p>
        {price}
      </div>

      <div className={cls.col_container}>
        <p className={cls.mobile_col_title}>{formatMessage('subscriptionType')}:</p>
        {subscriptionType}
      </div>

      <div className={cls.col_container}>
        <p className={cls.mobile_col_title}>{formatMessage('paymentsType')}:</p>
        {paymentType}
      </div>
    </div>
  );
};
