import { ParentProps } from "solid-js";
import Navbar from "../components/navbar";
import { Toaster } from "solid-toast";
import { createMemo } from "solid-js";
import { useLocation } from "@solidjs/router";

export default ({ children }: ParentProps) => {
  const location = useLocation();

  const containerClass = createMemo(() => {
    // if landing page we dont want the container to be centered
    if (location.pathname === "/") return "w-full";

    return "mx-auto w-[80%]";
  });

  return (
    <div>
      <Navbar />
      <Toaster
        toastOptions={{
          className: "toast_content",
        }}
      />
      <div class={containerClass()}>{children}</div>
    </div>
  );
};
