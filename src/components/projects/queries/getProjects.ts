import type { Project } from '../models/project';
import { __getProjects } from '../models/project.mock';

export const getProjects: () => Promise<Project[]> = async () => __getProjects();
