import cls from './GlobalLoafer.module.css';

import { Loader } from '@/shared/ui';

export const GlobalLoader = () => {
  return (
    <div className={cls.wrapper}>
      <Loader />
    </div>
  );
};
