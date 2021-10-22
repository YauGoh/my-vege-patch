import type { Project } from './project';

let projects: Project[] = [];

export const __getProjects = (): Project[] => projects;
export const __addProjects = (project: Project): void => {
	projects = [...projects, project];
};
