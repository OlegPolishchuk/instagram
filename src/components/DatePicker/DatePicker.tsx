import React, { useRef, useState } from 'react';

import cls from './DatePicker.module.css';
import { DatePickerButton } from './DatePickerButton/DatePickerButton';
import { DayPicker } from './DayPicker/DayPicker';
import { FocusWrapper } from './FocusWrapper/FocusWrapper';

import { formatDate } from '@/shared/utils/formatDate';

interface Props {
  disabled?: boolean;
  dateOfBirth: string;
  setDateOfBirth: React.Dispatch<React.SetStateAction<string>>;
}

export const DatePicker = ({ disabled, setDateOfBirth, dateOfBirth }: Props) => {
  const [open, setOpen] = useState(false);

  const popperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closePopper = () => {
    setOpen(false);
    buttonRef?.current?.focus();
  };

  const handleSelectDate = (date: Date | undefined) => {
    if (date) {
      setDateOfBirth(formatDate(date));
      closePopper();
    } else {
      setDateOfBirth(formatDate(new Date()));
    }
  };

  return (
    <div className={cls.datePicker} ref={popperRef}>
      <DatePickerButton ref={buttonRef} setOpen={setOpen} title={dateOfBirth} />

      {open && (
        <FocusWrapper popperRef={popperRef} closePopper={closePopper}>
          <DayPicker
            isOpen={open}
            selectedDate={new Date(dateOfBirth)}
            onSelectDate={handleSelectDate}
            disabled={disabled}
          />
        </FocusWrapper>
      )}
    </div>
  );
};
