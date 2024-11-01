import moment, { Moment, unitOfTime } from "moment";
import {
  Component,
  createMemo,
  createSignal,
  For,
  onCleanup,
  onMount,
} from "solid-js";
import styles from "./Timebar.module.css";

type TickType = "primary" | "secondary" | "tertiary";

type Tick = {
  type: TickType;
  label?: string;
  moment: Moment;
};

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

export const Timebar: Component<{
  begin: Date;
  end: Date;
  minGap: number;
  onUpdate: (begin: Date, end: Date) => void;
}> = (props) => {
  const begin = () => moment(props.begin);
  const end = () => moment(props.end);
  const duration = () => moment.duration(end().diff(begin()));
  const [trackWidth, setTrackWidth] = createSignal<number>();

  // Tick unit
  const tickUnit = (): TickUnit | undefined => {
    if (!trackWidth()) return;
    if (trackWidth()! / duration().asDays() > props.minGap) {
      return "day";
    }
    if (trackWidth()! / duration().asWeeks() > props.minGap) {
      return "week";
    }
    if (trackWidth()! / duration().asMonths() > props.minGap) {
      return "month";
    }
    if (trackWidth()! / duration().asYears() > props.minGap) {
      return "year";
    }
  };

  // Time update on scroll
  const handleWheeEvent = (event: WheelEvent) => {
    if (!trackWidth()) return;

    const amount = moment.duration(1, tickUnit());

    let deltaBegin = 0;
    let deltaEnd = 0;

    if (event.deltaX) {
      const directionFactor = event.deltaX < 0 ? -1 : 1;
      deltaBegin += amount.asSeconds() * directionFactor;
      deltaEnd -= amount.asSeconds() * directionFactor;
    }

    if (event.shiftKey && event.deltaY !== 0) {
      const directionFactor = event.deltaY < 0 ? -1 : 1;
      deltaBegin += amount.asSeconds() * directionFactor;
      deltaEnd -= amount.asSeconds() * directionFactor;
    }

    if (event.deltaY && !event.shiftKey) {
      const direction = event.deltaY < 0 ? "in" : "out";
      const directionFactor = direction === "out" ? 1 : -1;
      const origin = (1 / trackWidth()!) * event.offsetX;

      if (
        (duration().asSeconds() >= moment.duration(1, "week").asSeconds() &&
          direction === "out") ||
        (duration().asSeconds() <= moment.duration(10, "years").asSeconds() &&
          direction === "in")
      ) {
        deltaBegin += origin * amount.asSeconds() * directionFactor;
        deltaEnd += (1 - origin) * amount.asSeconds() * directionFactor;
      }
    }

    props.onUpdate(
      begin().clone().add(deltaBegin, "seconds").toDate(),
      end().clone().subtract(deltaEnd, "seconds").toDate()
    );
  };

  const ticks = createMemo(() => {
    const timestamps: Tick[] = [];

    if (!tickUnit()) return timestamps;

    for (
      let tickMoment = moment(begin()).startOf(tickUnit()!);
      tickMoment.isBefore(end());
      tickMoment.add(1, tickUnit()!)
    ) {
      timestamps.push({
        ...getTickType(tickMoment.clone()),
        moment: tickMoment.clone(),
      });
    }

    return timestamps;
  });

  // Timestamps for ticks
  const unixTicks = () => {
    return ticks().map((tick) => tick.moment.unix());
  };

  // Figure out tick type & label
  const getTickType = (tick: Moment): { type: TickType; label?: string } => {
    if (tickUnit() === "day") {
      if (tick.date() === 1) {
        return { type: "primary", label: tick.format("MMMM") };
      } else if (tick.day() === 1) {
        return { type: "secondary" };
      } else return { type: "tertiary" };
    }

    if (tickUnit() === "week") {
      if (tick.week() % 13 === 0) {
        return { type: "primary", label: `Q${tick.format("Q")}` };
      } else return { type: "tertiary" };
    }

    if (tickUnit() === "month") {
      if (tick.month() === 0) {
        return { type: "primary", label: tick.format("YYYY") };
      } else if (tick.month() === 6) {
        return { type: "secondary" };
      } else return { type: "tertiary" };
    }

    if (tickUnit() === "year") {
      if (tick.year() % 5 === 0) {
        return { type: "primary", label: tick.format("YYYY") };
      }
    }

    return { type: "tertiary" };
  };

  const getPixelOffsetFromUnix = (unix: number) => {
    const secondToPixelRatio = trackWidth()! / duration().asSeconds();
    return (unix - begin().unix()) * secondToPixelRatio;
  };

  let trackElement: HTMLDivElement | undefined;
  const handleTrackWidthResize = (e: ResizeObserverEntry[]) => {
    setTrackWidth(e[0].borderBoxSize[0].inlineSize);
  };
  const trackWIdthObserver = new ResizeObserver(handleTrackWidthResize);

  onMount(() => {
    if (!trackElement) return;
    trackWIdthObserver.observe(trackElement);
    trackElement?.addEventListener("wheel", handleWheeEvent, { passive: true });
  });

  onCleanup(() => {
    trackElement?.removeEventListener("wheel", handleWheeEvent);
  });

  return (
    <div class={styles.container} ref={trackElement}>
      <For each={unixTicks()}>
        {(tick, index) => (
          <div
            class={styles.tick}
            classList={{
              [styles["tick--primary"]]: ticks()[index()].type === "primary",
              [styles["tick--secondary"]]:
                ticks()[index()].type === "secondary",
              [styles["tick--tertiary"]]: ticks()[index()].type === "tertiary",
            }}
            style={{
              left: `${getPixelOffsetFromUnix(tick)}px`,
            }}
          >
            <span class={styles["tick__label"]}>{ticks()[index()].label}</span>
          </div>
        )}
      </For>
    </div>
  );
};
