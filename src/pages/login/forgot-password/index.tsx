import React from 'react';

import Link from 'next/link';

import cls from './style.module.css';

import { getHeaderLayout } from '@/components';
import { Routes } from '@/shared/constants';
import { Button, Form, FormFooter, Input } from '@/shared/ui';

const ForgotPassword = () => {
  return (
    <div className={cls.wrapper}>
      <Form title="Forgot password">
        <div>
          <Input label="Email" />

          <p className={cls.hint}>
            Enter your email address and we will send you further instructions{' '}
          </p>
        </div>

        <div className={cls.capcha}>Capcha</div>

        <Button>Send Link</Button>
        <FormFooter>
          <Link href={Routes.Login.base}>Back to Sign In</Link>
        </FormFooter>
      </Form>
    </div>
  );
};

ForgotPassword.getLayout = getHeaderLayout;
export default ForgotPassword;
