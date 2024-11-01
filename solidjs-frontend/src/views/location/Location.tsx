import { AccountProvider } from "$src/features/account/AccountContext";
import { AuthProvider } from "$src/features/authentication";
import { ActivityTable } from "$src/features/location-activities/components/ActivityTable/ActivityTable";
import { ActivityTimeline } from "$src/features/location-activities/components/ActivityTimeline/ActivityTimeline";
import { Timeline } from "$src/features/location-activities/components/Timeline/Timeline";
import { LocationDashboard } from "$src/features/location-dashboard";
import { AppLayout, Avatar } from "$src/ui-system";
import { NavigationBar } from "$src/ui-system/NavigationBar/NavigationBar";
import { Component } from "solid-js";
import styles from "./Location.module.css";
import moment from "moment";
import { LocationActivitiesManager } from "$src/features/location-activities/containers/LocationActivitiesManager/LocationActivitiesManager";

const Location: Component = () => {
  return (
    <AuthProvider>
      <AccountProvider>
        <AppLayout
          navigation={
            <NavigationBar
              right={<Avatar src="/src/assets/avatar.svg" name="Avatar" />}
            />
          }
          sidebar={
            <div class={styles.dashboard}>
              <LocationDashboard />
            </div>
          }
          main={
            <div class={styles.activities}>
              {/* <ActivityTable /> */}
              {/* <ActivityTimeline /> */}
              <LocationActivitiesManager />
            </div>
          }
        />
      </AccountProvider>
    </AuthProvider>
  );
};

export default Location;
