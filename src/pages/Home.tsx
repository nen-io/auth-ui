import { createResource } from "solid-js";
import Title from "../components/Title";
import { useStore } from "../store";
import { getZenQuote } from "../api/zenQuotes";

export default () => {
  const [store] = useStore();
  const [quotes] = createResource(getZenQuote);

  return (
    <div class="container text-wrap ">
      <Title>🦍 WebApp Portal 🦍</Title>
      <div class="motion-preset-slide-down motion-ease motion-duration-500">
        <p>Home page, hello {store.username}</p>
        <p>Email: {store.email}</p>
        <p>Username: {store.username}</p>
      </div>
      {quotes() && (
        <p class="text-lg my-6 motion-preset-slide-down motion-ease motion-duration-500">
          "{quotes()?.text}" - {quotes()?.author}
        </p>
      )}
    </div>
  );
};
