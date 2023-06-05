import { DeviceDescription } from './Description/Description';
import cls from './DevicesCard.module.css';

import { LogoutButton } from '@/components/Navigations/LogoutButton/LogoutButton';
import { Device } from '@/components/pages/profile/devices/types';
import { Chrome } from '@/shared/ui/Icons';

interface Props {
  device: Device;
  withExit?: boolean;
}

export const DevicesCard = ({ withExit = false, device }: Props) => {
  return (
    <div className={cls.container}>
      <Chrome className={cls.icon} />

      <DeviceDescription device={device} />

      {withExit && <LogoutButton className={cls.button_logout} />}
    </div>
  );
};
