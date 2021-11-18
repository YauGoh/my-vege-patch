import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { createProject } from "../commands/createProject";
import type { CreateProjectCommand } from "../commands/createProject";
import type { Project } from "../models/project";
import { getProjects } from "../queries/getProjects";

class ProjectStore {
    constructor(
        public projects: Writable<Project[]> = writable([])) {
        
    }

    async initialise(): Promise<void> {
        this.refreshStore();
    }

    async addProject(command: CreateProjectCommand) {
        await createProject(command);

        await this.refreshStore();
    }

    private async refreshStore(): Promise<void> {
        const projects = await getProjects();

        this.projects.update(_ => projects);
    }
}

export const projectStore = new ProjectStore();