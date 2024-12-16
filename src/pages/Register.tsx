import LabelInput from "../components/labelInput";
import { AiOutlineMail } from "solid-icons/ai";
import { BsPersonVcardFill } from "solid-icons/bs";
import { FaSolidUserSecret } from "solid-icons/fa";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
export default () => {
  return (
    <>
      <div class="mx-auto w-[80%] ">
        <h1 class="text-xl underline w-full text-center mb-6 font-bold">
          Register Now
        </h1>

        <form class="form-control w-[50%] mx-auto">
          <LabelInput
            name={"Email"}
            labelText="Email"
            type="text"
            placeholder="Email"
            Icon={AiOutlineMail}
          />
          <LabelInput
            name={"Username"}
            labelText="Username"
            type="text"
            placeholder="Username"
            Icon={FaSolidUserSecret}
          />
          <div class="divider"></div>
          <LabelInput
            name={"FirstName"}
            labelText="First Name"
            type="text"
            placeholder="First Name"
            Icon={BsPersonVcardFill}
          />
          <LabelInput
            name={"LastName"}
            labelText="Lastname Name"
            type="text"
            placeholder="Last Name"
            Icon={BsPersonVcardFill}
          />
          <div class="divider"></div>
          <LabelInput
            labelText="Password"
            type="password"
            placeholder="Password"
            Icon={RiSystemLockPasswordLine}
          />
          <LabelInput
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
