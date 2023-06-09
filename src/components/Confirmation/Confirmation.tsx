import React, { ReactNode } from 'react';

import Image from 'next/image';

import cls from './Confirmation.module.css';

import { Button } from '@/shared/ui';

interface Props {
  clickCallback: () => void;
  title?: string;
  message?: string;
  buttonTitle: string;
  img?: string;
  isButtonDisabled?: boolean;
  children?: ReactNode;
}

export const Confirmation = ({
  clickCallback,
  title,
  message,
  isButtonDisabled,
  buttonTitle,
  img,
  children,
}: Props) => {
  const imgSrc = img || 'images/merge_account_mobile.png';

  return (
    <div className={cls.wrapper}>
      <header className={cls.header}>
        <h1>{title}</h1>
        <p>{message}</p>
      </header>

      {children}

      <Button
        className={cls.button_confirm}
        onClick={clickCallback}
        disabled={isButtonDisabled}
        isLoading={isButtonDisabled}
      >
        {buttonTitle}
      </Button>

      <div className={cls.image}>
        <Image src={imgSrc} alt="" fill />
      </div>
    </div>
  );
};
