import { createStore, produce } from "solid-js/store";
import { LoginDetails, StoreState } from "./types";

const [store, setStore] = createStore<StoreState>({
  accessToken: undefined,
  refreshToken: undefined,
  username: undefined,
  email: undefined,
  setLoginDetails: (data: LoginDetails) => {
    setStore(
      produce((state) => {
        state.accessToken = data.accessToken;
        state.refreshToken = data.refreshToken;
        state.username = data.username;
        state.email = data.email;
      }),
    );
  },
});

export const useStore = (): [typeof store, typeof setStore] => [
  store,
  setStore,
];
