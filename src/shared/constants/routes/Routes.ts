export const Routes = {
  auth: {
    Login: '/auth/login',
    ForgotPassword: '/auth/login/forgot-password',
    NewPassword: '/auth/login/new-password',
    Register: '/auth/register',
    VerificationExpired: '/auth/verification-expired',
    RegistrationConfirmation: '/auth/registration-confirmation',
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
  Home: '/',
  Create: '/create',
  Statistics: '/statistics',
  Favorites: '/favorites',
};
