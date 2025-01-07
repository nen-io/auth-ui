import { createSignal } from "solid-js";
import LabelInput from "../components/labelInput";
import Title from "../components/Title";

export default () => {
  const [email, setEmail] = createSignal("");

  return (
    <>
      <Title>Forgot Password</Title>

      <LabelInput
        value={email()}
        labelText="Email"
        name="email"
        placeholder="Email"
        error={() => ""}
        onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
      />

      <div class="btn btn-md">Request Password Reset</div>
    </>
  );
};
