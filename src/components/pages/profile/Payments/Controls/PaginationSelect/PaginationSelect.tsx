import React from 'react';

import cls from '../../Payments.module.css';

import { useFormatTranslations } from '@/shared/hooks';
import { CustomSelect, Option } from '@/shared/ui/CustomSelect/CustomSelect';

interface Props {
  selectOptions: Option[];
  onChangeItemsCount: (itemsCount: number) => void;
  value: Option;
}

export const PaginationSelect = ({ selectOptions, onChangeItemsCount, value }: Props) => {
  const formatMessage = useFormatTranslations('profileSettingsPage', 'payments.select');

  const handleChange = (value: Option) => {
    onChangeItemsCount(Number(value.value));
  };

  return (
    <div className={cls.select_container}>
      <p>{formatMessage('show')}</p>
      <div className={cls.select}>
        <CustomSelect options={selectOptions} value={value} onChange={handleChange} />
      </div>
      <p>{formatMessage('page')}</p>
    </div>
  );
};
