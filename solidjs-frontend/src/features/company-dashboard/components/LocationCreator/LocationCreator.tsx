import { Button, Input } from "$src/ui-system";
import { check, xMark } from "solid-heroicons/solid";
import { Component, createSignal } from "solid-js";
import styles from "./LocationCreator.module.css";

export const LocationCreator: Component<{
  onSubmit: (locationName: string) => Promise<any>;
  onCancel: () => void;
}> = (props) => {
  const [locationName, setLocationName] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);

  const handleSubmit = () => {
    setIsLoading(true);
    props.onSubmit(locationName()).finally(() => setIsLoading(false));
  };

  return (
    <div class={styles.container}>
      <Input
        variant="vague"
        placeholder="New location"
        onInput={setLocationName}
        focus
        actions={[
          {
            label: "Add",
            icon: check,
            onClick: handleSubmit,
            variant: "contained",
          },
          {
            label: "Cancel",
            icon: xMark,
            onClick: props.onCancel,
            variant: "outlined",
          },
        ]}
      />
      {/* <Button
        variant="contained"
        leadingIcon={check}
        onClick={handleSubmit}
        loading={isLoading()}
      />
      <Button variant="vague" leadingIcon={xMark} onClick={props.onCancel} /> */}
    </div>
  );
};
