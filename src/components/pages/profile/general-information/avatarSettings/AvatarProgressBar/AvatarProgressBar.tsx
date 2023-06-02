import React from 'react';

import clsx from 'clsx';

import cls from './AvatarProgressBar.module.css';

interface Props {
  className?: string;
  isAnimate: boolean;
  isError?: boolean;
}
export const AvatarProgressBar = ({ className, isAnimate, isError }: Props) => {
  return (
    <div
      className={clsx(
        cls.circle_wrap,
        className,
        isAnimate && cls.animate,
        isError && cls.error,
      )}
    />
  );
};
