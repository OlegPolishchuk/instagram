import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormValidation } from '@/shared/constants';
import { Button, Form, FormFooter, Input } from '@/shared/ui';
import { SocialAuth } from '@/shared/ui/Forms/Form';
import { useRegistrationMutation, useGetMeQuery } from '@/store/api';

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
  const [registerUser, { isLoading }] = useRegistrationMutation();

  const { data } = useGetMeQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: RegisterFormData) => {
    const { password, email, username } = data;

    console.log(data);

    try {
      await registerUser({ password, email, username });
    } catch (error) {
      console.log(error, 'Failed to register new User');
    }
  };

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
