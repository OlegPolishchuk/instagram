export interface RegistrationUserFormData {
  userName: string;
  email: string;
  password: string;
}

export interface LoginUserFormData {
  email: string;
  password: string;
}

export interface GetMeResponseUserData {
  email: string;
  userName: string;
  userId: number;
}

export interface AuthError {
  status: number;
  data: {
    statusCode: number;
    messages: [
      {
        message: string;
        field: string;
      },
    ];
    error: string;
  };
}
