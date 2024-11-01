import { AccountProvider } from "$src/features/account/AccountContext";
import { AuthProvider } from "$src/features/authentication";
import { CompanyDashboard } from "$src/features/company-dashboard";
import { CompanyStructureManager } from "$src/features/company-structure";
import { AppLayout, Avatar } from "$src/ui-system";
import { NavigationBar } from "$src/ui-system/NavigationBar/NavigationBar";
import { Component } from "solid-js";
import styles from "./Company.module.css";

const Company: Component = () => {
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
            <div class={styles["company-dashboard"]}>
              <CompanyDashboard />
            </div>
          }
          main={
            <div class={styles["company-map"]}>
              <CompanyStructureManager />
            </div>
          }
        />
      </AccountProvider>
    </AuthProvider>
  );
};

export default Company;
