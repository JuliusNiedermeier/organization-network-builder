import { List } from "$src/ui-system";
import { Component, For } from "solid-js";
import { LocationCard } from "../LocationCard/LocationCard";
import { useCompanyDashboard } from "../../hooks/useCompanyDashboard";

type DashboardData = ReturnType<ReturnType<typeof useCompanyDashboard>>;
type Locations = NonNullable<DashboardData>["locations"];

export const CompanyLocations: Component<{ locations: Locations }> = (
  props
) => {
  return (
    <List>
      <For each={props.locations}>
        {(location) => (
          <a href={`/location/${location.ID}`}>
            <LocationCard location={location} />
          </a>
        )}
      </For>
    </List>
  );
};
