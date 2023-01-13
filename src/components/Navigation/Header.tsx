import { Button } from '#components/Button';
import { ButtonLink } from '#components/Link';
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
			className='justify-center'
		/>
	))

	return (
		<header className='bg-primary-100 border-b border-b-primary-200 sticky top-0 z-10'>
			<section className='container mx-auto flex flex-row justify-between px-2 py-1'>
				<Link href='/' className='flex flex-row justify-center items-center focus-visible:outline-offset-4 focus-visible:outline-primary-300'>
					<Image alt='' src='/images/logo/AenJojo - Full Colored.svg' width={144} height={32} />
				</Link>
				<nav className='hidden lg:flex lg:flex-row lg:gap-2 items-center justify-center'>
					{NavigationList}
				</nav>
				<section className='flex lg:hidden items-center justify-center'>
					<Button
						value='Menu'
						icon={isOpen
							? <MdOutlineClose size={24} />
							: <MdOutlineMenu size={24} />
						}
						iconOnly
						variant={isOpen ? 'fill' : 'empty'}
						onclick={() => setIsOpen(!isOpen)}
					/>
				</section>
			</section>
			<nav
				className={clsx([
					'flex flex-col gap-2 lg:hidden w-10/12 mx-auto my-2 transition-all duration-300',
					isOpen ? 'h-auto' : 'h-0 hidden'
				])}
			>
				{NavigationList}
			</nav>
		</header>
	);
};