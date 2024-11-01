import { Button } from "$src/ui-system";
import moment from "moment";
import { plus, eyeSlash, lockOpen, listBullet } from "solid-heroicons/solid";
import { Component, createSignal } from "solid-js";
import { ActivityTable } from "../../components/ActivityTable/ActivityTable";
import { Table } from "../../components/Table/Table";
import { Timebar } from "../../components/TimeBar/Timebar";
import styles from "./LocationActivitiesManager.module.css";

export const LocationActivitiesManager: Component = () => {
  const [begin, setBegin] = createSignal(moment().startOf("month").toDate());
  const [end, setEnd] = createSignal(moment().endOf("month").toDate());

  return (
    // <div class={styles.container}>
    //   <div class={styles.controlls}>
    //     <div style={{ flex: 1 }}>
    //       <Button
    //         variant="contained"
    //         label="New Activity"
    //         trailingIcon={plus}
    //       />
    //     </div>
    //     <Button variant="vague" trailingIcon={eyeSlash} />
    //     <Button variant="vague" trailingIcon={lockOpen} />
    //     <Button variant="vague" label="Filter" trailingIcon={listBullet} />
    //   </div>

    //   <Timebar
    //     begin={begin()}
    //     end={end()}
    //     minGap={10}
    //     onUpdate={(begin, end) => {
    //       setBegin(begin);
    //       setEnd(end);
    //     }}
    //   />

    //   <Table
    //     begin={begin()}
    //     end={end()}
    //     onUpdate={(begin, end) => {
    //       setBegin(begin);
    //       setEnd(end);
    //     }}
    //   />
    // </div>
    <ActivityTable />
  );
};
