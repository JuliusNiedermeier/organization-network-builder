import moment, { Moment } from "moment";
import {
  Component,
  createSignal,
  For,
  Index,
  onCleanup,
  onMount,
} from "solid-js";
import styles from "./Timeline.module.css";

export const Timeline: Component<{
  begin: Date;
  end: Date;
  minGap: number;
  onUpdate: (begin: Date, end: Date, secPixFactor: number) => any;
}> = (props) => {
  const begin = () => moment(props.begin);
  const end = () => moment(props.end);
  const duration = () => moment.duration(end().diff(begin()));

  const getTickOffset = (tick: Moment) => {
    if (!containerWidth()) return;
    const millisPxRatio = containerWidth()! / duration().asSeconds();
    return (tick.unix() - begin().unix()) * millisPxRatio;
  };

  const ticks = () => {
    const ticks: number[] = [];
    for (
      let tickMoment = moment(begin()).startOf("day");
      tickMoment.isBefore(end());
      tickMoment.add(1, "day")
    ) {
      ticks.push(getTickOffset(tickMoment.clone()) || 0);
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
    if (!containerWidth()) return;
    const origin = (1 / containerWidth()!) * event.offsetX;
    const delta = moment.duration(1, "day").asSeconds();
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
                [styles["tick--sm"]]: false,
                [styles["tick--md"]]: true,
                [styles["tick--lg"]]: false,
              }}
              style={{
                left: `${tick}px`,
              }}
            ></div>
          )}
        </For>
      </div>
    </>
  );
};
