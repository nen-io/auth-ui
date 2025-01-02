import { AiOutlineMail } from "solid-icons/ai";
import LabelInput from "../components/labelInput";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import Title from "../components/Title";
import { createSignal } from "solid-js";

export default () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(email(), password());
  };

  return (
    <>
      <Title>Sign In</Title>

      <form class="form-control w-[50%] mx-auto" onSubmit={handleSubmit}>
        <LabelInput
          name={"Email"}
          labelText="Email"
          type="text"
          value={email()}
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          placeholder="Email"
          Icon={AiOutlineMail}
        />
        <LabelInput
          labelText="Password"
          value={password()}
          onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
          type="password"
          placeholder="Password"
          Icon={RiSystemLockPasswordLine}
        />

        <button class="btn mt-2">Sign In</button>
      </form>
    </>
  );
};
