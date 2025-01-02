import { ParentProps } from "solid-js";
import Navbar from "../components/navbar";

export default ({ children }: ParentProps) => {
  return (
    <div>
      <Navbar />
      <div class="mx-auto w-[80%]">{children}</div>
    </div>
  );
};
