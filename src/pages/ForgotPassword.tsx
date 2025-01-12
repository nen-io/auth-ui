import { createSignal } from "solid-js";
import LabelInput from "../components/labelInput";
import Title from "../components/Title";
import { ForgotPasswordRequest } from "../api/auth";
import toast from "solid-toast";
import { useNavigate } from "@solidjs/router";
import emailValidation from "../utils/emailValidation";

export default () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal("");
  const [emailError, setEmailError] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    const resp = await ForgotPasswordRequest(email());
    setLoading(false);

    if (resp.success) {
      toast.success("Password reset email sent");
      navigate("/forgot-password/check-email");
    }

    if (resp.error) {
      setError(resp.message as string);
    }
  };

  return (
    <>
      <Title>Forgot Password</Title>

      <form
        class="motion-preset-slide-up motion-duration-500"
        onSubmit={handleSubmit}
      >
        <LabelInput
          value={email()}
          labelText="Email"
          name="email"
          placeholder="Email"
          error={emailError}
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          onFocusOut={(e) => setEmailError(emailValidation(e))}
        />

        <div class="mt-2">
          <button class="btn btn-md mt-6" disabled={!!emailError()}>
            {loading() ? (
              <span class="loading loading-spinner loading-sm"></span>
            ) : (
              "Reset Password"
            )}
          </button>
        </div>
        {error() && <p class="text-red-500 mt-6">{error()}</p>}
      </form>
    </>
  );
};
