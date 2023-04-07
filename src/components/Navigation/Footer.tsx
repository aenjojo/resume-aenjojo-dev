import { DisplayText } from '#components/Text';
import { ButtonGroup } from '#components/Button';
import { SocialMediaList } from '#features/SocialMediaList';
import Image from 'next/image';
import Logo from '#public/images/logo/aenjojo-full-color.svg';

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
						value='aenjojo © 2023'
						size='S'
						className='text-center'
					/>
				</div>
				<ButtonGroup direction='row'>
					<SocialMediaList />
				</ButtonGroup>
			</section>
		</footer>
	);
};