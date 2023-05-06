import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yap from 'yup';

import cls from './LoginForm.module.css';

import { Button, Form, Input, FormFooter } from '@/shared/ui';
import { SocialAuth } from '@/shared/ui/Forms/Form';

const schema = yap
  .object({
    email: yap.string().required().email(),
    password: yap.string().required(),
  })
  .required();

type LoginFormData = yap.InferType<typeof schema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <Form title="SignUp" onSubmit={handleSubmit(onSubmit)}>
      <SocialAuth />

      <Input
        type="text"
        label="Email"
        {...register('email')}
        errorMessage={errors?.email?.message}
      />
      <Input
        type="password"
        label="Password"
        {...register('password')}
        errorMessage={errors?.password?.message}
      />
      <Button variant="subtle" className={cls.form_button_forgot}>
        Forgot password
      </Button>
      <Button type="submit">Sign In</Button>

      <FormFooter>
        <span>Do not have an account?</span>
        <Link href="/">Sign un</Link>
      </FormFooter>
    </Form>
  );
};
