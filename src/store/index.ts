import { createStore, produce } from "solid-js/store";
import { LoginDetails, StoreState } from "./types";
import { Logout, Me } from "../api/auth";

const [store, setStore] = createStore<StoreState>({
  username: undefined,
  email: undefined,
  loggedIn: false,
  isLoggedIn: async () => {
    const resp = await Me();

    if (resp.success) {
      setStore(
        produce((state) => {
          state.username = resp.username;
          state.email = resp.email;
          state.loggedIn = true;
        }),
      );
    } else {
      setStore(
        produce((state) => {
          state.username = undefined;
          state.email = undefined;
          state.loggedIn = false;
        }),
      );
    }
  },
  setLoginDetails: (data: LoginDetails) => {
    setStore(
      produce((state) => {
        state.username = data.username;
        state.email = data.email;
        state.loggedIn = true;
      }),
    );
  },
  setLogout: async () => {
    const resp = await Logout();

    if (resp?.success) {
      setStore(
        produce((state) => {
          state.username = undefined;
          state.email = undefined;
          state.loggedIn = false;
        }),
      );
    }
  },
});

export const useStore = (): [typeof store, typeof setStore] => [
  store,
  setStore,
];
