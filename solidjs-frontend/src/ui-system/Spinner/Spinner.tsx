import { Component } from "solid-js";
import styles from "./Spinner.module.css";

export const Spinner: Component<{ appearence: "dark" | "light" }> = (props) => {
  return (
    <div
      class={styles.spinner}
      classList={{ [styles["spinner--light"]]: props.appearence === "light" }}
    />
  );
};
