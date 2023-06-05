import React from 'react';

import { DeviceCardList } from '../DeviceCardList/DeviceCardList';
import { Device } from '../types';

import { useFormatTranslations } from '@/shared/hooks';

const currentDevice: Device = {
  device: 'desktop',
  browser: 'Chrome',
  status: 'Online',
  lastVisit: '',
  ip: '22.345.345.12',
};

export const CurrentDevice = () => {
  const formatMessage = useFormatTranslations('profileSettingsPage');

  return (
    <>
      <DeviceCardList
        devices={[currentDevice]}
        title={formatMessage('devices.titles.this_device')}
      />
    </>
  );
};
