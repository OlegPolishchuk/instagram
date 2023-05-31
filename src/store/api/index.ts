export {
  useRegistrationMutation,
  useGetMeQuery,
  useLoginUserMutation,
  useConfirmEmailMutation,
  useResendEmailMutation,
  useDeleteProfileTestMutation,
  useLogoutMutation,
  useNewPasswordMutation,
  useRecoveryPasswordMutation,
  getMe,
  logout,
  loginUser,
  confirmEmail,
  registration,
  updateTokens,
} from './auth/authApi';

export {
  deleteAvatar,
  profileAPI,
  getProfile,
  updateProfile,
  useDeleteAvatarMutation,
  uploadAvatar,
  useUploadAvatarMutation,
  useUpdateProfileMutation,
  useGetProfileQuery,
  useGetFakePhotosQuery,
} from './profile/profileAPI';

export type {
  RegistrationUserFormData,
  LoginUserFormData,
  GetMeResponseUserData,
  AuthError,
} from './auth/types';

export type { ProfileUpdateData, Profile, Avatar, FakePhotos } from './profile/types';
