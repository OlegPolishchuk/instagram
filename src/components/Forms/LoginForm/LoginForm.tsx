import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yap from 'yup';

import cls from './LoginForm.module.css';

import { Button, Form, Input, FormFooter } from '@/shared/ui';
import { SocialAuth } from '@/shared/ui/Forms/Form';
import { useLoginUserMutation } from '@/store/api';

const schema = yap
  .object({
    email: yap.string().required().email(),
    password: yap.string().required(),
  })
  .required();

type LoginFormData = yap.InferType<typeof schema>;

export const LoginForm = () => {
  const [handleLogin, { isLoading, isSuccess, data, error }] = useLoginUserMutation();

  const { t } = useTranslation('loginPage');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    handleLogin(data);
  };

  if (error) {
    console.log(error);
  }

  return (
    <Form title={t('form.title')} onSubmit={handleSubmit(onSubmit)}>
      <SocialAuth />

      <Input
        type="text"
        label={t('form.input_email.label')}
        {...register('email')}
        errorMessage={errors?.email?.message}
      />
      <Input
        type="password"
        label={t('form.input_password.label')}
        {...register('password')}
        errorMessage={errors?.password?.message}
      />
      <Button variant="subtle" className={cls.form_button_forgot}>
        {t('form.buttons.forgot_password')}
      </Button>
      <Button type="submit">{t('form.buttons.signIn')}</Button>

      <FormFooter>
        <span>{t('form.form_footer.title')}</span>
        <Link href="/">{t('form.form_footer.link')}</Link>
      </FormFooter>
    </Form>
  );
};
