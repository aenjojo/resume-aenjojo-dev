import {
	SiNextdotjs,
	SiTailwindcss,
	SiSvelte,
	SiVite,
	SiDiscord,
	SiTypescript,
	SiJavascript,
} from 'react-icons/si';

export type techIconsType = {
	id: string,
	name: string,
	icon: JSX.Element,
};

export const techIcons: techIconsType[] = [{
	id: 'nextjs',
	name: 'Next JS',
	icon: <SiNextdotjs size='24' title='Next.js' fill='#000000' />,
}, {
	id: 'tailwind',
	name: 'Tailwind CSS',
	icon: <SiTailwindcss size='24' title='Tailwind css' fill='#06b6d4' />,
}, {
	id: 'svelte',
	name: 'Svelte',
	icon: <SiSvelte size='24' title='Svelte' fill='#ff3e00' />,
}, {
	id: 'sveltekit',
	name: 'Svelte Kit',
	icon: <SiSvelte size='24' title='Svelte kit' fill='#ff3e00' />,
}, {
	id: 'vite',
	name: 'Vite',
	icon: <SiVite size='24' title='Vite.js' fill='#646cff' />,
}, {
	id: 'discord.js',
	name: 'Discord JS',
	icon: <SiDiscord size='24' title='Discord.js' fill='#5865f2' />,
}, {
	id: 'js',
	name: 'Javascript',
	icon: <SiJavascript size='24' title='Javascript' fill='#f7df1e' />,
}, {
	id: 'ts',
	name: 'Typescript',
	icon: <SiTypescript size='24' title='Typescript' fill='#3178c6' />,
}];