import { ParentProps, Show } from "solid-js";
import { useStore } from "../store";
import { useNavigate } from "@solidjs/router";
import { createEffect } from "solid-js";

export default (props: ParentProps) => {
  const navigate = useNavigate();
  const [store] = useStore();

  createEffect(async () => {
    await store.isLoggedIn();
    if (!store.loggedIn) {
      navigate("/sign-in");
    }
  });

  return <Show when={store.loggedIn}>{props.children}</Show>;
};
