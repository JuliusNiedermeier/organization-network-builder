import { GetProjectsDocument } from "$src/generated/graphql";
import { createQuery } from "@merged/solid-apollo";

export const useProjects = (userID: string) => {
  const data = createQuery(GetProjectsDocument, {
    variables: { userID },
  });

  const projects = () => {
    return (
      data()?.users[0].companiesConnection.edges.map((edge) => edge.node) || []
    );
  };

  return projects;
};
