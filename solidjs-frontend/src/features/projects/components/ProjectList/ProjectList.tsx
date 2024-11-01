import { Button } from "$src/ui-system";
import { Component, For } from "solid-js";
import styles from "./ProjectList.module.css";
import { plus } from "solid-heroicons/solid";
import { Company } from "$src/generated/graphql";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const ProjectList: Component<{
  projects: { ID: string; name: string; description?: string | null }[];
}> = (props) => {
  return (
    <div class={styles.projects}>
      <For each={props.projects}>
        {(project) => (
          <ProjectCard
            name={project.name}
            ID={project.ID}
            description={project.description || ""}
          />
        )}
      </For>
    </div>
  );
};
