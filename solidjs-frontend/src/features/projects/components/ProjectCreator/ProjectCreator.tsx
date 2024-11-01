import { Button, Input } from "$src/ui-system";
import { check, xMark } from "solid-heroicons/solid";
import { Component, createSignal } from "solid-js";
import styles from "./ProjectCreator.module.css";

export const ProjectCreator: Component<{
  onSubmit: (projectName: string) => Promise<any>;
  onCancel: () => void;
}> = (props) => {
  const [companyName, setCompanyName] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);

  const handleSubmit = () => {
    setIsLoading(true);
    props.onSubmit(companyName()).finally(() => setIsLoading(false));
  };

  return (
    <div class={styles.container}>
      <Input
        variant="default"
        placeholder="New project"
        onInput={setCompanyName}
        focus
      />
      <Button
        variant="contained"
        leadingIcon={check}
        onClick={handleSubmit}
        loading={isLoading()}
      />
      <Button variant="vague" leadingIcon={xMark} onClick={props.onCancel} />
    </div>
  );
};
