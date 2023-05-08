import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import cls from './style.module.css';

import { getHeaderLayout } from '@/components';
import { FormValidation } from '@/shared/constants';
import { Button, Form, Input } from '@/shared/ui';

const schema = yup
  .object({
    password: yup.string().required().min(FormValidation.minPasswordLength),
    passwordConfirmation: yup
      .string()
      .test('', "passwords don't match", function (value) {
        const { password } = this.parent;

        return value === password;
      }),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const NewPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className={cls.wrapper}>
      <Form title="Create New Password" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label="New Password"
            type="password"
            {...register('password')}
            errorMessage={errors.password?.message}
          />

          <Input
            label="Password Confirmation"
            type="password"
            {...register('passwordConfirmation')}
            errorMessage={errors.passwordConfirmation?.message}
          />
        </div>

        <Button type="submit">Create New Password</Button>
      </Form>
    </div>
  );
};

NewPassword.getLayout = getHeaderLayout;
export default NewPassword;
