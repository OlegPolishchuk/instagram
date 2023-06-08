import React, { useState } from 'react';

import cls from './AccountOptions.module.css';
import { Account } from './AccountType/Account';
import { Controls } from './Controls/Controls';
import { Subscription } from './Subscription/Subscription';

import { AccountType, SubscriptionType } from '@/shared/constants';

export const AccountOptions = () => {
  const [accountData, setAccountData] = useState({
    account: AccountType.Personal,
    subscription: SubscriptionType.free,
  });

  return (
    <div className={cls.container}>
      <Account value={accountData} setValue={setAccountData} />

      <Subscription
        isOpen={accountData.account === AccountType.Business}
        value={accountData}
        setValue={setAccountData}
      />

      <Controls accountData={accountData} />
    </div>
  );
};
