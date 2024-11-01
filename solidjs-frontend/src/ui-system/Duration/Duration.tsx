import { Component } from "solid-js";
import styles from "./Duration.module.css";

export const Duration: Component<{ from: string; to: string }> = (props) => {
  return (
    <div class={styles.duration}>
      <div class={styles.from}>{props.from}</div>
      <div class={styles.line} />
      <div class={styles.to}>{props.to}</div>
    </div>
  );
};
