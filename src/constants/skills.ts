export type skillsType = {
	name: string,
	data: string[],
};

export const skills: skillsType[] = [{
	name: 'Languages',
	data: [
		'HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL', 'MDX', 'JSON',
	],
}, {
	name: 'Frameworks',
	data: [
		'Next JS', 'React', 'Svelte', 'Tailwind CSS', 'Express JS',
	],
}, {
	name: 'Environments',
	data: [
		'Git', 'Yarn', 'NPM', 'Node JS',
	],
}, {
	name: 'Deployments',
	data: [
		'Vercel', 'GitHub Pages',
	],
}, {
	name: 'Tools',
	data: [
		'GitHub', 'VS Code', 'Postman',
	],
}, {
	name: 'Database Management Systems',
	data: [
		'MySQL',
	],
}, {
	name: 'Miscellaneous',
	data: [
		'UI/UX Design', 'SEO',
	],
}];