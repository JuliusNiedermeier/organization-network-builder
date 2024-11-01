import { ParentComponent } from "solid-js";
import styles from "./Card.module.css";

export const Card: ParentComponent<{
  variant: "vague" | "contained";
  spacing: "dense" | "default" | "lofty";
  elevated?: boolean;
  clickable?: boolean;
}> = (props) => {
  return (
    <div
      class={styles.container}
      classList={{
        [styles["variant--vague"]]: props.variant === "vague",
        [styles["variant--contained"]]: props.variant === "contained",
        [styles["spacing--dense"]]: props.spacing === "dense",
        [styles["spacing--default"]]: props.spacing === "default",
        [styles["spacing--lofty"]]: props.spacing === "lofty",
        [styles.elevated]: props.elevated,
        [styles.clickable]: props.clickable,
      }}
    >
      {props.children}
    </div>
  );
};
