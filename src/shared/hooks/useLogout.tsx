import { localStorageService } from '@/shared/services';
import { useLogoutMutation } from '@/store/api/auth/authApi';

export const useLogout = () => {
  localStorageService.removeToken();

  return useLogoutMutation();
};
