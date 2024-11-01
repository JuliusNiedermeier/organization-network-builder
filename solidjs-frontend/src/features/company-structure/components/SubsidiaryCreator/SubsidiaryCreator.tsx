import { Button, Input } from "$src/ui-system";
import { check, xMark } from "solid-heroicons/solid";
import { Component, createSignal } from "solid-js";
import styles from "./SubsidiaryCreator.module.css";

export const SubsidiaryCreator: Component<{
  onSubmit: (subsidiaryName: string, stake: number) => Promise<any>;
  onCancel: () => void;
}> = (props) => {
  const [subsidiaryName, setSubsidiaryName] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);

  const handleSubmit = () => {
    setIsLoading(true);
    props.onSubmit(subsidiaryName(), 100).finally(() => setIsLoading(false));
  };

  return (
    <div class={styles.container}>
      <Input
        variant="vague"
        placeholder="New subsidiary"
        onInput={setSubsidiaryName}
        focus
        actions={[
          {
            label: "Create",
            icon: check,
            variant: "contained",
            onClick: handleSubmit,
          },
          {
            label: "Cancel",
            icon: xMark,
            variant: "outlined",
            onClick: props.onCancel,
          },
        ]}
      />
    </div>
  );
};
