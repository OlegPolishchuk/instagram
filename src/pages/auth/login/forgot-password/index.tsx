import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import cls from './style.module.css';

import { getHeaderLayout } from '@/components';
import { FormValidation, Routes } from '@/shared/constants';
import { Button, Form, FormFooter, Input } from '@/shared/ui';
import { getStaticPropsWithLocale, checkEmailInput } from '@/shared/utils';

const emailRegex = FormValidation.emailRegExp;

const ForgotPassword: InferGetStaticPropsType<typeof getStaticProps> = () => {
  const { t } = useTranslation('loginPage');
  const [emailValue, setEmailValue] = useState({ value: '', error: '' });

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
    <div className={cls.wrapper}>
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

        <div className={cls.captcha}>Captcha</div>

        <Button onClick={handleSendLink}>{t('forgot_password.button_title')}</Button>
        <FormFooter>
          <Link href={Routes.auth.Login}>{t('forgot_password.form_footer.link')}</Link>
        </FormFooter>
      </Form>
    </div>
  );
};

ForgotPassword.getLayout = getHeaderLayout;
export default ForgotPassword;

export const getStaticProps: GetStaticProps = getStaticPropsWithLocale();
