export const Routes = {
  auth: {
    Login: '/auth/login',
    ForgotPassword: '/auth/login/forgot-password',
    NewPassword: '/auth/login/recovery',
    Register: '/auth/register',
    VerificationExpired: '/auth/verification-expired',
    RegistrationConfirmation: '/auth/registration-confirmation',
    PasswordRecovery: '/auth/recovery',
  },
  Main: '/',
  Profile: {
    base: '/profile',
    settings: {
      GeneralInfo: '/profile/settings/general-information',
      Devices: '/profile/settings/devices',
      AccountManagement: '/profile/settings/account-management',
      MyPayments: '/profile/settings/my-payments',
    },
  },
  Home: '/home',
  Statistics: '/statistics',
  Favorites: '/favorites',
};
