import React from 'react';

import { useRouter } from 'next/router';

import { Confirmation, getHeaderLayout } from '@/components';
import { Routes } from '@/shared/constant';

const ConfirmationPage = () => {
  const router = useRouter();
  const handleClick = async () => {
    await router.push(Routes.Login);
  };

  return (
    <Confirmation
      buttonTitle="Sign In"
      title="Congratulations!"
      message="Your email has been confirmed"
      clickCallback={handleClick}
      img="/images/confirmation_email.png"
    />
  );
};

ConfirmationPage.getLayout = getHeaderLayout;
export default ConfirmationPage;
