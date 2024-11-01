import { ParentComponent, Show, createContext, useContext } from "solid-js";
import { LoadingScreen } from "$src/ui-system";
import { useAuth } from "$src/features/authentication";
import { useAccount as useAccountHook } from "./hooks/useAccount";
import { AccountCreator } from "./";

const NO_ACCOUNT_ERROR_MESSAGE =
  "account is undefined. Did you wrap your Component with <AccountProvider /> ?";

const AccountContext =
  createContext<ReturnType<ReturnType<typeof useAccountHook>>>();

export const useAccount = () => {
  const account = useContext(AccountContext);
  if (!account) throw new Error(NO_ACCOUNT_ERROR_MESSAGE);
  return account;
};

export const AccountProvider: ParentComponent = (props) => {
  const auth = useAuth();

  const account = useAccountHook(() => auth?.uid || "");

  return (
    <Show
      when={typeof account() !== "undefined"}
      fallback={<LoadingScreen status="Setting up your account..." />}
    >
      <Show when={account()} fallback={<AccountCreator />}>
        <AccountContext.Provider value={account()}>
          {props.children}
        </AccountContext.Provider>
      </Show>
    </Show>
  );
};
