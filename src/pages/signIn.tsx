import LabelInput from "../components/labelInput";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import Title from "../components/Title";
import { createSignal } from "solid-js";
import { FaSolidUserSecret } from "solid-icons/fa";
import { SignIn } from "../api/auth";
import { redirect, useNavigate } from "@solidjs/router";

export default () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [loginResult, setLoginResult] = createSignal(null);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    const data = await SignIn({ email: email(), password: password() });
    // TODO: check login data to see if its verify email or error
    console.log(data);
    setLoading(false);
    navigate("/");
  };

  return (
    <>
      <Title>Sign In</Title>

      <form class="form-control w-[50%] mx-auto" onSubmit={handleSubmit}>
        <LabelInput
          name={"Email"}
          labelText="Email / Username"
          type="text"
          error={() => ""}
          value={email()}
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          placeholder="Email / Username"
          Icon={FaSolidUserSecret}
        />
        <LabelInput
          labelText="Password"
          error={() => ""}
          value={password()}
          onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
          type="password"
          placeholder="Password"
          Icon={RiSystemLockPasswordLine}
        />

        <button class="btn mt-2" disabled={loading()}>
          {loading() ? (
            <span class="loading loading-spinner loading-sm"></span>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </>
  );
};
