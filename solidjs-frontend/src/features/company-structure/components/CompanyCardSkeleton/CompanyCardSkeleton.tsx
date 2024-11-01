import { Component } from "solid-js";
import styles from "./CompanyCardSkeleton.module.css";

export const CompanyCardSkeleton: Component = () => {
  return (
    <div class={styles.container}>
      <h4 class={styles.name}></h4>
      <small class={styles.meta}></small>
    </div>
  );
};
