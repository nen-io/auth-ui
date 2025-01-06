export type LoginSuccessResp = {
  accessToken: string;
  email: string;
  message: "User logged in";
  refreshToken: string;
  username: string;
};

export type ApiError = {
  error: boolean;
  message: string;
};

export type VerifyEmail = {
  status: string;
  message: "VERIFY EMAIL";
  email: string;
};

export type RegisterSuccess = {
  id: string;
  message: "User created";
  status: "VERIFY_EMAIL";
};

export type LogInResp = LoginSuccessResp | ApiError | VerifyEmail;
