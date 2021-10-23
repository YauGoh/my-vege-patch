import * as yup from 'yup';

interface Project {
	name: string;
}

interface CreateProjectCommand {
	name: string;
}

export const createProjectCommandSchema = yup.object().shape({
	name: yup
		.string()
		.required('name is required')
		.test({
			test: (value) => getProjects().then((projects) => projects.every((_) => _.name !== value)),
			message: 'Projects must have unique names'
		})
});

export const getProjects: () => Promise<Project[]> = async () => __getProjects();

export const createProject: (command: CreateProjectCommand) => Promise<void> = async (
	command: CreateProjectCommand
) => __addProjects({ name: command.name });

let projects: Project[] = [];

const __getProjects = (): Project[] => projects;
const __addProjects = (project: Project): void => {
	projects = [...projects, project];
};

export type { Project, CreateProjectCommand };
