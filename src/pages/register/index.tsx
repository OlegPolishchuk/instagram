import React from 'react';

import { getHeaderLayout, RegisterForm } from '@/components';

const Register = () => {
  return (
    <div className="flex_center">
      <RegisterForm />
    </div>
  );
};

Register.getLayout = getHeaderLayout;

export default Register;
