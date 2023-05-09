import React from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import cls from './style.module.css';

import { getHeaderLayout } from '@/components';
import { Routes } from '@/shared/constants';
import { Button, Form, FormFooter, Input } from '@/shared/ui';
import { getStaticPropsWithLocale } from '@/shared/utils';

const ForgotPassword = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation('loginPage');

  return (
    <div className={cls.wrapper}>
      <Form title={t('forgot_password.title')}>
        <div>
          <Input label={t('forgot_password.input_email')} />

          <p className={cls.hint}>{t('forgot_password.hint')}</p>
        </div>

        <div className={cls.capcha}>Capcha</div>

        <Button>{t('forgot_password.button_title')}</Button>
        <FormFooter>
          <Link href={Routes.Login.base}>{t('forgot_password.form_footer.link')}</Link>
        </FormFooter>
      </Form>
    </div>
  );
};

ForgotPassword.getLayout = getHeaderLayout;
export default ForgotPassword;

export const getStaticProps: GetStaticProps = getStaticPropsWithLocale();
