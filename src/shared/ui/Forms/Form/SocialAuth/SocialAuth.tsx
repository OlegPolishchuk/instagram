import React from 'react';

import clsx from 'clsx';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import cls from '../Form.module.css';

export const SocialAuth = () => {
  return (
    <div className={cls.form_social}>
      <FcGoogle className={cls.social_icon} />
      <FaGithub className={clsx(cls.social_icon, cls.invert)} />
    </div>
  );
};
