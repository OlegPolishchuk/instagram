import React from 'react';

import { Confirmation, getHeaderLayout } from '@/components';

const VerificationExpired = () => {
  const handleResendVerification = () => {
    console.log('s');
  };

  return (
    <Confirmation
      clickCallback={handleResendVerification}
      buttonTitle="Resend verification link"
      title="Email verification link expired"
      message="Looks like the verification link has expired. Not to worry, we can send the link again"
      img="/images/expired_time_mobile.png"
    />
  );
};

VerificationExpired.getLayout = getHeaderLayout;
export default VerificationExpired;
