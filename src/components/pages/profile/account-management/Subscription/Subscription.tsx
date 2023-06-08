import React, { ChangeEvent } from 'react';

import clsx from 'clsx';

import cls from '@/components/pages/profile/account-management/AccountOptions.module.css';
import { SubscriptionType } from '@/shared/constants';
import { useFormatTranslations } from '@/shared/hooks';
import { Checkbox } from '@/shared/ui';

interface Props {
  isOpen: boolean;
  value: { account: string; subscription: { title: string; cost: number; time: number } };
  setValue: React.Dispatch<
    React.SetStateAction<{
      account: string;
      subscription: { title: string; cost: number; time: number };
    }>
  >;
}

export const Subscription = ({ isOpen, value, setValue }: Props) => {
  const formatMessage = useFormatTranslations(
    'profileSettingsPage',
    'account_management.subscriptions',
  );

  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    value: { title: string; cost: number; time: number },
  ) => {
    setValue(prevState => ({ ...prevState, subscription: value }));
  };

  return (
    <div className={clsx(cls.subscription_container, isOpen && cls.open)}>
      <h3 className={cls.title}>{formatMessage('title')}</h3>

      <div className={cls.checkbox_container}>
        <Checkbox
          label={formatMessage('checkboxes.low')}
          checked={value.subscription.title === SubscriptionType.low.title}
          onChange={event => handleCheckboxChange(event, SubscriptionType.low)}
        />

        <Checkbox
          label={formatMessage('checkboxes.middle')}
          checked={value.subscription.title === SubscriptionType.middle.title}
          onChange={event => handleCheckboxChange(event, SubscriptionType.middle)}
        />

        <Checkbox
          label={formatMessage('checkboxes.high')}
          checked={value.subscription.title === SubscriptionType.high.title}
          onChange={event => handleCheckboxChange(event, SubscriptionType.high)}
        />
      </div>
    </div>
  );
};
