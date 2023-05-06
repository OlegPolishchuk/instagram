import cls from './Login.module.css';

import { LoginForm, getHeaderLayout } from '@/components';

const Login = () => {
  return (
    <div className={cls.wrapper}>
      <LoginForm />
    </div>
  );
};

Login.getLayout = getHeaderLayout;

export default Login;
