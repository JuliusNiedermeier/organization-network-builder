import { Component } from "solid-js";
import styles from "./DashboardHeader.module.css";

export const DashboardHeader: Component<{
  locationName: string;
  companyName: string;
}> = (props) => {
  return (
    <header class={styles.container}>
      <h3>{props.companyName}</h3>
      <h1>{props.locationName}</h1>
    </header>
  );
};
