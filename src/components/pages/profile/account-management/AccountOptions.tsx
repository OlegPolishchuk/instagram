import React, { useState } from 'react';

import cls from './AccountOptions.module.css';
import { Account } from './AccountType/Account';
import { Subscription } from './Subscription/Subscription';

import { AccountType, SubscriptionType } from '@/shared/constants';

export const AccountOptions = () => {
  const [accountType, setAccountType] = useState({
    account: AccountType.Personal,
    subscription: SubscriptionType.free,
  });

  return (
    <div className={cls.container}>
      <Account value={accountType} setValue={setAccountType} />

      <Subscription
        isOpen={accountType.account === AccountType.Business}
        value={accountType}
        setValue={setAccountType}
      />
    </div>
  );
};
