import React from 'react';

import Link from 'next/link';

import { Button, Form, FormFooter, Input } from '@/shared/ui';

export const RegisterForm = () => {
  return (
    <Form title="Sign In">
      <Input type="text" label="Username" />
      <Input type="text" label="Email" />
      <Input type="password" label="Password" />
      <Input type="password" label="Password confirmation" />

      <Button type="submit">Sign Up</Button>

      <FormFooter>
        <span>Do you have an account?</span>
        <Link href="/">Sign In</Link>
      </FormFooter>
    </Form>
  );
};
