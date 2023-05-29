import React from 'react';

import clsx from 'clsx';

import cls from '../ProfileData.module.css';

interface Props {
  aboutMe: string;
  className?: string;
}
export const AboutMe = ({ aboutMe, className }: Props) => {
  return (
    <div className={clsx(cls.profile_description, className && className)}>
      <p>
        {aboutMe ||
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
            '        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
            '        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
      </p>
    </div>
  );
};
