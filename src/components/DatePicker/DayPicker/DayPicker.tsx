import clsx from 'clsx';
import { ru, enUS } from 'date-fns/locale';
import { ClassNames, DayPicker as DayPickerLibrary } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css';

import cls from './DayPicker.module.css';

import { localStorageService } from '@/shared/services';

const classNames: ClassNames = {
  ...styles,
  root: clsx(cls.container, cls.root),
  month: cls.month,
  nav: cls.nav,
  nav_button: cls.nav_button,
  table: cls.table,
  head_row: cls.head_row,
  cell: cls.cell,
  button: cls.button,
  day_outside: clsx(styles.day_outside, cls.day_outside),
  day_selected: cls.day_selected,
  dropdown: clsx(styles.dropdown, cls.dropdown, cls.container),
  caption_label: clsx(styles.caption_label, cls.caption_label),
};

interface Props {
  isOpen: boolean;
  selectedDate: Date | null;
  onSelectDate: (date: Date | undefined) => void;
  disabled?: boolean;
}

export const DayPicker = ({ isOpen, selectedDate, onSelectDate, disabled }: Props) => {
  const locale = localStorageService.getLocale();
  const currentLocale = locale === 'ru' ? ru : enUS;

  return (
    <DayPickerLibrary
      initialFocus={isOpen}
      mode="single"
      selected={selectedDate || undefined}
      onSelect={onSelectDate}
      showOutsideDays
      captionLayout="dropdown-buttons"
      classNames={classNames}
      fromYear={1950}
      toYear={2023}
      disabled={disabled}
      locale={currentLocale}
    />
  );
};
