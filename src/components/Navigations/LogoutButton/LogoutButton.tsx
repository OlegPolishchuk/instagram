import React, { useState } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { MdOutlineLogout } from 'react-icons/md';

import cls from './LogoutButton.module.css';

import { LogoutModal } from '@/components';
import { Button } from '@/shared/ui';

interface Props {
  className?: string;
}
export const LogoutButton = ({ className }: Props) => {
  const { t } = useTranslation('common');

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Button
        className={clsx(cls.btn_logout, className)}
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
