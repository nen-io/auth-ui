import LabelInput from "../components/labelInput";
import { AiOutlineMail } from "solid-icons/ai";
import { BsPersonVcardFill } from "solid-icons/bs";
import { FaSolidUserSecret } from "solid-icons/fa";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import Title from "../components/Title";
export default () => {
  return (
    <>
      <div class="mx-auto w-[80%] ">
        <Title>Register Now</Title>

        <form class="form-control w-[50%] mx-auto">
          <LabelInput
            name={"Email"}
            error={() => ""}
            labelText="Email"
            type="text"
            placeholder="Email"
            Icon={AiOutlineMail}
          />
          <LabelInput
            name={"Username"}
            error={() => ""}
            labelText="Username"
            type="text"
            placeholder="Username"
            Icon={FaSolidUserSecret}
          />
          <div class="divider"></div>
          <LabelInput
            name={"FirstName"}
            error={() => ""}
            labelText="First Name"
            type="text"
            placeholder="First Name"
            Icon={BsPersonVcardFill}
          />
          <LabelInput
            name={"LastName"}
            error={() => ""}
            labelText="Lastname Name"
            type="text"
            placeholder="Last Name"
            Icon={BsPersonVcardFill}
          />
          <div class="divider"></div>
          <LabelInput
            error={() => ""}
            labelText="Password"
            type="password"
            placeholder="Password"
            Icon={RiSystemLockPasswordLine}
          />
          <LabelInput
            error={() => ""}
            labelText="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            Icon={RiSystemLockPasswordLine}
          />

          <button class="btn mt-2">Register Now</button>
        </form>
      </div>
    </>
  );
};
