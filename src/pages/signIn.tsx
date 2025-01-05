import LabelInput from "../components/labelInput";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import Title from "../components/Title";
import { createSignal, Show } from "solid-js";
import { FaSolidUserSecret } from "solid-icons/fa";
import { SignIn } from "../api/auth";
import {
  LoginError,
  LoginSuccessResp,
  VerifyEmail,
} from "../api/request.types";
import { useNavigate } from "@solidjs/router";
import { useStore } from "../store";

export default () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [loginResult, setLoginResult] = createSignal<string | null>(null);
  const [store] = useStore();

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    const resp = await SignIn({ email: email(), password: password() });

    console.log(resp);

    if (!resp) {
      setLoginResult("Something went wrong, please try again");
      setLoading(false);
    }

    if (resp?.accessToken) {
      const { username, refreshToken, accessToken, email } =
        resp as LoginSuccessResp;

      store.setLoginDetails({ username, refreshToken, accessToken, email });
      setLoading(false);
      navigate("/");
    }

    if (resp.message === "VERIFY EMAIL") {
      resp as VerifyEmail;
      setLoading(false);
      navigate("/verify-email");
    }

    if (resp.error) {
      const { message } = resp as LoginError;

      setLoading(false);
      setLoginResult(message);
    }
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
        <Show when={loginResult()}>
          <p class="text-error text-center mt-3">{loginResult()}</p>
        </Show>

        <div
          class="link mt-6 w-full text-center"
          onClick={() => navigate("/register")}
        >
          Not a member? Register now
        </div>
      </form>
    </>
  );
};
