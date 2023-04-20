import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiMarkdown,
	SiMdx,
	SiReact,
	SiNextdotjs,
	SiSvelte,
	SiTailwindcss,
	SiDiscord,
	SiVite,
	SiRollupdotjs,
	SiPostcss,
	SiStorybook,
	SiJest,
	SiVercel,
	SiGithubpages,
} from 'react-icons/si';

export type techIconsType = {
	id: string,
	name: string,
	icon: JSX.Element,
};

export const techIcons: techIconsType[] = [
	/**
	 * languages
	 */
	{
		id: 'html',
		name: 'HTML',
		icon: <SiHtml5 size='24' title='HTML' fill='#e34f26' />,
	}, {
		id: 'css',
		name: 'CSS',
		icon: <SiCss3 size='24' title='CSS' fill='#1572b6' />,
	}, {
		id: 'js',
		name: 'Javascript',
		icon: <SiJavascript size='24' title='Javascript' fill='#f7df1e' />,
	}, {
		id: 'ts',
		name: 'Typescript',
		icon: <SiTypescript size='24' title='Typescript' fill='#3178c6' />,
	}, {
		id: 'md',
		name: 'Markdown',
		icon: <SiMarkdown size='24' title='Markdown' fill='#000000' />,
	}, {
		id: 'mdx',
		name: 'Markdown X',
		icon: <SiMdx size='24' title='MDX' fill='#1B1F24' />,
	},
	/**
	 * frameworks
	 */
	{
		id: 'react',
		name: 'React',
		icon: <SiReact size='24' title='React' fill='#61DAFB'/>,
	}, {
		id: 'svelte',
		name: 'Svelte',
		icon: <SiSvelte size='24' title='Svelte' fill='#ff3e00' />,
	}, {
		id: 'nextjs',
		name: 'Next JS',
		icon: <SiNextdotjs size='24' title='Next.js' fill='#000000' />,
	}, {
		id: 'sveltekit',
		name: 'Svelte Kit',
		icon: <SiSvelte size='24' title='Svelte kit' fill='#ff3e00' />,
	}, {
		id: 'tailwind',
		name: 'Tailwind CSS',
		icon: <SiTailwindcss size='24' title='Tailwind CSS' fill='#06b6d4' />,
	}, {
		id: 'discordjs',
		name: 'Discord JS',
		icon: <SiDiscord size='24' title='Discord.js' fill='#5865f2' />,
	},
	/**
	 * environments
	 */
	{
		id: 'vite',
		name: 'Vite',
		icon: <SiVite size='24' title='Vite.js' fill='#646cff' />,
	}, {
		id: 'rollup',
		name: 'Rollup',
		icon: <SiRollupdotjs size='24' title='Rollup.js' fill='#EC4A3F' />,
	}, {
		id: 'postcss',
		name: 'PostCSS',
		icon: <SiPostcss size='24' title='Postcss' fill='#DD3A0A' />,
	}, {
		id: 'storybook',
		name: 'Storybook',
		icon: <SiStorybook size='24' title='Storybook' fill='#FF4785' />,
	}, {
		id: 'jest',
		name: 'Jest',
		icon: <SiJest size='24' title='Jest' fill='#C21325' />,
	},
	/**
	 * deployments
	 */
	{
		id: 'vercel',
		name: 'Vercel',
		icon: <SiVercel size='24' title='Vercel' fill='#000000'/>,
	},  {
		id: 'ghpages',
		name: 'Github Pages',
		icon: <SiGithubpages size='24' title='Github Pages' fill='#222222'/>,
	},
];