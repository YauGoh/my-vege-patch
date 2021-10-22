import type { IQuery } from 'src/components/common';
import type { Project } from '../models/project';
import { __getProjects } from '../models/projectsMock';

export const getProjects: IQuery<void, Project[]> = async () => __getProjects();
