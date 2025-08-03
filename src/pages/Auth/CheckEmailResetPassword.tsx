import { useSearchParams } from "@solidjs/router";
import Title from "../../components/Title";
import { createEffect, createMemo, createSignal } from "solid-js";
import { RequestVerify } from "../../api/auth";

export default () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = createSignal(false);

  const [requestVerify, setRequestVerify] = createSignal("");
  const [error, setError] = createSignal(false);

  const e = searchParams.e as string;

  const handleRetry = async () => {
    setLoading(true);
    setRequestVerify("");
    setError(false);

    const resp = await RequestVerify({ email: e });

    if (resp?.success) {
      setError(false);
      setRequestVerify(resp.message as string);
    }

    if (resp?.error) {
      console.log("here");
      setError(true);
      setRequestVerify(resp.message as string);
    }

    setLoading(false);
  };

  const errorClass = createMemo(() =>
    error()
      ? "text-error text-sm text-gray-500 mt-1 "
      : "text-success text-sm text-gray-500 mt-1 ",
  );

  createEffect(() => console.log(errorClass()));

  return (
    <>
      <Title>Check Email</Title>

      <p class="text-center">
        Check your email for a verification link. After you have successfully
        verified your account you will be able to sign in.
      </p>

      <p class="text-center">
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
        <span class={errorClass()}>{requestVerify()}</span>
      </div>
    </>
  );
};
