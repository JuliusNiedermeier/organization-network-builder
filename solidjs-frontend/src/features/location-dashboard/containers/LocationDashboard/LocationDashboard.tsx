import { useParams } from "@solidjs/router";
import { Component } from "solid-js";
import { DashboardHeader } from "../../components/DashboardHeader/DashboardHeader";
import { useLocationDashboard } from "../../hooks/useLocationDashboard";

export const LocationDashboard: Component = () => {
  const params = useParams();

  const locationDashboard = useLocationDashboard(params.location);

  return (
    <DashboardHeader
      locationName={locationDashboard()?.name || ""}
      companyName={locationDashboard()?.company.name || ""}
    />
  );
};
