import React from 'react';

import { IoMdCloseCircle } from 'react-icons/io';

import cls from './AvatarSettings.module.css';

import { Avatar } from '@/components';
import { Button } from '@/shared/ui';

export const AvatarSettings = () => {
  return (
    <aside>
      <div className={cls.avatar_wrapper}>
        <Avatar className={cls.avatar} imgSrc="" />

        <button type="button" className={cls.button_delete}>
          <IoMdCloseCircle className={cls.button_delete_icon} />
        </button>
      </div>

      <Button fullwidth variant="outlined">
        Add profile photo
      </Button>
    </aside>
  );
};
