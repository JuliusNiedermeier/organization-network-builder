import { children, ParentComponent } from "solid-js";
import styles from "./ListItem.module.css";

export const ListItem: ParentComponent = (props) => {
  return (
    <div class={styles["list-item"]}>{children(() => props.children)}</div>
  );
};
