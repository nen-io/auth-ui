import { useSearchParams } from "@solidjs/router";
import Title from "../components/Title";
import { createEffect, createSignal } from "solid-js";
import { RequestVerify } from "../api/auth";

export default () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = createSignal(false);

  const [requestVerify, setRequestVerify] = createSignal("");
  const [error, setError] = createSignal(false);

  const e = searchParams.e as string;

  createEffect(() => {
    console.log(e, "e");
  });

  const handleRetry = async () => {
    setLoading(true);
    setRequestVerify("");
    setError(false);

    const resp = await RequestVerify({ email: e });

    if (resp?.success) {
      setRequestVerify(resp.message as string);
    }

    if (resp?.error) {
      setError(true);
      setRequestVerify(resp.message as string);
    }

    setLoading(false);
  };

  return (
    <>
      <Title>Check Email</Title>

      <p>
        Check your email for a verification link. After you have successfully
        verified your account you will be able to sign in.
      </p>

      <p>
        If you haven't recieved the verification after a few minutes, please
        request another link by clicking below.
      </p>

      <div class="flex items-center w-full flex-col">
        <button
          class="btn mt-2 mx-auto"
          onClick={handleRetry}
          disabled={loading()}
        >
          {loading() ? (
            <span class="loading loading-spinner loading-sm"></span>
          ) : (
            "Request another link"
          )}
        </button>
        <span
          class={
            "text-sm text-gray-500 mt-1 " + error()
              ? "text-error"
              : "text-success"
          }
        >
          {requestVerify()}
        </span>
      </div>
    </>
  );
};
