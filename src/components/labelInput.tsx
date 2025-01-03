import { Component } from "solid-js";

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
  return (
    <>
      <label class="label">
        <span class={error() ? "label-text text-error" : "label-text"}>
          {labelText}
        </span>
      </label>
      <label
        class={
          error()
            ? " input input-bordered flex items-center gap-2 input-error"
            : "input input-bordered flex items-center gap-2 "
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
          class={error() ? "text-error grow" : "grow"}
          placeholder={placeholder}
        />
      </label>
      <span class="text-red-800 text-xs">{error && error()}</span>
    </>
  );
};
