import { Component } from "solid-js";
import { createEffect } from "solid-js";

interface Props {
  labelText: string;
  placeholder?: string;
  value?: string | number;
  onInput?: (e: Event) => void;
  onFocusOut?: (e: Event) => void;
  error: () => string;
  type?: string;
  name?: string;
  Icon?: Component<{ size: number; color: string; class: string }>;
}

export default ({
  labelText,
  placeholder,
  type = "text",
  name,
  value,
  onInput,
  error,
  onFocusOut,
  Icon,
}: Props) => {

  createEffect(( ) => {
    console.log(Boolean(error()))

    console.log("fieldset-legend " + Boolean(error()) ? " text-error" : "");
  })

  return (
    <fieldset class="fieldset ">
      <legend class="">
          {labelText}
      </legend>
      <label
        class={
          error()
            ? " input input-bordered flex items-center gap-[12px] input-error"
            : "input input-bordered flex items-center gap-[12px] "
            + "w-full pr-0"
        }
      >
        {Icon && (
          <Icon
            size={16}
            class="h-4 w-4 opacity-70"
            color={error() ? "red" : "white"}
          />
        )}
        <input
          name={name}
          value={value}
          onInput={onInput}
          onFocusOut={onFocusOut}
          type={type}
          class={error() ? "text-error grow" : "grow" + " w-full pl-2"}
          placeholder={placeholder}
        />
      </label>
      <span class="text-error text-xs mt-1">{error && error()}</span>
    </fieldset>
  );
};
