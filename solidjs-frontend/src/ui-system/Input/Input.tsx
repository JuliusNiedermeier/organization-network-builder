import {
  Component,
  ComponentProps,
  createEffect,
  createSignal,
  For,
  onMount,
} from "solid-js";
import { Button } from "../Button/Button";
import { IconProps } from "../Icon/Icon";
import styles from "./Input.module.css";

type ButtonVariants = ComponentProps<typeof Button>["variant"];

export const Input: Component<{
  variant: "vague" | "outlined";
  placeholder?: string;
  focus?: boolean;
  value?: string;
  onInput: (value: string) => void;
  onBlur?: () => void;
  actions?: {
    label?: string;
    icon: IconProps;
    onClick: () => void;
    variant: ButtonVariants;
  }[];
}> = (props) => {
  let [input, setInput] = createSignal<HTMLInputElement>();

  onMount(() =>
    createEffect(() => {
      props.focus ? input()?.focus() : input()?.blur();
    })
  );

  return (
    <div
      class={styles.container}
      classList={{
        [styles["vague"]]: props.variant === "vague",
        [styles["outlined"]]: props.variant === "outlined",
      }}
    >
      <input
        class={styles.input}
        ref={setInput}
        value={props.value || ""}
        onInput={(e) => props.onInput(e.currentTarget.value)}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      />
      <For each={props.actions}>
        {(action) => (
          <Button
            label={action.label}
            variant={action.variant}
            trailingIcon={action.icon}
            onClick={action.onClick}
          />
        )}
      </For>
    </div>
  );
};
