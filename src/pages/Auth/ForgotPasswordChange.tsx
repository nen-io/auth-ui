import { useParams } from "@solidjs/router";
import LabelInput from "../../components/labelInput";
import Title from "../../components/Title";
import { createEffect, createSignal } from "solid-js";

export function ForgotPasswordChange() {
  const params = useParams();
  const [password, setPassword] = createSignal("");
  const [confirmPassword, setConfirmPassword] = createSignal("");
  const [confirmPassError, setConfirmPassError] = createSignal("");

  createEffect(() => {
    console.log(params.token, params.id);
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (password() !== confirmPassword()) {
      setConfirmPassError("Passwords do not match");
      return;
    }
  };

  return (
    <>
      <Title>Reset Password</Title>
      <p class="my-6 text-center">Please enter your new password</p>

      <form
        class="motion-preset-slide-up motion-duration-500"
        onSubmit={handleSubmit}
      >
        <LabelInput
          labelText="New Password"
          name="new_password"
          type="password"
          placeholder="Password"
          onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
          error={() => ""}
        />
        <LabelInput
          labelText="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onInput={(e) =>
            setConfirmPassword((e.target as HTMLInputElement).value)
          }
          error={confirmPassError}
        />

        <div class="flex">
          <button class="btn btn-md mt-6">Reset Password</button>
        </div>
      </form>
    </>
  );
}
