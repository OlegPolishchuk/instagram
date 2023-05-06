import React from 'react';

import Link from 'next/link';

import cls from './LoginForm.module.css';

import { Button, Form, Input, FormFooter } from '@/shared/ui';

export const LoginForm = () => {
  return (
    <Form title="SignUp">
      <Input type="text" label="Email" />
      <Input type="password" label="Password" />
      <Button variant="subtle" className={cls.form_button_forgot}>
        Forgot password
      </Button>
      <Button>Sign In</Button>

      <FormFooter>
        Do not have an account?
        <Link href="/">Sign un</Link>
      </FormFooter>
    </Form>
  );
};
