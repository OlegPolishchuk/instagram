import React, { useState } from 'react';

import { AiOutlinePlusSquare } from 'react-icons/ai';

import cls from './ButtonCreatePost.module.css';

import { CreatePostBaseModal } from '@/components';
import { useFormatTranslations } from '@/shared/hooks';
import { Button } from '@/shared/ui';

export const ButtonCreatePost = () => {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  const format = useFormatTranslations('common', 'nav');

  const handleShowModal = () => {
    setShowCreatePostModal(true);
  };

  return (
    <>
      <Button
        className={cls.button}
        variant="subtle"
        leftIcon={<AiOutlinePlusSquare />}
        onClick={handleShowModal}
      >
        {format('create')}
      </Button>

      <CreatePostBaseModal
        isOpen={showCreatePostModal}
        setIsOpen={setShowCreatePostModal}
      />
    </>
  );
};
