import { children, ParentComponent } from "solid-js";
import styles from "./List.module.css";

export const List: ParentComponent = (props) => {
  return <div class={styles.list}>{children(() => props.children)}</div>;
};
