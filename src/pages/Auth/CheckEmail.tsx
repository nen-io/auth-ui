import { useNavigate } from "@solidjs/router";
import Title from "../../components/Title";
export default () => {
  const navigate = useNavigate();

  return (
    <>
      <Title>Check Email</Title>

      <p class="text-center">
        A reset password link has been sent to your email, please click on this
        link and set a new password for your account.
      </p>

      <p class="text-center">
        If you haven't recieved the verification after a few minutes, please
        request another link by retrying the forgot password step.
      </p>

      <div class="flex items-center w-full flex-col">
        <button
          class="btn mt-2 mx-auto"
          onClick={() => navigate("/forgot-password")}
        >
          Go to forgot password
        </button>
      </div>
    </>
  );
};
