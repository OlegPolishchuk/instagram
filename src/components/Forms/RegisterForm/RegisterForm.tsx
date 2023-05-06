import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormValidation } from '@/shared/constant';
import { Button, Form, FormFooter, Input } from '@/shared/ui';
import { SocialAuth } from '@/shared/ui/Forms/Form';

const schema = yup.object({
  username: yup.string().required().min(FormValidation.minUsernameLength),
  email: yup.string().email().required(),
  password: yup.string().required().min(FormValidation.minPasswordLength),
  passwordConfirmation: yup.string().test('', "passwords don't match", function (value) {
    const { password } = this.parent;

    return value === password;
  }),
});

type RegisterFormData = yup.InferType<typeof schema>;

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: RegisterFormData) => console.log(data);

  return (
    <Form title="Sign In" onSubmit={handleSubmit(onSubmit)}>
      <SocialAuth />

      <Input
        type="text"
        label="Username"
        {...register('username')}
        errorMessage={errors.username?.message}
      />

      <Input
        type="text"
        label="Email"
        {...register('email')}
        errorMessage={errors.email?.message}
      />

      <Input
        type="password"
        label="Password"
        {...register('password')}
        errorMessage={errors.password?.message}
      />

      <Input
        type="password"
        label="Password confirmation"
        {...register('passwordConfirmation')}
        errorMessage={errors.passwordConfirmation?.message}
      />

      <Button type="submit">Sign Up</Button>

      <FormFooter>
        <span>Do you have an account?</span>
        <Link href="/">Sign In</Link>
      </FormFooter>
    </Form>
  );
};
