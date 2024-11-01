import { Button } from "$src/ui-system";
import { plus } from "solid-heroicons/solid";
import { Component, createSignal, Show } from "solid-js";
import { LocationCreator } from "../LocationCreator/LocationCreator";
import styles from "./CompanyLocationsHeader.module.css";

export const CompanyLocationsHeader: Component<{
  onCreate: (locationName: string) => Promise<any>;
}> = (props) => {
  const [showLocationCreator, setShowLocationCreator] = createSignal(false);

  const handleLocationCreationRequest = () => setShowLocationCreator(true);

  const handleLocationCreationCancellation = () =>
    setShowLocationCreator(false);

  const handleLocationCreation = (projectName: string) => {
    return props
      .onCreate(projectName)
      .finally(() => setShowLocationCreator(false));
  };

  return (
    <header class={styles.container}>
      <Show
        when={showLocationCreator()}
        fallback={
          <>
            <h3>Locations</h3>
            <Button
              variant="contained"
              label="Add location"
              trailingIcon={plus}
              onClick={handleLocationCreationRequest}
            />
          </>
        }
      >
        <LocationCreator
          onCancel={handleLocationCreationCancellation}
          onSubmit={handleLocationCreation}
        />
      </Show>
    </header>
  );
};
