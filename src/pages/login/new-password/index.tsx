import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import cls from './style.module.css';

import { getHeaderLayout } from '@/components';
import { FormValidation } from '@/shared/constants';
import { Button, Form, Input } from '@/shared/ui';
import { getStaticPropsWithLocale } from '@/shared/utils';

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

export const NewPassword = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const { t } = useTranslation('loginPage');

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className={cls.wrapper}>
      <Form title={t('new_password.form.title')} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label={t('new_password.form.input_password')}
            type="password"
            {...register('password')}
            errorMessage={errors.password?.message}
          />

          <Input
            label={t('new_password.form.input_password_confirm')}
            type="password"
            {...register('passwordConfirmation')}
            errorMessage={errors.passwordConfirmation?.message}
          />
        </div>

        <Button type="submit">{t('new_password.form.button_title')}</Button>
      </Form>
    </div>
  );
};

NewPassword.getLayout = getHeaderLayout;
export default NewPassword;

export const getStaticProps: GetStaticProps = getStaticPropsWithLocale();
