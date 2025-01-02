import { Component } from "solid-js";

interface Props {
  labelText: string;
  placeholder?: string;
  value?: string | number;
  onInput?: (e: Event) => void;
  onFocusOut?: (e: Event) => void;
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
  onFocusOut,
  Icon,
}: Props) => {
  return (
    <>
      <label class="label">
        <span class="label-text">{labelText}</span>
      </label>
      <label class="input input-bordered flex items-center gap-2">
        {Icon && <Icon size={16} class="h-4 w-4 opacity-70" color="white" />}
        <input
          name={name}
          value={value}
          onInput={onInput}
          onFocusOut={onFocusOut}
          type={type}
          class="grow"
          placeholder={placeholder}
        />
      </label>
    </>
  );
};
