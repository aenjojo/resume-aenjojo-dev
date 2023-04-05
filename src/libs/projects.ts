import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

export interface metaDataType {
	title: string,
	description: string,
	date: string,
	image: string,
	techStack: string[],
	codeUrl: string,
	demoUrl: string,
}

export interface importType {
	default: any,
	meta: metaDataType,
}

export async function getProjects(directory: string) {
	const projectsDirectory = resolve(process.cwd(), `src/pages/projects/${directory}`);
	const filenames = await readdir(projectsDirectory);

	const projectsDataPromises = filenames.map(async filename => {
		return getSingleProject(directory, filename);
	});

	const projectsData = await Promise.all(projectsDataPromises);

	return projectsData;
}

export async function getSingleProject(directory: string, filename: string) {
	const mdxFile: importType = await import(`./../pages/projects/${directory}/${filename}`);

	const projectId = filename.replace(/.mdx$/, '');
	const projectMeta = mdxFile.meta;

	return {
		id: projectId,
		meta: projectMeta,
	};
}