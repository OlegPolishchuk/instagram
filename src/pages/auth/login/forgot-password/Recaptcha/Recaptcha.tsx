import React from 'react';

import { ReCAPTCHA } from 'react-recaptcha-component';

interface Props {
  onChange: (token: string | number) => void;
}

const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY as string;

export const Recaptcha = ({ onChange }: Props) => {
  const handleRecaptchaChange = (token: string | number | null) => {
    if (token) {
      onChange(token);
    }
  };

  return (
    <ReCAPTCHA
      sitekey={secretKey}
      type="checkbox"
      size="normal"
      version="v2"
      theme="light"
      onVerify={handleRecaptchaChange}
    />
  );
};
