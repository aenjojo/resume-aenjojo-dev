import {
	SiNextdotjs,
	SiTailwindcss,
	SiSvelte,
	SiVite,
} from 'react-icons/si';

export type TechIconType = {
	name: string,
	icon: JSX.Element,
}[];

export const TechIcon: TechIconType = [{
	name: 'Next.js',
	icon: <SiNextdotjs size='24' className='fill-[#000000]' />,
},{
	name: 'Tailwind',
	icon: <SiTailwindcss size='24' className='fill-[#06b6d4]' />,
},{
	name: 'Svelte',
	icon: <SiSvelte size='24' className='fill-[#ff3e00]' />,
},{
	name: 'Vite',
	icon: <SiVite size='24' className='fill-[#646cff]' />
}];