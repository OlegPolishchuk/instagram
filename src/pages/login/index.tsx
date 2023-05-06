import { getHeaderLayout, LoginForm } from '@/components';

const Login = () => {
  return (
    <div className="flex_center">
      <LoginForm />
    </div>
  );
};

Login.getLayout = getHeaderLayout;

export default Login;
