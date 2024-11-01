import { Component } from "solid-js";
import styles from "./LoadingScreen.module.css";

export const LoadingScreen: Component<{ status?: string }> = (props) => {
  return (
    <div class={styles.container}>
      <span>{props.status}</span>
      <div class={styles.progress} />
    </div>
  );
};

export default LoadingScreen;
