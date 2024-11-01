import { createMutation } from "@merged/solid-apollo";
import { CreateSubsidiaryDocument } from "$src/generated/graphql";

export const useCreateSubsidiary = () => {
  const [mutation] = createMutation(CreateSubsidiaryDocument, {
    refetchQueries: ["GetCompanyPreview"],
  });
  return mutation;
};
