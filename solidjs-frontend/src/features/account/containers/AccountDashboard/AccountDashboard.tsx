import { Component } from "solid-js";
import { AccountHeader } from "../../components/AccountHeader/AccountHeader";
import { auth } from "$src/lib/firebase";
import { useAccount } from "../../index";

export const AccountDashboard: Component = () => {
  const account = useAccount();

  const handleSignOutRequest = () => auth.signOut();

  return (
    <AccountHeader
      name={account.name}
      email={account.email}
      photo={account.photo}
      onSignOut={handleSignOutRequest}
    />
  );
};
