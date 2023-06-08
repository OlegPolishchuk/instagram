import React from 'react';

import clsx from 'clsx';

import cls from '@/components/pages/profile/account-management/AccountOptions.module.css';
import { AccountType } from '@/shared/constants';
import { useFormatTranslations } from '@/shared/hooks';
import { IconButton } from '@/shared/ui';
import { PaypalIcon, StripeIcon } from '@/shared/ui/Icons';

interface Props {
  accountData: {
    account: string;
    subscription: { title: string; cost: number; time: number };
  };
}
export const Controls = ({ accountData }: Props) => {
  const formatMessage = useFormatTranslations(
    'profileSettingsPage',
    'account_management.buttons_payments',
  );

  const showClassName = accountData.account === AccountType.Business ? cls.open : '';

  const handleButtonPaymentsClick = (paymentType: string) => {
    console.log({
      paymentType,
      ...accountData,
    });
  };

  return (
    <div className={clsx(cls.payment_wrapper, showClassName)}>
      <IconButton
        className={cls.button_payment}
        icon={<PaypalIcon />}
        onClick={() => handleButtonPaymentsClick('PayPal')}
      />

      <p>{formatMessage('title')}</p>

      <IconButton
        className={cls.button_payment}
        icon={<StripeIcon />}
        onClick={() => handleButtonPaymentsClick('Stripe')}
      />
    </div>
  );
};
