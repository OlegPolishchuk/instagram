import React from 'react';

import cls from '../DevicesCard.module.css';

import { Device } from '@/components/pages/profile/devices/types';

interface Props {
  device: Device;
}

export const DeviceDescription = ({ device }: Props) => {
  const { status, device: currentDevice, browser, lastVisit, ip } = device;

  return (
    <div className={cls.description}>
      <h3 className={cls.title}>{status === 'Online' ? browser : currentDevice}</h3>
      <p className={cls.ip_address}>IP: {ip}</p>

      {status === 'Online' && <p className={cls.status}>Online</p>}
      {lastVisit && <p>Last visit: 22.09.2022</p>}
    </div>
  );
};
