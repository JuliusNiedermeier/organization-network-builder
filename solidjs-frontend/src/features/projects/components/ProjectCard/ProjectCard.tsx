import { Link } from "@solidjs/router";
import { Component } from "solid-js";
import styles from "./ProjectCard.module.css";

export const ProjectCard: Component<{
  ID: string;
  name: string;
  description: string;
}> = (props) => {
  return (
    <Link href={`/company/${props.ID}`}>
      <div class={styles.container}>
        <h3 class={styles.name}>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};
