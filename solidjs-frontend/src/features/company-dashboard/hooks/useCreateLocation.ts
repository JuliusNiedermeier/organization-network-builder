import { CreateLocationDocument } from "$src/generated/graphql";
import { createMutation } from "@merged/solid-apollo";

export const useCreateLocation = () => {
  const [createLocation] = createMutation(CreateLocationDocument, {
    refetchQueries: ["GetCompanyDashboard"],
  });
  return createLocation;
};
