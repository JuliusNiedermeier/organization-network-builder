import { useParams, useSearchParams } from "@solidjs/router";
import { Component } from "solid-js";
import { CompanyDashboardHeader } from "../../components/CompanyDashboardHeader/CompanyDashboardHeader";
import { CompanyLocations } from "../../components/CompanyLocations/CompanyLocations";
import { CompanyLocationsHeader } from "../../components/CompanyLocationsHeader/CompanyLocationsHeader";
import { useCompanyDashboard } from "../../hooks/useCompanyDashboard";
import { useCreateLocation } from "../../hooks/useCreateLocation";
import styles from "./CompanyDashboard.module.css";

export const CompanyDashboard: Component = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const companyID = () => searchParams.selected || params.company;

  const data = useCompanyDashboard(companyID);

  const createLocation = useCreateLocation();

  const handleLocationCreation = (name: string) => {
    return createLocation({ variables: { companyID: companyID(), name } });
  };

  return (
    <div class={styles.container}>
      <CompanyDashboardHeader name={data()?.name || ""} onDelete={() => {}} />
      <CompanyLocationsHeader onCreate={handleLocationCreation} />
      <CompanyLocations locations={data()?.locations || []} />
    </div>
  );
};
