import { useParams, useSearchParams } from "@solidjs/router";
import { Component } from "solid-js";
import { CompanyMap } from "../../components/CompanyMap/CompanyMap";
import { CompanyMapToolbar } from "../../components/CompanyMapToolbar/CompanyMapToolbar";
import { useCompanyNetwork } from "../../hooks/useCompanyNetwork";
import { useCreateSubsidiary } from "../../hooks/useCreateSubsidiary";
import styles from "./CompanyStructureManager.module.css";

export const CompanyStructureManager: Component = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const selectedCompanyID = () => searchParams.selected || params.company;

  const graph = useCompanyNetwork(params.company);

  const createSubsidiary = useCreateSubsidiary();

  const handleCompanySelectionRequest = (companyID: string) => {
    setSearchParams(
      { ...searchParams, selected: companyID },
      { replace: true }
    );
  };

  const handleSubsidiaryCreation = (name: string, stake: number) => {
    return createSubsidiary({
      variables: { ID: selectedCompanyID(), name, stake },
    });
  };

  return (
    <div class={styles.container}>
      <div class={styles.toolbar}>
        <CompanyMapToolbar
          name={selectedCompanyID()}
          onAddSubsidiary={handleSubsidiaryCreation}
        />
      </div>
      <div class={styles.map}>
        <CompanyMap
          graph={graph}
          selected={searchParams.selected}
          onSelect={handleCompanySelectionRequest}
        />
      </div>
    </div>
  );
};
