export {
  useRegistrationMutation,
  useGetMeQuery,
  useLoginUserMutation,
  useConfirmEmailMutation,
  useResendEmailMutation,
  useDeleteProfileTestMutation,
  getMe,
  logout,
  loginUser,
  confirmEmail,
  registration,
} from './auth/authApi';

export type {
  RegistrationUserFormData,
  LoginUserFormData,
  GetMeResponseUserData,
  AuthError,
} from './auth/types';
