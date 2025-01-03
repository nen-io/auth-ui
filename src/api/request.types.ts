export type LoginSuccessResp = {
  accessToken: string;
  email: string;
  message: "User logged in";
  refreshToken: string;
  username: string;
};

export type LoginError = {
  error: boolean;
  message: string;
};

export type VerifyEmail = {
  status: string;
  message: "VERIFY EMAIL";
};

export type LogInResp = LoginSuccessResp | LoginError | VerifyEmail;
