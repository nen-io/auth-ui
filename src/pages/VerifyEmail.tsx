import { useNavigate, useParams } from "@solidjs/router";
import Title from "../components/Title";
import { createEffect, createSignal, Show } from "solid-js";
import { VerifyEmail } from "../api/auth";

export default () => {
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = createSignal<string | null>(null);

  createEffect(async () => {
    setError(null);
    if (!params.token || !params.id) {
      setError("Invalid token or id");
    }

    // Call the API to verify the email
    const resp = await VerifyEmail(params.id, params.token);
    if (!resp.success) {
      setError(resp.message as string);
    }

    if (resp.success) {
      navigate("/sign-in", { replace: true });
    }
  });

  return (
    <>
      <Title>Verify Email</Title>
      <p>
        Verifying email, you will be directed to sign in once email has been
        verified
      </p>
      <Show when={error()}>
        <p class="text-error">{error()}</p>
      </Show>
    </>
  );
};
