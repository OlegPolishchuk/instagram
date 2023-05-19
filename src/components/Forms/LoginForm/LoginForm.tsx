import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yap from 'yup';

import cls from './LoginForm.module.css';

import { Routes } from '@/shared/constants';
import { Button, Form, FormFooter, Input } from '@/shared/ui';
import { SocialAuth } from '@/shared/ui/Forms/Form';
import { LoginUserFormData } from '@/store/api';

const schema = yap
  .object({
    email: yap.string().required().email(),
    password: yap.string().required(),
  })
  .required();

type LoginFormData = yap.InferType<typeof schema>;

interface Props {
  handleSubmitFormCallback: (formData: LoginUserFormData) => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export const LoginForm = ({ handleSubmitFormCallback, isLoading, disabled }: Props) => {
  const { t } = useTranslation('loginPage');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: LoginFormData) => {
    handleSubmitFormCallback(data);
  };

  return (
    <Form title={t('form.title')} onSubmit={handleSubmit(onSubmit)}>
      <SocialAuth />

      <Input
        type="text"
        label={t('form.input_email.label')}
        {...register('email')}
        errorMessage={errors?.email?.message}
        disabled={disabled}
      />
      <Input
        type="password"
        label={t('form.input_password.label')}
        {...register('password')}
        errorMessage={errors?.password?.message}
        disabled={disabled}
      />

      <Link href={Routes.auth.ForgotPassword} className={cls.form_button_forgot}>
        {t('form.buttons.forgot_password')}
      </Link>

      <Button type="submit" disabled={isLoading || disabled} isLoading={isLoading}>
        {t('form.buttons.signIn')}
      </Button>

      <FormFooter>
        <span>{t('form.form_footer.title')}</span>
        <Link href="/">{t('form.form_footer.link')}</Link>
      </FormFooter>
    </Form>
  );
};
