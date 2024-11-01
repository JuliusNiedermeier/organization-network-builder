import { Avatar, Button } from "$src/ui-system";
import { Component } from "solid-js";
import { arrowRightOnRectangle } from "solid-heroicons/solid";
import styles from "./AccountHeader.module.css";

export const AccountHeader: Component<{
  name: string;
  email: string;
  photo: string;
  onSignOut: () => any;
}> = (props) => {
  return (
    <header class={styles.container}>
      <Avatar src="src/assets/avatar.svg" name="Me" />
      <div class={styles.info}>
        <h3>{props.name}</h3>
        <span>{props.email}</span>
      </div>
      <Button
        variant="vague"
        label="Sign out"
        trailingIcon={arrowRightOnRectangle}
        onClick={props.onSignOut}
      />
    </header>
  );
};
