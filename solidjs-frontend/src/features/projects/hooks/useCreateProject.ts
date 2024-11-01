import { CreateProjectDocument } from "$src/generated/graphql";
import { createMutation } from "@merged/solid-apollo";

export const useCreateProject = () => {
  const [createProject, data] = createMutation(CreateProjectDocument, {
    refetchQueries: ["GetProjects"],
  });

  return createProject;
};
