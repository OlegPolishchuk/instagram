import React, { ChangeEvent } from 'react';

import cls from '../AccountOptions.module.css';

import { AccountType, SubscriptionType } from '@/shared/constants';
import { useFormatTranslations } from '@/shared/hooks';
import { Checkbox } from '@/shared/ui';

interface Props {
  value: { account: string; subscription: { title: string; cost: number; time: number } };
  setValue: React.Dispatch<
    React.SetStateAction<{
      account: string;
      subscription: { title: string; cost: number; time: number };
    }>
  >;
}
export const Account = ({ setValue, value }: Props) => {
  const formatMessage = useFormatTranslations(
    'profileSettingsPage',
    'account_management.account',
  );

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, value: string) => {
    setValue(prevState => ({
      ...prevState,
      account: value,
      subscription:
        value === AccountType.Business ? SubscriptionType.low : SubscriptionType.free,
    }));
  };

  return (
    <div className={cls.account_container}>
      <h3 className={cls.title}>{formatMessage('title')}</h3>

      <div className={cls.checkbox_container}>
        <Checkbox
          label={formatMessage('checkboxes.personal')}
          checked={value.account === AccountType.Personal}
          onChange={event => handleCheckboxChange(event, AccountType.Personal)}
        />
        <Checkbox
          label={formatMessage('checkboxes.business')}
          checked={value.account === AccountType.Business}
          onChange={event => handleCheckboxChange(event, AccountType.Business)}
        />
      </div>
    </div>
  );
};
