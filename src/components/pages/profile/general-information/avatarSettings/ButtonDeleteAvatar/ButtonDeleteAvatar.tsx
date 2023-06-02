import React from 'react';

import { IoMdCloseCircle } from 'react-icons/io';
import { toast } from 'react-toastify';

import cls from '../AvatarSettings.module.css';
import { AvatarState } from '../types';

import { useFormatTranslations } from '@/shared/hooks';
import { useDeleteAvatarMutation } from '@/store/api';

interface Props {
  state: AvatarState;
  setState: React.Dispatch<React.SetStateAction<AvatarState>>;
}
export const ButtonDeleteAvatar = ({ state, setState }: Props) => {
  const [handleDelete, { isLoading, isError }] = useDeleteAvatarMutation();

  const formatMessage = useFormatTranslations(
    'profileSettingsPage',
    'generalInfo.avatar.errors',
  );

  const handleDeleteAvatar = async () => {
    if (!state.avatarSrc) {
      return;
    }
    setState(prevState => ({
      ...prevState,
      avatarSrc: '',
      isLoading: true,
      isError: false,
    }));

    await handleDelete();
    setState(prevState => ({ ...prevState, isLoading: false }));
  };

  if (isError) {
    setState(prevState => ({ ...prevState, isError: true }));
    toast.error(formatMessage('delete'));
  }

  return (
    <button
      type="button"
      className={cls.button_delete}
      onClick={handleDeleteAvatar}
      disabled={isLoading}
    >
      <IoMdCloseCircle className={cls.button_delete_icon} />
    </button>
  );
};
