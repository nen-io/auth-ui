export interface LoginDetails {
  username: string;
  email: string;
}

export interface StoreState {
  username: string | undefined;
  email: string | undefined;
  loggedIn: boolean;
  isLoggedIn: () => Promise<void>;
  setLoginDetails: (data: LoginDetails) => void;
  setLogout: () => Promise<void>;
}
