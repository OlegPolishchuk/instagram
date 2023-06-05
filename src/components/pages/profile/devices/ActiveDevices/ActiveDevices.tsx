import React from 'react';

import { DeviceCardList } from '../DeviceCardList/DeviceCardList';
import { Device } from '../types';

import { useFormatTranslations } from '@/shared/hooks';

const activeDevices: Device[] = [
  {
    device: 'Apple iMac 27',
    browser: '',
    status: 'Offline',
    lastVisit: '22.09.2022',
    ip: '22.345.345.12',
  },
  {
    device: 'Iphone 14 Pro MAx',
    browser: '',
    status: 'Offline',
    lastVisit: '22.09.2022',
    ip: '22.345.345.12',
  },
];

export const ActiveDevices = () => {
  const formatMessage = useFormatTranslations('profileSettingsPage');

  return (
    <>
      <DeviceCardList
        devices={activeDevices}
        title={formatMessage('devices.titles.other_devices')}
      />
    </>
  );
};
