import LabelInput from "../../components/labelInput";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import { createMemo, createSignal, Show } from "solid-js";
import { FaSolidUserSecret } from "solid-icons/fa";
import { SignIn } from "../../api/auth";
import {
  ApiError,
  LoginSuccessResp,
  VerifyEmail,
} from "../../api/request.types";
import { useNavigate } from "@solidjs/router";
import { useStore } from "../../store";
import toast from "solid-toast";
import Title from "../../components/Title";

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

    if (resp?.success) {
      const { username, email } = resp as LoginSuccessResp;

      store.setLoginDetails({ username, email });
      setLoading(false);
      toast.success("Signed In successfully", { duration: 2000 });
      navigate("/home");
    }

    if (resp.message === "VERIFY EMAIL") {
      const { email } = resp as VerifyEmail;
      setLoading(false);
      navigate(`/verify-email?e=${email}`);
    }

    if (resp.error) {
      const { message } = resp as ApiError;

      setLoading(false);
      setLoginResult(message);
    }
  };

  const error = createMemo(() => !email() || !password());

  return (
    <>
      <Title>Sign In</Title>

      <form
        class="form-control w-[50%] mx-auto motion-preset-slide-up motion-duration-500 motion-ease"
        onSubmit={handleSubmit}
      >
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

        <button class="btn mt-2" disabled={loading() || error()}>
          {loading() ? (
            <span class="loading loading-spinner loading-sm"></span>
          ) : (
            "Sign In"
          )}
        </button>
        <div class="mt-2">
        <a class="btn" href="http://localhost:6969/auth/google/login">Sign In with Google</a>
        </div>
        <Show when={loginResult()}>
          <p class="text-error text-center mt-3">{loginResult()}</p>
        </Show>

        <div
          class="link mt-6 w-full text-center"
          onClick={() => navigate("/register")}
        >
          Not a member? Register now
        </div>

        <div
          class="link mt-3 w-full text-center"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </div>

      </form>


    </>
  );
};
