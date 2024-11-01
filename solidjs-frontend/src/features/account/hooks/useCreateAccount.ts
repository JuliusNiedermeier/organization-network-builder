import { CreateMeDocument } from "$src/generated/graphql";
import { createMutation } from "@merged/solid-apollo";

export const useCreateAccount = () => {
  const [createAccount] = createMutation(CreateMeDocument);
  return createAccount;
};
