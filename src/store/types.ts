export interface LoginDetails {
  accessToken: string;
  refreshToken: string;
  username: string;
  email: string;
}

export interface StoreState {
  accessToken: string | undefined;
  refreshToken: string | undefined;
  username: string | undefined;
  email: string | undefined;
  setLoginDetails: (data: LoginDetails) => void;
}
