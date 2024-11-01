import { Button } from "$src/ui-system";
import { Component } from "solid-js";
import { trash } from "solid-heroicons/solid";
import styles from "./CompanyDashboardHeader.module.css";

export const CompanyDashboardHeader: Component<{
  name: string;
  onDelete: () => void;
}> = (props) => {
  return (
    <header class={styles.container}>
      <h1>{props.name}</h1>
      <Button
        variant="vague"
        trailingIcon={trash}
        label="Delete"
        onClick={props.onDelete}
      />
    </header>
  );
};
