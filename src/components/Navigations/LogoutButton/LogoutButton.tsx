import React, { useState } from 'react';

import { useTranslation } from 'next-i18next';
import { MdOutlineLogout } from 'react-icons/md';

import cls from './LogoutButton.module.css';

import { LogoutModal } from '@/components';
import { Button } from '@/shared/ui';

export const LogoutButton = () => {
  const { t } = useTranslation('common');

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Button
        className={cls.btn_logout}
        variant="subtle"
        leftIcon={<MdOutlineLogout />}
        onClick={handleOpenModal}
      >
        {t('nav.logout_button')}
      </Button>

      <LogoutModal open={modalOpen} setOpen={setModalOpen} />
    </>
  );
};
