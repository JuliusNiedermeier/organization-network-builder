import { createQuery } from "@merged/solid-apollo";
import { createEffect } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";
import { CompanyEdge, CompanyNode, Graph } from "../types";
import { GetCompanyPreviewDocument } from "$src/generated/graphql";

const getNext = (
  ID: string,
  setGraph: SetStoreFunction<Graph<CompanyNode, CompanyEdge>>,
  visited: string[] = []
) => {
  if (visited.includes(ID)) return;
  visited.push(ID);
  const response = createQuery(GetCompanyPreviewDocument, {
    variables: { ID },
  });

  setGraph("nodes", (nodes) => [...nodes, { ID, data: { loading: true } }]);

  createEffect(() =>
    setGraph("nodes", (node) => node.ID === ID, "data", {
      loading: response.loading,
      company: { name: response()?.companies[0].name || "" },
    })
  );

  createEffect(() => {
    if (!response()?.companies[0].subsidiaries.length) return;
    const newEdges = response()?.companies[0].subsidiaries.map(
      (subsidiary) => ({
        parent: ID,
        child: subsidiary.ID,
        data: { stake: 100 },
      })
    );

    setGraph("edges", (edges) => [
      ...edges.filter((edge) => edge.parent !== ID),
      ...(newEdges || []),
    ]);
  });

  createEffect(() =>
    response()?.companies[0].subsidiaries.forEach(({ ID: subID }) =>
      getNext(subID, setGraph, visited)
    )
  );
};

export const useCompanyNetwork = (ID: string) => {
  const [graph, setGraph] = createStore<Graph<CompanyNode, CompanyEdge>>({
    nodes: [],
    edges: [],
  });
  getNext(ID, setGraph);
  return graph;
};
