import { Component, For } from "solid-js";
import { Avatar } from "../";
import styles from "./AvatarCollection.module.css";

export const AvatarCollection: Component<{
  avatars: { src: string; name: string }[];
}> = (props) => {
  return (
    <div class={styles["avatar-collection"]}>
      <For each={props.avatars}>
        {(avatar) => (
          <div class={styles.avatar}>
            <Avatar src={avatar.src} name={avatar.name} />
          </div>
        )}
      </For>
    </div>
  );
};
