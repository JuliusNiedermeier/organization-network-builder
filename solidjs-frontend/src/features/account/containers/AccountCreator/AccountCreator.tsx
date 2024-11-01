import { useAuth } from "$src/features/authentication";
import { Button, Input } from "$src/ui-system";
import { check } from "solid-heroicons/solid";
import { Component, createSignal } from "solid-js";
import { useCreateAccount } from "../../hooks/useCreateAccount";
import styles from "./AccountCreator.module.css";

export const AccountCreator: Component = () => {
  const auth = useAuth();

  const createAccount = useCreateAccount();

  const [name, setName] = createSignal(auth.displayName || "");

  const [isLoading, setIsLoading] = createSignal(false);

  const handleAccountCreation = () => {
    setIsLoading(true);
    createAccount({
      variables: { ID: auth.uid, name: name(), email: "", photo: "" },
    }).finally(() => setIsLoading(false));
  };

  return (
    <div class={styles.container}>
      <h3 class="message">Is this your correct name?</h3>
      <Input
        variant="vague"
        placeholder="Your name..."
        value={name()}
        onInput={setName}
      />
      <div class={styles.controlls}>
        <Button
          label="Yes"
          variant="contained"
          leadingIcon={check}
          disabled={name().length < 1}
          loading={isLoading()}
          onClick={handleAccountCreation}
        />
      </div>
    </div>
  );
};
