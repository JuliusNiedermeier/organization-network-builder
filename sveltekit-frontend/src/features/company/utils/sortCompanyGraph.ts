export interface Node {
	id: string;
	name: string;
}

export interface Edge {
	parent: string;
	child: string;
	stake: number;
}

export interface Graph {
	nodes: Node[];
	edges: Edge[];
}

export interface Position {
	x: number;
	y: number;
}

type PositionMap = { [key: string]: Position };

export interface SortedGraph extends Graph {
	positionMap: PositionMap;
}

export const sortY = (
	graph: Graph,
	currentNode?: Node,
	depth = 0,
	positionMap: PositionMap = {}
): SortedGraph => {
	if (!currentNode) {
		currentNode = graph.nodes.find(({ id }) => !graph.edges.find(({ child }) => id == child));
		if (!currentNode) return { ...graph, positionMap };
	}

	const position = positionMap[currentNode.id];
	if (position && position.y >= depth) return { ...graph, positionMap };
	if (position) position.y = depth;
	if (!position) positionMap[currentNode.id] = { x: 0, y: depth };

	const children = graph.edges
		.filter(({ parent }) => parent == currentNode?.id)
		.map(({ child }) => graph.nodes.find(({ id }) => id == child))
		.filter((child) => typeof child !== 'undefined');

	children.forEach((child) => child && sortY(graph, child, depth + 1, positionMap));

	return { ...graph, positionMap };
};

export const sortX = (graph: SortedGraph) => graph;
