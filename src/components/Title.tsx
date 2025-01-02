import { ParentProps } from "solid-js";

export default ({ children }: ParentProps) => {
  return (
    <h1 class="text-2xl underline w-full text-center mb-6 font-bolde">
      {children}
    </h1>
  );
};
