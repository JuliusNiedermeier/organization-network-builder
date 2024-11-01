import { Component, JSXElement } from "solid-js";
import styles from "./AppLayout.module.css";

export const AppLayout: Component<{
  navigation: JSXElement;
  sidebar: JSXElement;
  main: JSXElement;
}> = (props) => {
  return (
    <div class={styles.container}>
      <nav class={styles.navigation}>{props.navigation}</nav>
      <aside class={styles.sidebar}>{props.sidebar}</aside>
      <main class={styles.main}>{props.main}</main>
    </div>
  );
};
