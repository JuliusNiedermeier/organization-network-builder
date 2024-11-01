import { chevronDown } from "solid-heroicons/solid";
import { Component, JSXElement } from "solid-js";
import { Avatar, Button } from "../";
import styles from "./NavigationBar.module.css";

export const NavigationBar: Component<{
  left?: JSXElement;
  right?: JSXElement;
}> = (props) => {
  return (
    <div class={styles.container}>
      <div class={styles.logo}>
        <div class={styles.logo_rect}></div>
        <h3>Greenhouse</h3>
      </div>
      <Button
        variant="outlined"
        label="Tesla inc."
        trailingIcon={chevronDown}
      />
      <Avatar src="/src/assets/avatar.svg" name="Me" />
    </div>
  );
};
