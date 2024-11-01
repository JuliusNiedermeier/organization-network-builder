import { Component } from "solid-js";
import styles from "./Avatar.module.css";

export const Avatar: Component<{ src: string; name: string }> = (props) => {
  return (
    <div class={styles.container}>
      <img src={props.src} alt={props.name} />
    </div>
  );
};
