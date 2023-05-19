import React from 'react';

import { useTranslation } from 'next-i18next';

import { BaseModal } from '@/shared/ui';

interface Props {
  isOpen: boolean;
  closeCallback: () => void;
  email: string;
}
export const EmailConfirmationModal = ({ isOpen, closeCallback, email }: Props) => {
  const { t } = useTranslation('registerPage');

  return (
    <BaseModal
      isOpen={isOpen}
      title={t('email_verification.modal.error.title')}
      closeCallback={closeCallback}
    >
      <h1>{t('email_verification.modal.success.message', { userEmail: email })}</h1>
    </BaseModal>
  );
};
