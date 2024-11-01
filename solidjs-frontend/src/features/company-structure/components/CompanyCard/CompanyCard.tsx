import { Card } from "$src/ui-system/Card/Card";
import { Component } from "solid-js";
import styles from "./CompanyCard.module.css";

export const CompanyCard: Component<{
  type?: "default" | "adjacent" | "selected";
  name: string;
  locationCount: number;
  employeeCount: number;
}> = (props) => {
  return (
    <Card
      variant={props.type === "selected" ? "contained" : "vague"}
      spacing="default"
      elevated
      clickable
    >
      <div
        class={styles.container}
        classList={{
          [styles["selected"]]: props.type === "selected",
          [styles["adjacent"]]: props.type === "adjacent",
        }}
      >
        <h4 class={styles.name}>{props.name}</h4>
        <small class={styles.meta}>
          {props.locationCount} locations • {props.employeeCount} employees
        </small>
      </div>
    </Card>
  );
};
