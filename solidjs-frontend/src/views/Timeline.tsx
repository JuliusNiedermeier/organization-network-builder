import { Timebar } from "$src/features/location-activities/components/TimeBar/Timebar";
import moment from "moment";
import { Component, createSignal } from "solid-js";

const Timeline: Component = () => {
  const [begin, setBegin] = createSignal(moment().startOf("month").toDate());
  const [end, setEnd] = createSignal(moment().endOf("month").toDate());

  return (
    <div style={{ padding: "8rem" }}>
      <Timebar
        begin={begin()}
        end={end()}
        minGap={20}
        onUpdate={(begin, end) => {
          setBegin(begin);
          setEnd(end);
        }}
      />
    </div>
  );
};

export default Timeline;
