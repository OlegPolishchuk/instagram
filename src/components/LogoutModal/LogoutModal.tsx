import React, { useEffect } from 'react';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { Routes } from '@/shared/constants';
import { localStorageService } from '@/shared/services';
import { BaseModal, Button } from '@/shared/ui';
import { useLogoutMutation } from '@/store/api';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LogoutModal = ({ open, setOpen }: Props) => {
  const router = useRouter();
  const [logout, { isLoading, isSuccess, isError }] = useLogoutMutation();
  const { t } = useTranslation('common');

  const handleRejectLogout = () => {
    setOpen(false);
  };

  const RejectButton = (
    <Button variant="default" onClick={handleRejectLogout} disabled={isLoading}>
      No
    </Button>
  );

  useEffect(() => {
    if (isSuccess) {
      localStorageService.removeToken();

      router.push(Routes.auth.Login);
    }

    if (isError) {
      toast.error(t('logout_button.toast.error_message'));
    }
  }, [isSuccess, isError]);

  return (
    <BaseModal
      isOpen={open}
      isLoading={isLoading}
      closeCallback={handleRejectLogout}
      confirmCallback={logout}
      title={t('logout_button.modal.title')}
      buttons={RejectButton}
    >
      <p>{t('logout_button.modal.message')}</p>
    </BaseModal>
  );
};
