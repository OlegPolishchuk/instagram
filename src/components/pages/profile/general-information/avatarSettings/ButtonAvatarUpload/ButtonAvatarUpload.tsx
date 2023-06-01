import React, { ChangeEvent, useRef } from 'react';

import { toast } from 'react-toastify';

import cls from './ButtonUploadAvatar.module.css';

import { useFormatTranslations } from '@/shared/hooks';
import { Button } from '@/shared/ui';

interface Props {
  onUpload: (file: FormData, src: string) => void;
  isLoading: boolean;
  disabled?: boolean;
}

const MAX_AVATAR_SIZE = 4_000_000;

export const ButtonAvatarUpload = ({ onUpload, isLoading, disabled }: Props) => {
  const formatMessage = useFormatTranslations(
    'profileSettingsPage',
    'generalInfo.avatar',
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    inputRef.current?.click();
  };

  const handleChooseAvatar = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      if (file.size > MAX_AVATAR_SIZE) {
        return toast.error(formatMessage('errors.max-size'));
      }

      const formData = new FormData();
      const reader = new FileReader();

      formData.append('file', file);

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const src = reader.result as string;

        onUpload(formData, src);
      };
    }
  };

  return (
    <label className={cls.container}>
      <input
        type="file"
        accept={'image/*, .png, .jpg, .jpeg, .gif, .web'}
        ref={inputRef}
        onChange={handleChooseAvatar}
        className={cls.input}
      />

      <Button
        variant="outlined"
        onClick={handleInput}
        fullwidth
        isLoading={isLoading}
        disabled={isLoading || disabled}
      >
        {formatMessage('button_add')}
      </Button>
    </label>
  );
};
