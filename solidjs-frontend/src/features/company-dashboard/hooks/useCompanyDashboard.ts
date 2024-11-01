import { GetCompanyDashboardDocument } from "$src/generated/graphql";
import { createQuery } from "@merged/solid-apollo";
import { Accessor } from "solid-js";

export const useCompanyDashboard = (companyID: Accessor<string>) => {
  const options = () => ({ variables: { companyID: companyID() } });
  const response = createQuery(GetCompanyDashboardDocument, options);
  return () => response()?.companies[0];
};
