// Graph
export type InputNode<TNodeData, TEdgeData> = {
  ID: string;
  data: TNodeData;
  children: { ID: string; edge: TEdgeData }[];
};
export type Node<T> = {
  ID: string;
  data: T;
};
export type Edge<T> = {
  parent: string;
  child: string;
  data: T;
};
export type Graph<TNodeData, TEdgeData> = {
  nodes: Node<TNodeData>[];
  edges: Edge<TEdgeData>[];
};

//Sorted Graph
export interface Position {
  x: number;
  y: number;
}

export type PositionMap = { [key: string]: Position };

export interface SortedGraph<TNodeData, TEdgeData>
  extends Graph<TNodeData, TEdgeData> {
  positionMap: PositionMap;
}

// Company Graph
export type CompanyNode = { loading: boolean; company?: { name: string } };
export type CompanyEdge = { stake: number };

// Paths
export type NodeElementMap = { [key: string]: HTMLDivElement };
