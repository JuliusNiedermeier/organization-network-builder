import { Component, Show } from "solid-js";
import { Icon, Spinner } from "../";
import styles from "./Button.module.css";
import { IconProps } from "../Icon/Icon";

export const Button: Component<{
  label?: string;
  variant: "text" | "contained" | "outlined" | "vague";
  type?: "default" | "warn";
  disabled?: boolean;
  leadingIcon?: IconProps;
  trailingIcon?: IconProps;
  fullwidth?: boolean;
  loading?: boolean;
  onClick?: () => void;
}> = (props) => {
  return (
    <button
      class={styles.button}
      classList={{
        [styles["variant--text"]]: props.variant === "text",
        [styles["variant--contained"]]: props.variant === "contained",
        [styles["variant--outlined"]]: props.variant === "outlined",
        [styles["variant--vague"]]: props.variant === "vague",
        [styles["labeled"]]: props.label ? true : false,
      }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <Show when={!props.loading} fallback={<Spinner appearence="light" />}>
        <Show when={props.leadingIcon}>
          <Icon path={props.leadingIcon!} />
        </Show>
        <Show when={props.label}>
          <span class={styles.label}>{props.label}</span>
        </Show>
        <Show when={props.trailingIcon}>
          <Icon path={props.trailingIcon!} />
        </Show>
      </Show>
    </button>
  );
};
