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
    home: '/',
    GeneralInfo: '/profile/generalInformation',
    Devices: '/profile/devices',
    AccountManagement: '/profile/accountManagement',
    MyPayments: '/profile/MyPayments',
  },
  Home: '/home',
  Create: '/create',
  Statistics: '/statistics',
  Favorites: '/favorites',
};
