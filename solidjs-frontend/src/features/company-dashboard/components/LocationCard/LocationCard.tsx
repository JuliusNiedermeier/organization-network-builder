import { ListItem } from "$src/ui-system";
import { Component } from "solid-js";
import styles from "./LocationCard.module.css";
import { useCompanyDashboard } from "../../hooks/useCompanyDashboard";
import { Card } from "$src/ui-system/Card/Card";

type DashboardData = ReturnType<ReturnType<typeof useCompanyDashboard>>;
type Location = NonNullable<DashboardData>["locations"][0];

export const LocationCard: Component<{ location: Location }> = (props) => {
  return (
    <Card variant="vague" spacing="dense" elevated clickable>
      <div class={styles.container}>
        <div class={styles.identity}>
          <h4>{props.location.name}</h4>
          <small>{props.location.activitiesAggregate?.count} activities</small>
        </div>
        <div class={styles.metrics}>
          <h4>27 t</h4>
          <small>CO²</small>
        </div>
      </div>
    </Card>
  );
};
