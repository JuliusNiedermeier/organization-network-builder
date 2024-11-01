import { getRelativePosition } from ".";
import { SortedGraph, NodeElementMap } from "../types";

export const getPaths = <TNodeData, TEdgeData>(
  sortedGraph: SortedGraph<TNodeData, TEdgeData>,
  elements: NodeElementMap,
  mapElement: HTMLElement
) => {
  return sortedGraph.edges.map((edge) => {
    const parent = elements[edge.parent];
    const child = elements[edge.child];

    if (!parent || !child) return;

    const parentPos = getRelativePosition(parent, mapElement);
    const childPos = getRelativePosition(child, mapElement);

    const start = {
      x: parentPos.left + parentPos.width / 2,
      y: parentPos.bottom,
    };
    const end = { x: childPos.left + childPos.width / 2, y: childPos.top };
    const h1 = { x: start.x, y: start.y + (end.y - start.y) / 2 };
    const h2 = { x: end.x, y: h1.y };

    return {
      connected: [edge.parent, edge.child],
      points: `M ${start.x} ${start.y} C ${h1.x} ${h1.y} ${h2.x} ${h2.y} ${end.x} ${end.y}`,
    };
  });
};
