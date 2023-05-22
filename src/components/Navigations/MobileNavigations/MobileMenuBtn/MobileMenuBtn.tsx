import React from 'react';

import { BiDotsHorizontalRounded } from 'react-icons/bi';

interface Props {
  onClick: () => void;
  className?: string;
}
export const MobileMenuBtn = ({ className, onClick }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    onClick();
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
