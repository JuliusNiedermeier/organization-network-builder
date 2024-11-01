import { Component, createMemo, createSignal, For, onMount } from "solid-js";
import styles from "./ActivityTimeline.module.css";
import moment, { Moment, unitOfTime } from "moment";

export const ActivityTimeline: Component = () => {
  // Set default view range
  const [viewBeginDate, setViewBeginDate] = createSignal(
    moment().startOf("year")
  );
  const [viewEndDate, setViewEndDate] = createSignal(moment().endOf("year"));

  // Set data range based on view range
  const [dataBeginDate, setDataBeginDate] = createSignal(
    moment().subtract(1, "year")
  );
  const [dataEndDate, setDataEndDate] = createSignal(moment().add(1, "year"));

  // Initialize view width
  const [viewWidth, setViewWidth] = createSignal(0);

  // calculate the correct space between ticks to fit the view range inside the view width
  const tick = createMemo<{ size: number; unit: unitOfTime.Base }>(() => {
    const minSize = 30;
    const duration = moment.duration(viewEndDate().diff(viewBeginDate()));

    const days = viewWidth() / duration.asDays();
    if (days > minSize) return { size: days, unit: "days" };

    const weeks = viewWidth() / duration.asWeeks();
    if (weeks > minSize) return { size: weeks, unit: "weeks" };

    const months = viewWidth() / duration.asMonths();
    if (months > minSize) return { size: months, unit: "months" };

    const years = viewWidth() / duration.asYears();
    if (years > minSize) return { size: years, unit: "years" };

    return { size: years, unit: "years" }; // epoch would be nicer
  });

  // Conversion between Moment and date picker element value
  const momentToInputValue = (moment: Moment) => moment.format("YYYY-MM-DD");
  const inputValueToMoment = (value: string) => moment(value);

  // sync view width signal with actual view width
  const viewSizeObserver = new ResizeObserver((e) => {
    setViewWidth(e[0].borderBoxSize[0].inlineSize);
  });

  let containerEl: HTMLDivElement;
  let tickContainerEl: HTMLDivElement;

  onMount(() => {
    viewSizeObserver.observe(containerEl);
    tickContainerEl.addEventListener("wheel", (e) => {
      e.preventDefault();

      setViewBeginDate((value) =>
        value.clone().add(e.deltaY / Math.abs(e.deltaY), "days")
      );
      setViewEndDate((value) =>
        value.clone().subtract(e.deltaY / Math.abs(e.deltaY), "days")
      );
      setDataBeginDate((value) =>
        value.clone().add(e.deltaY / Math.abs(e.deltaY), "days")
      );
      setDataEndDate((value) =>
        value.clone().subtract(e.deltaY / Math.abs(e.deltaY), "days")
      );
    });
  });

  const tickNum = () =>
    Math.round(
      moment.duration(dataEndDate().diff(dataBeginDate())).as(tick().unit)
    );

  const ticks = () => {
    const t: string[] = [];

    for (let i = 0; i < tickNum(); i++) {
      const tickDate = dataBeginDate().clone().add(i, tick().unit);

      if (tick().unit === "days" && tickDate.date() === 1) {
        t.push("January");
      } else if (tick().unit === "weeks" && tickDate.week() % 13 === 0) {
        t.push("Q3");
      } else if (tick().unit === "months" && tickDate.month() === 1) {
        t.push("2022");
      } else if (tick().unit === "years" && tickDate.year() % 5 === 0) {
        t.push("2020");
      } else {
        t.push("");
      }
    }

    return t;
  };

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <div>
          <h4>Data timeframe</h4>
          <span>{dataBeginDate().format("DD. MMM YYYY")}</span>
          <span>{" <-> "}</span>
          <span>{dataEndDate().format("DD. MMM YYYY")}</span>
        </div>
        <div class={styles.date}>
          <h4>View timeframe</h4>
          <input
            type="date"
            value={momentToInputValue(viewBeginDate())}
            onInput={({ currentTarget: { value } }) =>
              setViewBeginDate(inputValueToMoment(value))
            }
          />
          <span> to </span>
          <input
            type="date"
            value={momentToInputValue(viewEndDate())}
            onInput={({ currentTarget: { value } }) =>
              setViewEndDate(inputValueToMoment(value))
            }
          />
        </div>
      </header>
      <div class={styles["timeline-container"]} ref={containerEl}>
        <div class={styles["timeline-ticks"]} ref={tickContainerEl}>
          <For each={ticks()}>
            {(tickItem) => (
              <div
                class={styles["timeline-tick"]}
                classList={{ [styles.accent]: tickItem.length > 0 }}
                style={{
                  "margin-left": `${tick().size / 2}px`,
                  "margin-right": `${tick().size / 2}px`,
                }}
              >
                <span>{tickItem}</span>
              </div>
            )}
          </For>
        </div>
        <div class={styles["timeline-body"]}>
          <For each={Array(100)}>
            {(tick, index) => (
              <div class={styles.row}>
                <div class={styles.activity}>
                  <span class={styles.scope}>Scope 3.1</span>Activity {index()}
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
