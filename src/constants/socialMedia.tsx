import { SiInstagram, SiTwitter, SiLinkedin, SiGithub } from 'react-icons/si';

export type socialMediaType = {
	name: string,
	link: string,
	icon: JSX.Element,
};

export const socialMedia: socialMediaType[] = [
	{
		name: 'Instagram',
		link: 'https://instagram.com/aenjojo',
		icon: <SiInstagram size={24} title='Instagram of Aen Jojo' />,
	},{
		name: 'Twitter',
		link: 'https://twitter.com/aenjojo_',
		icon: <SiTwitter size={24} title='Twitter of Aen Jojo' />,
	},{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/aenjojo',
		icon: <SiLinkedin size={24} title='LinkedIn of Aen Jojo' />,
	},{
		name: 'GitHub',
		link: 'https://github.com/aenjojo',
		icon: <SiGithub size={24} title='GitHub of Aen Jojo' />,
	},
];