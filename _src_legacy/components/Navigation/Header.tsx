import { Button } from '#components/Button';
import { ButtonLink } from '#components/Link';
import { MdOutlineMenu, MdOutlineClose, MdSunny, MdDarkMode } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useDarkMode } from '#hooks/useDarkMode';
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
	const [isDark, toggleDark] = useDarkMode();
	
	useEffect(() => {
		if (window) {
			document.body.style.overflow = isOpen ? 'hidden' : 'auto';
		}
	}, [isOpen]);

	return (
		<header className='bg-primary-50 dark:bg-primary-900 border-b border-b-primary-100 dark:border-b-primary-700 sticky top-0 z-10'>
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
					<p className='sr-only'>Go to home</p>
				</Link>
				<nav className='hidden lg:flex lg:flex-row lg:gap-2 items-center justify-center'>
					<Button
						value={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
						icon={isDark
							? <MdSunny size={24} />
							: <MdDarkMode size={24} />
						}
						iconOnly
						variant='empty'
						onClick={toggleDark}
					/>
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
					'lg:hidden w-full bg-primary-50 dark:bg-primary-900 transition-all duration-300 absolute',
					isOpen ? 'h-screen' : 'h-0 invisible opacity-0'
				])}
			>
				<div className='mx-auto my-2 w-10/12 flex flex-col gap-2'>
					{NavigationList}
					<Button
						value={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
						icon={isDark
							? <MdSunny size={24} />
							: <MdDarkMode size={24} />
						}
						variant='empty'
						onClick={toggleDark}
						className='justify-center'
					/>
				</div>
			</nav>
		</header>
	);
};