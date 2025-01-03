import { createEffect } from "solid-js";
import Title from "../components/Title";
import { useStore } from "../store";
import { useNavigate } from "@solidjs/router";

export default () => {
  const [store] = useStore();
  const navigate = useNavigate();

  createEffect(() => {
    if (!store.accessToken) {
      navigate("/sign-in");
    }
  });

  return (
    <div class="container text-wrap ">
      <Title>Home</Title>
      <p>Home page, hello {store.username}</p>
      <p class="break-all">Access Token: {store.accessToken}</p>
      <p class="break-all">Refresh Token: {store.refreshToken}</p>
      <p>Email: {store.email}</p>
    </div>
  );
};
