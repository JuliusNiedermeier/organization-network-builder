import { SortedGraph, Node } from "../types";

export const getRows = <TNodeData, TEdgeData>(
  sortedGraph: SortedGraph<TNodeData, TEdgeData>
) => {
  const rows: Array<Array<Node<TNodeData>>> = [];

  sortedGraph.nodes.forEach((node, index) => {
    const y = sortedGraph.positionMap[node.ID].y;
    if (!rows[y]) rows[y] = [];
    rows[y].push(node);
  });

  return rows;
};
