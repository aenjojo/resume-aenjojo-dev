import { Button } from '#components/Button';
import { ButtonLink } from '#components/Link';
import { DisplayText } from '#components/Text';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const NavigationList = [
		'Resume',
		'Projects',
		'Blog'
	].map(element => (
		<ButtonLink
			key={element}
			href={`/${element.toLowerCase()}`}
			value={element}
			variant='empty'
			color='primary'
			className='justify-center'
		/>
	))

	return (
		<header className='bg-gradient-to-r from-primary-100 to-secondary-100 border-b border-b-primary-200'>
			<section className='container mx-auto flex flex-row justify-between px-2 py-1'>
				<Link href='/' className='flex flex-row justify-center items-center'>
					<div className='relative w-6 h-8 mr-2'>
						<Image alt='' src='/AenJojo - Transparent.png' fill={true} className='object-contain' sizes='25vw' />
					</div>
					<DisplayText value='Aen' size='XXL' className='text-center text-secondary-500 inline-block' />
					<DisplayText value='Jojo' size='XXL' className='text-center text-primary-500 inline-block' />
				</Link>
				<nav className='hidden lg:flex lg:flex-row'>
					{NavigationList}
				</nav>
				<section className='flex lg:hidden'>
					<Button
						value='Menu'
						icon={isOpen
							? <MdOutlineClose size={24} />
							: <MdOutlineMenu size={24} />
						}
						iconOnly
						variant='fill'
						color={isOpen ? 'secondary' : 'primary'}
						onclick={() => setIsOpen(!isOpen)}
					/>
				</section>
			</section>
			<nav
				className={clsx([
					'flex flex-col lg:hidden w-full transition-all duration-300',
					isOpen ? 'h-auto' : 'h-0 hidden'
				])}
			>
				{NavigationList}
			</nav>
		</header>
	);
};