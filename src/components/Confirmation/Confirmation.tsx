import React from 'react';

import Image from 'next/image';

import cls from './Confirmation.module.css';

import { Button } from '@/shared/ui';

interface Props {
  clickCallback: () => void;
  title?: string;
  message?: string;
  buttonTitle: string;
  img?: string;
}

export const Confirmation = ({
  clickCallback,
  title,
  message,
  buttonTitle,
  img,
}: Props) => {
  const imgSrc = img || 'images/merge_account_mobile.png';

  return (
    <div className={cls.wrapper}>
      <header className={cls.header}>
        <h1>{title}</h1>
        <p>{message}</p>
      </header>

      <Button className={cls.button_confirm} onClick={clickCallback}>
        {buttonTitle}
      </Button>

      <div className={cls.image}>
        <Image src={imgSrc} alt="" fill />
      </div>
    </div>
  );
};
