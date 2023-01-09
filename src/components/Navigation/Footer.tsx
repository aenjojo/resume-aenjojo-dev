import { ButtonLink } from '#components/Link';
import { DisplayText } from '#components/Text';
import { ButtonGroup } from '#components/Button';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export function Footer() {
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
			link: 'https://www.linkedin.com/aenjojo',
			icon: <FaLinkedin size={24} />
		},{
			name: 'GitHub',
			link: 'https://github.com/aenjojo',
			icon: <FaGithub size={24} />
		},
	].map(({ name, link, icon }) => (
		<ButtonLink
			key={`${name}@${link}`}
			value={name}
			href={link}
			variant='empty'
			icon={icon}
			iconOnly
			openInNewTab
		/>
	));

	return (
		<footer className='bg-primary-100 border-t border-t-primary-200'>
			<section className='mx-auto flex gap-2 flex-col px-2 py-4 items-center'>
				<div>
					<div className='flex flex-row justify-center items-center'>
						<DisplayText value='Aen' size='XXL' className='text-center text-secondary-500 inline-block' />
						<DisplayText value='Jojo' size='XXL' className='text-center text-primary-500 inline-block' />
					</div>
					<DisplayText value='aenjojo © 2022' size='S' className='text-center' />
				</div>
				<ButtonGroup direction='row'>
					{SocialMediaList}
				</ButtonGroup>
			</section>
		</footer>
	);
};