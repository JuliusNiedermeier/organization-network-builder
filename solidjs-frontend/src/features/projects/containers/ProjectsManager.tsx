import { Component } from "solid-js";
import { useAccount } from "$src/features/account";
import { useCreateProject } from "../hooks/useCreateProject";
import { useProjects } from "../hooks/useProjects";
import { ProjectList } from "../components/ProjectList/ProjectList";
import { ProjectListHeader } from "../components/ProjectListHeader/ProjectListHeader";

export const ProjectsManager: Component = () => {
  const account = useAccount();

  const projects = useProjects(account.ID);

  const createProject = useCreateProject();

  const handleProjectCreation = (projectName: string) => {
    return createProject({
      variables: { userID: account.ID, companyName: projectName },
    });
  };

  return (
    <>
      <ProjectListHeader onCreate={handleProjectCreation} />
      <ProjectList projects={projects()} />
    </>
  );
};
