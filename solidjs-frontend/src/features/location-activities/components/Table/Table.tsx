import { Button } from "$src/ui-system";
import moment, { Moment, months } from "moment";
import { eyeSlash, listBullet, lockOpen, plus } from "solid-heroicons/solid";
import {
  Component,
  createEffect,
  createSignal,
  For,
  onMount,
  Show,
} from "solid-js";
import { Timeline } from "../Timeline/Timeline";
import styles from "./Table.module.css";

const data = [
  {
    begin: moment("2020-01-01"),
    end: moment("2021-01-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-02-01"),
    end: moment("2021-02-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-06-01"),
    end: moment("2021-06-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-03-01"),
    end: moment("2021-03-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-04-01"),
    end: moment("2021-04-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-04-01"),
    end: moment("2021-04-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },

  {
    begin: moment("2020-04-01"),
    end: moment("2021-04-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },

  {
    begin: moment("2020-04-01"),
    end: moment("2021-04-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-04-01"),
    end: moment("2021-04-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-04-01"),
    end: moment("2021-04-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-04-01"),
    end: moment("2021-04-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-04-01"),
    end: moment("2021-04-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-04-01"),
    end: moment("2021-04-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-04-01"),
    end: moment("2021-04-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-05-01"),
    end: moment("2021-05-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },

  {
    begin: moment("2020-07-01"),
    end: moment("2021-07-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-08-01"),
    end: moment("2021-08-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-09-01"),
    end: moment("2021-09-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-10-01"),
    end: moment("2021-10-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-11-01"),
    end: moment("2021-11-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2020-12-01"),
    end: moment("2021-12-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2021-01-01"),
    end: moment("2022-01-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2021-02-01"),
    end: moment("2022-02-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2021-03-01"),
    end: moment("2022-03-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2021-04-01"),
    end: moment("2022-04-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2021-05-01"),
    end: moment("2022-05-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2021-06-01"),
    end: moment("2022-06-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2021-07-01"),
    end: moment("2022-07-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
  {
    begin: moment("2021-08-01"),
    end: moment("2022-08-01"),
    label: "Ordered wood from manufacturer in poland",
    scope: "3.1",
  },
];

export const Table: Component<{
  begin: Date;
  end: Date;
  onUpdate: (begin: Date, end: Date) => void;
}> = (props) => {
  const [tableWidth, setTableWidth] = createSignal<number>();

  const viewBegin = () => moment(props.begin);
  const viewEnd = () => moment(props.end);
  const viewDuration = () => moment.duration(viewEnd().diff(viewBegin()));

  const dataBegin = () => moment(props.begin).subtract(1, "month");
  const dataEnd = () => moment(props.end).add(1, "month");
  const dataDuration = () => moment.duration(dataEnd().diff(dataBegin()));

  const secPixFactor = () => tableWidth()! / viewDuration().asSeconds();

  // Fetch mock data
  const activities = () => {
    return data
      .filter((activity) => {
        if (
          activity.end.isBefore(dataBegin()) ||
          activity.begin.isAfter(dataEnd())
        ) {
          return false;
        } else return true;
      })
      // .sort((a, b) => b.begin.unix() - a.begin.unix());
  };

  const getPixelOffset = (begin: Moment, target: Moment, factor: number) => {
    return moment.duration(target.diff(begin)).asSeconds() * factor;
  };

  const getPixelWidth = (begin: Moment, end: Moment, factor: number) => {
    return moment.duration(end.diff(begin)).asSeconds() * factor;
  };

  let tableElement: HTMLDivElement | undefined;
  const handleTableWidthResize = (e: ResizeObserverEntry[]) => {
    setTableWidth(e[0].borderBoxSize[0].inlineSize);
  };
  const tableWidthObserver = new ResizeObserver(handleTableWidthResize);

  onMount(() => {
    if (!tableElement) return;
    tableWidthObserver.observe(tableElement);
  });

  return (
    <div class={styles.container} ref={tableElement}>
      <For each={activities()}>
        {(activity) => (
          <div class={styles.row}>
            <div
              class={styles.activity}
              style={{
                "margin-left": `${getPixelOffset(
                  dataBegin(),
                  activity.begin,
                  secPixFactor() || 0
                )}px`,
                width: `${getPixelWidth(
                  activity.begin,
                  activity.end,
                  secPixFactor() || 0
                )}px`,
              }}
            >
              <div class={styles.scope}>Scope {activity.scope}</div>
              <span>{activity.label}</span>
              <div class={styles["activity__column"]}>
                <span class={styles["activity__column__label"]}>
                  Tonnes CO²
                </span>
                <span class={styles["activity__column__data"]}>34.574,23</span>
              </div>
              <div class={styles["activity__column"]}>
                <span class={styles["activity__column__label"]}>
                  Tonnes CO²
                </span>
                <span class={styles["activity__column__data"]}>34.574,23</span>
              </div>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};
