import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormValidation } from '@/shared/constants';
import { Button, Form, Input } from '@/shared/ui';

const schema = yup
  .object({
    password: yup.string().required().min(FormValidation.minPasswordLength),
    passwordConfirmation: yup.string().test('', "passwords don't match", function (value) {
      const { password } = this.parent;

      return value === password;
    }),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

interface Props {
  onSubmitCallback: (newPassword: string) => void;
  isLoading?: boolean;
}

export const RecoveryForm = ({ onSubmitCallback, isLoading }: Props) => {
  const { t } = useTranslation('loginPage');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    onSubmitCallback(data.password);
  };

  return (
    <Form title={t('new_password.form.title')} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label={t('new_password.form.input_password')}
          type="password"
          {...register('password')}
          errorMessage={errors.password?.message}
          disabled={isLoading}
        />

        <Input
          label={t('new_password.form.input_password_confirm')}
          type="password"
          {...register('passwordConfirmation')}
          errorMessage={errors.passwordConfirmation?.message}
          disabled={isLoading}
        />
      </div>

      <Button type="submit" isLoading={isLoading}>
        {t('new_password.form.button_title')}
      </Button>
    </Form>
  );
};
