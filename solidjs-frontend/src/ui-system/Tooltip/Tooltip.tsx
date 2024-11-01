import { Component } from "solid-js";
import styles from "./Tooltip.module.css";

export const Tooltip: Component<{ label: string }> = (props) => {
  return (
    <div class={styles.container}>
      <span class={styles.label}>{props.label}</span>
    </div>
  );
};
