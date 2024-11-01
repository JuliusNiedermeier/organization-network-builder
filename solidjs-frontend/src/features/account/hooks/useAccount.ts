import { GetMeDocument } from "$src/generated/graphql";
import { createQuery } from "@merged/solid-apollo";
import { Accessor } from "solid-js";

export const useAccount = (userID: Accessor<string>) => {
  const options = () => ({ variables: { userID: userID() } });
  const response = createQuery(GetMeDocument, options);
  return () => {
    if (!response()?.users.length) return;
    return response()?.users[0];
  };
};
