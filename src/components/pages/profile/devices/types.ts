type Status = 'Online' | 'Offline';

export interface Device {
  ip: string;
  status: Status;
  device: string;
  browser?: string;
  lastVisit?: string;
}
