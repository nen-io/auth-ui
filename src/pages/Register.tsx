import LabelInput from "../components/labelInput";
import { AiOutlineMail } from "solid-icons/ai";
import { BsPersonVcardFill } from "solid-icons/bs";
import { FaSolidUserSecret } from "solid-icons/fa";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import Title from "../components/Title";
import { createSignal } from "solid-js";
import emailValidation from "../utils/emailValidation";
import { useNavigate } from "@solidjs/router";
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

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    console.log(
      email(),
      firstName(),
      lastName(),
      username(),
      password(),
      confirmPassword(),
    );
  };

  return (
    <>
      <div class="mx-auto w-[80%] ">
        <Title>Register Now</Title>

        <form class="form-control w-[50%] mx-auto">
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
            error={() => ""}
            value={username()}
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
            error={() => ""}
            value={password()}
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
            labelText="Password"
            type="password"
            placeholder="Password"
            Icon={RiSystemLockPasswordLine}
          />
          <LabelInput
            error={() => ""}
            value={confirmPassword()}
            onInput={(e) =>
              setConfirmPassword((e.target as HTMLInputElement).value)
            }
            labelText="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            Icon={RiSystemLockPasswordLine}
          />

          <button class="btn mt-2" onClick={handleSubmit}>
            Register Now
          </button>
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
