import React from 'react';

import { DevicesCard } from '../DeviceCard/DevicesCard';

import cls from './DevicesCardList.module.css';

import { Device } from '@/components/pages/profile/devices/types';

interface Props {
  devices: Device[];
  title: string;
}
export const DeviceCardList = ({ devices, title }: Props) => {
  return (
    <div>
      <h3 className={cls.title}>{title}</h3>

      <div className={cls.card_list_container}>
        {devices.map(device => (
          <DevicesCard device={device} />
        ))}
      </div>
    </div>
  );
};
