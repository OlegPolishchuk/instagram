import React, { useState } from 'react';

import { AvatarControls } from './AvatarControls/AvatarControls';
import { AvatarProgressBar } from './AvatarProgressBar/AvatarProgressBar';
import cls from './AvatarSettings.module.css';
import { ButtonDeleteAvatar } from './ButtonDeleteAvatar/ButtonDeleteAvatar';

import { Avatar } from '@/components';

interface Props {
  src: string;
}
export const AvatarSettings = ({ src }: Props) => {
  const [avatarState, setAvatarState] = useState({
    avatarSrc: src,
    isLoading: false,
    isError: false,
  });

  const { avatarSrc, isLoading, isError } = avatarState;

  return (
    <aside>
      <div className={cls.avatar_wrapper}>
        <AvatarProgressBar
          className={cls.progress_bar}
          isAnimate={isLoading}
          isError={isError}
        />
        <Avatar className={cls.avatar} imgSrc={avatarSrc} />
        <ButtonDeleteAvatar state={avatarState} setState={setAvatarState} />
      </div>

      <AvatarControls setState={setAvatarState} />
    </aside>
  );
};
