import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import cls from './style.module.css';

import { Recaptcha } from '@/pages/auth/login/forgot-password/Recaptcha/Recaptcha';
import { Routes } from '@/shared/constants';
import { Button, Form, FormFooter, Input } from '@/shared/ui';
import { checkEmailInput } from '@/shared/utils';

export const ForgotPasswordForm = () => {
  const { t } = useTranslation('loginPage');

  const [emailValue, setEmailValue] = useState({ value: '', error: '' });
  const [recaptchaToken, setRecaptchaToken] = useState<string | number>('');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(prevState => ({ ...prevState, value: event.target.value }));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendLink();
    }
  };

  const handleSendLink = () => {
    const email = emailValue.value;

    if (checkEmailInput(email)) {
      setEmailValue(prevState => ({ ...prevState, error: 'Email is not valid' }));

      return;
    }

    console.log('good');
  };

  return (
    <Form title={t('forgot_password.title')}>
      <div>
        <Input
          label={t('forgot_password.input_email')}
          value={emailValue.value}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDown}
          errorMessage={emailValue.error}
          // disabled={isLoading}
        />

        <p className={cls.hint}>{t('forgot_password.hint')}</p>
      </div>

      <div className={cls.captcha}>
        <Recaptcha onChange={setRecaptchaToken} />
      </div>

      <Button onClick={handleSendLink}>{t('forgot_password.button_title')}</Button>
      <FormFooter>
        <Link href={Routes.auth.Login}>{t('forgot_password.form_footer.link')}</Link>
      </FormFooter>
    </Form>
  );
};
