import React from 'react';

import clsx from 'clsx';
import { ReCAPTCHA } from 'react-recaptcha-component';

import cls from './Recaptcha.module.css';

interface Props {
  onChange: React.Dispatch<React.SetStateAction<{ token: string; isError: boolean }>>;
  isError: boolean;
}

const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

export const Recaptcha = ({ onChange, isError }: Props) => {
  const handleRecaptchaChange = (token: string | number | null) => {
    if (token) {
      onChange(prevState => ({ ...prevState, token: token as string, isError: false }));
    }
  };

  return (
    <div className={clsx(cls.container, isError && cls.error)}>
      <ReCAPTCHA
        sitekey={secretKey}
        type="checkbox"
        size="normal"
        version="v2"
        theme="dark"
        onVerify={handleRecaptchaChange}
      />

      {isError && <p className={cls.errorMessage}>Try again!</p>}
    </div>
  );
};
