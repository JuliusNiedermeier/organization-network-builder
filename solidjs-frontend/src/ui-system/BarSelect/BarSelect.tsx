import { Component, For } from "solid-js";
import { Button } from "../";
import { IconProps } from "../";
import styles from "./BarSelect.module.css";

type ItemId = string | number;
type Item = {
  id: ItemId | number;
  label: string;
  icon?: IconProps;
  onClick?: () => Promise<void>;
};

export const BarSelect: Component<{ items: Item[]; selected: string }> = (
  props
) => {
  function onClick(item: Item) {
    // if (!item.onClick) {
    //   selected = item.id;
    //   return;
    // }
    // item.onClick().then(() => {
    //   selected = item.id;
    // });
  }

  return (
    <div class={styles.container}>
      <For each={props.items}>
        {(item) => (
          <Button
            label={item.label}
            variant={item.id == props.selected ? "contained" : "text"}
            leadingIcon={item.icon}
            onClick={() => onClick(item)}
          />
        )}
      </For>
    </div>
  );
};
