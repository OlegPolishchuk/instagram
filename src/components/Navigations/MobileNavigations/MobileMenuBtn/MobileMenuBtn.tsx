import React, { ComponentPropsWithRef } from 'react';

import { BiDotsHorizontalRounded } from 'react-icons/bi';

export const MobileMenuBtn = ({
  onClick,
  className,
}: ComponentPropsWithRef<'button'>) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    onClick && onClick(event);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      id="mobile-menu-btn"
      className={className}
    >
      <BiDotsHorizontalRounded />
    </button>
  );
};
