import { Component, createSignal, Show } from "solid-js";
import { Button } from "$src/ui-system";
import { plus } from "solid-heroicons/solid";
import { SubsidiaryCreator } from "../SubsidiaryCreator/SubsidiaryCreator";
import styles from "./CompanyMapToolbar.module.css";

export const CompanyMapToolbar: Component<{
  name: string;
  onAddSubsidiary: (name: string, stake: number) => Promise<any>;
}> = (props) => {
  const [showSubsidiaryCreator, setShowSubsidiaryCreator] = createSignal(false);

  const handleSubsidiaryCreationRequest = () => {
    setShowSubsidiaryCreator(true);
  };

  const handleSubsidiaryCreationCancellation = () => {
    setShowSubsidiaryCreator(false);
  };

  return (
    <div class={styles.container}>
      <Show
        when={showSubsidiaryCreator()}
        fallback={
          <Button
            leadingIcon={plus}
            label="Subsidiary"
            variant="text"
            onClick={handleSubsidiaryCreationRequest}
          />
        }
      >
        <SubsidiaryCreator
          onCancel={handleSubsidiaryCreationCancellation}
          onSubmit={props.onAddSubsidiary}
        />
      </Show>
    </div>
  );
};
