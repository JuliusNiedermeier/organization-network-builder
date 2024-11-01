import { Component, createEffect, createSignal, onMount } from "solid-js";
import styles from "./TextArea.module.css";

export const TextArea: Component<{
  variant: "default" | "disappearing";
  placeholder?: string;
  focus?: boolean;
  value?: string;
  onInput: (value: string) => void;
  onBlur?: () => void;
}> = (props) => {
  let [input, setInput] = createSignal<HTMLInputElement>();

  onMount(() =>
    createEffect(() => {
      props.focus ? input()?.focus() : input()?.blur();
    })
  );

  return (
    <div class={styles.container}>
      <textarea
        class={styles.input}
        classList={{
          [styles["variant--default"]]: props.variant === "default",
          [styles["variant--disappearing"]]: props.variant === "disappearing",
        }}
        ref={setInput}
        value={props.value || ""}
        onInput={(e) => props.onInput(e.currentTarget.value)}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      />
      <div class={styles.underline}></div>
    </div>
  );
};
