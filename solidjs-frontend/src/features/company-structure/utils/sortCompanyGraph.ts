import { Graph, Node, SortedGraph, PositionMap } from "../types";

export const sortY = <TNodeData, TEdgeData>(
  graph: Graph<TNodeData, TEdgeData>,
  currentNode?: Node<TNodeData>,
  depth = 0,
  positionMap: PositionMap = {}
): SortedGraph<TNodeData, TEdgeData> => {
  if (!currentNode) {
    currentNode = graph.nodes.find(
      ({ ID }) => !graph.edges.find(({ child }) => ID == child)
    );
    if (!currentNode) return { ...graph, positionMap };
  }

  const position = positionMap[currentNode.ID];
  if (position && position.y >= depth) return { ...graph, positionMap };
  if (position) position.y = depth;
  if (!position) positionMap[currentNode.ID] = { x: 0, y: depth };

  const children = graph.edges
    .filter(({ parent }) => parent == currentNode?.ID)
    .map(({ child }) => graph.nodes.find(({ ID }) => ID == child))
    .filter((child) => typeof child !== "undefined");

  children.forEach(
    (child) => child && sortY(graph, child, depth + 1, positionMap)
  );

  return { ...graph, positionMap };
};

export const sortX = <TNodeData, TEdgeData>(
  graph: SortedGraph<TNodeData, TEdgeData>
) => graph;
