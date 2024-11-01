import styles from "./CompanyMap.module.css";
import { CompanyCard } from "../CompanyCard/CompanyCard";
import { CompanyCardSkeleton } from "../CompanyCardSkeleton/CompanyCardSkeleton";
import { makeDraggable } from "../../utils";
import { sortX, sortY, getRows, getPaths } from "../../utils";
import { NodeElementMap, Graph, CompanyNode, CompanyEdge } from "../../types";
import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js";

export const CompanyMap: Component<{
  graph: Graph<CompanyNode, CompanyEdge>;
  selected: string;
  onSelect: (ID: string) => void;
}> = (props) => {
  const nodeElements: NodeElementMap = {};
  let mapElement: HTMLDivElement = document.createElement("div");
  let nodesElement: HTMLDivElement = document.createElement("div");

  const sortedGraph = createMemo(() => sortX(sortY(props.graph)));
  const rows = createMemo(() => getRows(sortedGraph()));
  const [paths, setPaths] = createSignal<ReturnType<typeof getPaths>>([]);

  createEffect(() => {
    setPaths(getPaths(sortedGraph(), nodeElements, nodesElement));
    scrollTo(props.selected);
  });

  const selectedNode = createMemo(() => {
    const node = props.graph.nodes.find((node) => node.ID === props.selected);
    return node || null;
  });

  const adjecentNodes = createMemo(() => {
    const children = props.graph.edges
      .filter((edge) => edge.parent === selectedNode()?.ID)
      .map((edge) => edge.child);

    const parents = props.graph.edges
      .filter((edge) => edge.child === selectedNode()?.ID)
      .map((edge) => edge.parent);

    return [...parents, ...children];
  });

  const scrollTo = (ID: string) => {
    nodeElements[ID]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  onMount(() => {
    const detach = makeDraggable(mapElement);
    onCleanup(detach);

    const resizeObserver = new ResizeObserver(() => {
      setPaths(getPaths(sortedGraph(), nodeElements, nodesElement));
    });
    resizeObserver.observe(mapElement);
  });

  return (
    <div class={styles.map} ref={mapElement}>
      <div class={styles.nodes} ref={nodesElement}>
        <For each={rows()}>
          {(nodes) => (
            <div class={styles.nodes__row}>
              <For each={nodes}>
                {(node) => (
                  <div
                    class={styles.nodes__row__node}
                    data-company-map-node-id={node.ID}
                    ref={nodeElements[node.ID]}
                    onClick={() => {
                      scrollTo(node.ID);
                      props.onSelect(node.ID);
                    }}
                  >
                    <Show
                      when={!node.data.loading}
                      fallback={<CompanyCardSkeleton />}
                    >
                      <CompanyCard
                        name={node.data.company?.name || ""}
                        locationCount={0}
                        employeeCount={0}
                        type={
                          props.selected === node.ID
                            ? "selected"
                            : adjecentNodes().includes(node.ID)
                            ? "adjacent"
                            : "default"
                        }
                      />
                    </Show>
                  </div>
                )}
              </For>
            </div>
          )}
        </For>
        <svg class={styles.paths}>
          <For each={paths()}>
            {(path) => (
              <path
                class={styles.paths__path}
                classList={{
                  [styles["selected"]]: path?.connected.includes(
                    props.selected
                  ),
                }}
                d={path?.points}
              />
            )}
          </For>
        </svg>
      </div>
    </div>
  );
};
