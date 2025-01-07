import Title from "../components/Title";
import { useStore } from "../store";

export default () => {
  const [store] = useStore();

  return (
    <div class="container text-wrap ">
      <Title>Home</Title>
      <p>Home page, hello {store.username}</p>
      <p>Email: {store.email}</p>
      <p>Username: {store.username}</p>
    </div>
  );
};
