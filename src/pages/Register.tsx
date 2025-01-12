import LabelInput from "../components/labelInput";
import { AiOutlineMail } from "solid-icons/ai";
import { BsPersonVcardFill } from "solid-icons/bs";
import { FaSolidUserSecret } from "solid-icons/fa";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import Title from "../components/Title";
import { createMemo, createSignal, Show } from "solid-js";
import emailValidation from "../utils/emailValidation";
import { useNavigate } from "@solidjs/router";
import { Register } from "../api/auth";
import usernameValidation from "../utils/usernameValidation";
import passwordValidation from "../utils/passwordValidation";
import confirmPasswordValidation from "../utils/confirmPasswordValidation";
import { ApiError } from "../api/request.types";
export default () => {
  const navigate = useNavigate();

  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [confirmPassword, setConfirmPassword] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [username, setUsername] = createSignal("");
  const [firstName, setFirstName] = createSignal("");
  const [lastName, setLastName] = createSignal("");

  const [emailError, setEmailError] = createSignal("");
  const [passwordError, setPasswordError] = createSignal("");
  const [confirmPassError, setConfirmPassError] = createSignal("");
  const [usernameError, setUsernameError] = createSignal("");

  const [registerResult, setRegisterResult] = createSignal<string | null>(null);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setRegisterResult(null);
    setLoading(true);
    const resp = await Register({
      email: email(),
      userName: username(),
      password: password(),
      firstName: firstName(),
      lastName: lastName(),
    });

    if (resp.error) {
      const error = (resp as ApiError).message;
      setRegisterResult(error);
    }

    if (resp.message === "User created") {
      setRegisterResult("User created successfully, please verify your email");
      console.log(`/verify-email?e=${encodeURIComponent(email())}`);
      navigate(`/verify-email?e=${encodeURIComponent(email())}`);
    }

    // Handle Resp

    setLoading(false);
  };

  const error = createMemo(
    () =>
      !!emailError() ||
      !!passwordError() ||
      !!confirmPassError() ||
      !!usernameError() ||
      !email() ||
      !password() ||
      !confirmPassword() ||
      !username() ||
      !firstName() ||
      !lastName(),
  );

  return (
    <>
      <div class="mx-auto w-[80%] ">
        <Title>Register Now</Title>

        <form class="form-control w-[50%] mx-auto motion-preset-slide-up motion-duration-500 motion-ease">
          <LabelInput
            name={"Email"}
            error={emailError}
            value={email()}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            onFocusOut={(e) => setEmailError(emailValidation(e))}
            labelText="Email"
            type="text"
            placeholder="Email"
            Icon={AiOutlineMail}
          />
          <LabelInput
            name={"Username"}
            error={usernameError}
            value={username()}
            onFocusOut={(e) => setUsernameError(usernameValidation(e))}
            onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
            labelText="Username"
            type="text"
            placeholder="Username"
            Icon={FaSolidUserSecret}
          />
          <div class="divider"></div>
          <LabelInput
            name={"FirstName"}
            error={() => ""}
            value={firstName()}
            onInput={(e) => setFirstName((e.target as HTMLInputElement).value)}
            labelText="First Name"
            type="text"
            placeholder="First Name"
            Icon={BsPersonVcardFill}
          />
          <LabelInput
            name={"LastName"}
            error={() => ""}
            value={lastName()}
            onInput={(e) => setLastName((e.target as HTMLInputElement).value)}
            labelText="Lastname Name"
            type="text"
            placeholder="Last Name"
            Icon={BsPersonVcardFill}
          />
          <div class="divider"></div>
          <LabelInput
            error={passwordError}
            value={password()}
            onFocusOut={(e) => setPasswordError(passwordValidation(e))}
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
            labelText="Password"
            type="password"
            placeholder="Password"
            Icon={RiSystemLockPasswordLine}
          />
          <LabelInput
            error={confirmPassError}
            value={confirmPassword()}
            onFocusOut={(e) =>
              setConfirmPassError(confirmPasswordValidation(e, password()))
            }
            onInput={(e) =>
              setConfirmPassword((e.target as HTMLInputElement).value)
            }
            labelText="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            Icon={RiSystemLockPasswordLine}
          />

          <button
            class="btn mt-2"
            onClick={handleSubmit}
            disabled={loading() || error()}
          >
            {loading() ? (
              <span class="loading loading-spinner loading-sm"></span>
            ) : (
              "Register"
            )}
          </button>
          <Show when={registerResult()}>
            <span class="text-error text-center mt-3">{registerResult()}</span>
          </Show>
          <div
            class="link mt-6 w-full text-center"
            onClick={() => navigate("/sign-in")}
          >
            Already a member? Sign In
          </div>
        </form>
      </div>
    </>
  );
};
