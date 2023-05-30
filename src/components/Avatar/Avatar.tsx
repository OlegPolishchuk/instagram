import React from 'react';

import clsx from 'clsx';
import Image from 'next/image';
import { HiOutlinePhotograph } from 'react-icons/hi';

import cls from './Avatar.module.css';

interface Props {
  imgSrc: string;
  className?: string;
}

export const Avatar = ({ imgSrc, className }: Props) => {
  return (
    <div className={clsx(cls.container, className && className)}>
      <div className={cls.image_container}>
        {imgSrc ? (
          <Image className={cls.image} src={imgSrc} alt="user avatar" fill />
        ) : (
          <HiOutlinePhotograph />
        )}
      </div>
    </div>
  );
};
