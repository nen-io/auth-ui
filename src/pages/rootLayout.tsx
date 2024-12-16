import { ParentProps } from "solid-js";
import Navbar from "../components/navbar";

export default ({ children }: ParentProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
