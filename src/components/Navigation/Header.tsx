import { Button } from '#components/Button';
import { ButtonLink } from '#components/Link';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '#public/images/logo/aenjojo-full-color.svg';

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
));

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (window) {
			document.body.style.overflow = isOpen ? 'hidden' : 'auto';
		}
	}, [isOpen]);

	return (
		<header className='bg-primary-50 border-b border-b-primary-100 sticky top-0 z-10'>
			<section className='container mx-auto flex flex-row justify-between px-2 py-1'>
				<Link
					href='/'
					className='flex flex-row justify-center items-center focus-visible:outline-offset-4 focus-visible:outline-primary-300'
				>
					<Image
						alt='main logo'
						src={Logo}
						className='w-32'
					/>
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
						onClick={() => setIsOpen(!isOpen)}
					/>
				</section>
			</section>
			<nav
				className={clsx([
					'lg:hidden w-full bg-primary-50 transition-all duration-300 absolute',
					isOpen ? 'h-screen' : 'h-0 invisible opacity-0'
				])}
			>
				<div className='mx-auto my-2 w-10/12 flex flex-col gap-2'>
					{NavigationList}
				</div>
			</nav>
		</header>
	);
};