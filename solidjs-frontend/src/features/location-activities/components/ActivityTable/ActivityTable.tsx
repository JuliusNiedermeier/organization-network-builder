import { Button } from "$src/ui-system";
import { chevronDown, chevronRight } from "solid-heroicons/solid";
import { Component, For } from "solid-js";
import styles from "./ActivityTable.module.css";

export const ActivityTable: Component = () => {
  const items = [
    { color: "#378657" },
    { color: "#A14163" },
    { color: "#915CAA" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
    { color: "#E5E5E5" },
  ];
  return (
    <>
      <header class={styles.header}>
        <input type="checkbox" />
        <Button variant="contained" label="Filter" leadingIcon={chevronDown} />
      </header>
      <div class={styles.container}>
        <For each={[...items]}>
          {(item, index) => (
            <div class={styles.item}>
              <input type="checkbox" />
              <strong>Beschreibung...</strong>
              <small
                class={styles.scope}
                // style={{ "background-color": item.color }}
              >
                Scope 3.2
              </small>
              <span>26.547,34</span>
              <span>Tonnen</span>
              <span>{Date.now().toLocaleString()}</span>
            </div>
          )}
        </For>
      </div>
    </>
  );
};
