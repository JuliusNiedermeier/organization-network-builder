import { GetLocationDashboardDocument } from "$src/generated/graphql";
import { createQuery } from "@merged/solid-apollo";

export const useLocationDashboard = (locationID: string) => {
  const data = createQuery(GetLocationDashboardDocument, {
    variables: { locationID },
  });
  return () => data()?.locations[0];
};
