import { format } from 'date-fns';

export const formatDate = (date: Date | string, dateFormat = 'yyyy.MM.dd') => {
  return format(new Date(date), dateFormat);
};
