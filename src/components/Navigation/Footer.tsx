import { ButtonLink } from '#components/Link';
import { DisplayText } from '#components/Text';
import { ButtonGroup } from '#components/Button';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Logo from '#public/images/logo/aenjojo-full-color.svg';

const SocialMediaList = [
	{
		name: 'Instagram',
		link: 'https://instagram.com/aenjojo_09',
		icon: <FaInstagram size={24} />
	},{
		name: 'Twitter',
		link: 'https://twitter.com/aen_jojo_',
		icon: <FaTwitter size={24} />
	},{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/aenjojo',
		icon: <FaLinkedin size={24} />
	},{
		name: 'GitHub',
		link: 'https://github.com/aenjojo',
		icon: <FaGithub size={24} />
	},
].map(({ name, link, icon }) => (
	<ButtonLink
		key={`${name}@${link}`}
		value={`AenJojo's ${name}`}
		href={link}
		variant='empty'
		icon={icon}
		iconOnly
		openInNewTab
	/>
));

export function Footer() {
	return (
		<footer className='bg-primary-50 border-t border-t-primary-100'>
			<section className='mx-auto flex gap-2 flex-col px-2 py-4 items-center'>
				<div>
					<Image
						alt=''
						src={Logo}
						className='w-28 stroke-primary-500'
					/>
					<DisplayText
						value='aenjojo © 2022'
						size='S'
						className='text-center'
					/>
				</div>
				<ButtonGroup direction='row'>
					{SocialMediaList}
				</ButtonGroup>
			</section>
		</footer>
	);
};