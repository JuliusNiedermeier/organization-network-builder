import moment, { Moment, unitOfTime } from "moment";
import { Component, createSignal, For, onCleanup, onMount } from "solid-js";
import styles from "./Timeline.module.css";

type TickUnit = Exclude<
  unitOfTime.Base,
  | "milliseconds"
  | "millisecond"
  | "ms"
  | "seconds"
  | "second"
  | "s"
  | "minutes"
  | "minute"
  | "m"
  | "hours"
  | "hour"
  | "h"
  | "days"
  | "d"
  | "weeks"
  | "w"
  | "months"
  | "M"
  | "years"
  | "y"
>;

type Tick = {
  moment: Moment;
  offset: number;
  type: "sm" | "md" | "lg";
  label?: string;
};

export const Timeline: Component<{
  begin: Date;
  end: Date;
  minGap: number;
  onUpdate: (begin: Date, end: Date, secPixFactor: number) => any;
}> = (props) => {
  const begin = () => moment(props.begin);
  const end = () => moment(props.end);
  const duration = () => moment.duration(end().diff(begin()));

  const tickUnit = (): TickUnit | undefined => {
    if (!containerWidth()) return;
    if (containerWidth()! / duration().asDays() > props.minGap) {
      return "day";
    }
    if (containerWidth()! / duration().asWeeks() > props.minGap) {
      return "week";
    }
    if (containerWidth()! / duration().asMonths() > props.minGap) {
      return "month";
    }
    if (containerWidth()! / duration().asYears() > props.minGap) {
      return "year";
    }
  };

  const getTickOffset = (tick: Moment) => {
    if (!containerWidth()) return;
    const millisPxRatio = containerWidth()! / duration().asSeconds();
    return (tick.unix() - begin().unix()) * millisPxRatio;
  };

  const ticks = () => {
    const ticks: Tick[] = [];
    if (!tickUnit()) return ticks;
    for (
      let tickMoment = moment(begin()).startOf(tickUnit()!);
      tickMoment.isBefore(end());
      tickMoment.add(1, tickUnit())
    ) {
      const tick: Tick = {
        moment: tickMoment.clone(),
        type: "sm",
        offset: getTickOffset(tickMoment) || 0,
      };

      if (tickUnit() === "day") {
        if (tick.moment.date() === 1) {
          tick.label = tick.moment.format("MMMM");
          tick.type = "lg";
        } else if (tickMoment.day() === 1) {
          tick.type = "md";
        }
      }

      if (tickUnit() === "week") {
        if (tick.moment.clone().startOf("quarter").isSame(tick.moment, "day")) {
          tick.label = `Q${tick.moment.format("Q")} ${tick.moment.weekday()}`;
          tick.type = "lg";
        }
      }

      if (tickUnit() === "month") {
        if (tick.moment.month() === 0) {
          tick.label = tick.moment.format("YYYY");
          tick.type = "lg";
        } else if (tick.moment.month() === 6) {
          tick.type = "md";
        }
      }

      if (tickUnit() === "year") {
        if (tick.moment.year() % 5 === 0) {
          tick.label = tick.moment.format("YYYY");
          tick.type = "lg";
        }
      }

      ticks.push(tick);
    }
    return ticks;
  };

  // Container width sync
  let containerElement: HTMLDivElement | undefined;
  const [containerWidth, syncContainerWidth] = createSignal<number>();
  const handleContainerResize = (event: ResizeObserverEntry[]) => {
    syncContainerWidth(event[0].borderBoxSize[0].inlineSize);
  };
  const containerResizeObserver = new ResizeObserver(handleContainerResize);

  // Request change on scroll
  const handleWheelEvent = (event: WheelEvent) => {
    if (!tickUnit() || !containerWidth()) return;
    const origin = (1 / containerWidth()!) * event.offsetX;
    const delta = moment.duration(1, tickUnit()).asSeconds();
    const direction = event.deltaY < 0 ? 1 : -1;

    if (duration().asWeeks() <= 1 && direction > 0) return;
    if (duration().asYears() >= 10 && direction < 0) return;

    const deltaBegin = origin * delta * direction;
    const deltaEnd = (1 - origin) * delta * direction;

    props.onUpdate(
      begin().clone().add(deltaBegin, "seconds").toDate(),
      end().clone().subtract(deltaEnd, "seconds").toDate(),
      containerWidth()! / duration().asSeconds()
    );
  };

  // Mounting
  onMount(() => {
    if (!containerElement) return;
    containerResizeObserver.observe(containerElement);
    containerElement.addEventListener("wheel", handleWheelEvent);
  });

  // Unmounting
  onCleanup(() => {
    containerResizeObserver.disconnect();
    containerElement?.removeEventListener("wheel", handleWheelEvent);
  });

  return (
    <>
      <div class={styles.container} ref={containerElement}>
        <For each={ticks()}>
          {(tick) => (
            <div
              class={styles.tick}
              classList={{
                [styles["tick--sm"]]: tick.type === "sm",
                [styles["tick--md"]]: tick.type === "md",
                [styles["tick--lg"]]: tick.type === "lg",
              }}
              style={{
                left: `${tick.offset}px`,
              }}
            >
              <span class={styles["tick__label"]}>{tick.label}</span>
            </div>
          )}
        </For>
      </div>
    </>
  );
};
