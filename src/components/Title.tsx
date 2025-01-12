import { ParentProps } from "solid-js";

export default ({ children }: ParentProps) => {
  return (
    <h1 class="motion-preset-slide-down motion-ease motion-duration-500 text-5xl w-full text-center mb-3 font-bold">
      {children}
    </h1>
  );
};
