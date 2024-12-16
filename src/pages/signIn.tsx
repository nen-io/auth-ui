import { AiOutlineMail } from "solid-icons/ai";
import LabelInput from "../components/labelInput";
import { RiSystemLockPasswordLine } from "solid-icons/ri";

export default () => {
  return (
    <>
      <div class="mx-auto w-[80%] ">
        <h1 class="text-xl underline w-full text-center mb-6 font-bold">
          Sign In
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
            labelText="Password"
            type="password"
            placeholder="Password"
            Icon={RiSystemLockPasswordLine}
          />

          <button class="btn mt-2">Sign In</button>
        </form>
      </div>
    </>
  );
};
