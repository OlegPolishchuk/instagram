import React from 'react';

import cls from '../ProfileData.module.css';

export const SubscriptionsPanel = () => {
  return (
    <div className={cls.subscriptions}>
      <div className={cls.subscriptions_item}>
        <p className={cls.item_number}>2218</p>
        <p>Subscriptions</p>
      </div>

      <div className={cls.subscriptions_item}>
        <p className={cls.item_number}>2358</p>
        <p>Subscribers</p>
      </div>

      <div className={cls.subscriptions_item}>
        <p className={cls.item_number}>2764</p>
        <p>Publications</p>
      </div>
    </div>
  );
};
