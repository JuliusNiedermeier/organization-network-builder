import { AppLayout, Avatar } from "$src/ui-system";
import { Component } from "solid-js";
import { AccountDashboard } from "$src/features/account";
import { AccountProvider } from "$src/features/account/AccountContext";
import { AuthProvider } from "$src/features/authentication/AuthContext";
import { NavigationBar } from "$src/ui-system/NavigationBar/NavigationBar";
import { ProjectsManager } from "$src/features/projects";
import styles from "./Account.module.css";

const Account: Component = () => {
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
            <div class={styles.account}>
              <AccountDashboard />
            </div>
          }
          main={
            <div class={styles.projects}>
              <ProjectsManager />
            </div>
          }
        />
      </AccountProvider>
    </AuthProvider>
  );
};

export default Account;
