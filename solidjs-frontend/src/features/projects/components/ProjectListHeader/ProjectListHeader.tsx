import { Button } from "$src/ui-system";
import { plus } from "solid-heroicons/solid";
import { Component, createSignal, Show } from "solid-js";
import { ProjectCreator } from "../ProjectCreator/ProjectCreator";
import styles from "./ProjectListHeader.module.css";

export const ProjectListHeader: Component<{
  onCreate: (projectName: string) => Promise<any>;
}> = (props) => {
  const [showProjectCreator, setShowProjectCreator] = createSignal(false);

  const handleProjectCreationRequest = () => setShowProjectCreator(true);

  const handleProjectCreationCancellation = () => setShowProjectCreator(false);

  const handleProjectCreation = (projectName: string) => {
    return props
      .onCreate(projectName)
      .finally(() => setShowProjectCreator(false));
  };

  return (
    <header class={styles.container}>
      <h3>Footprints</h3>
      <Show
        when={showProjectCreator()}
        fallback={
          <Button
            variant="contained"
            leadingIcon={plus}
            label="Create"
            onClick={handleProjectCreationRequest}
          />
        }
      >
        <ProjectCreator
          onSubmit={handleProjectCreation}
          onCancel={handleProjectCreationCancellation}
        />
      </Show>
    </header>
  );
};
