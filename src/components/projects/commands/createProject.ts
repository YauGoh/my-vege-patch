import * as yup from 'yup';

import type { ICommand } from 'src/components/common';
import { __addProjects } from '../models/projectsMock';
import { getProjects } from '../queries/getProjects';

export interface CreateProjectCommand {
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

export const createProject: ICommand<CreateProjectCommand> = async (
	command: CreateProjectCommand
) => __addProjects({ name: command.name });
