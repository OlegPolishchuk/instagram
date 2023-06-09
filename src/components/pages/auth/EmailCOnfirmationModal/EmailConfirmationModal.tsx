import React from 'react';

import { useTranslation } from 'next-i18next';

import { CommonModal } from '@/components';

interface Props {
  isOpen: boolean;
  closeCallback: () => void;
  email: string;
}
export const EmailConfirmationModal = ({ isOpen, closeCallback, email }: Props) => {
  const { t } = useTranslation('registerPage');

  return (
    <CommonModal
      isOpen={isOpen}
      title={t('email_verification.modal.error.title')}
      confirmCallback={closeCallback}
    >
      <h1>{t('email_verification.modal.success.message', { userEmail: email })}</h1>
    </CommonModal>
  );
};
