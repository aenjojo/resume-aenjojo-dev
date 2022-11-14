import Button from '#components/Button';
import { ButtonLink } from '#components/Link';
import { MdMenu, MdClose } from 'react-icons/md';
import { useState } from 'react';
import clsx from 'clsx';

interface HeaderLayoutType {
	//
};

export default function HeaderLayout({ }: HeaderLayoutType) {
	const [isOpen, setIsOpen] = useState(false);

	const NavigationList = [
		'Resume',
		'Portfolio',
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
		<>
			<header className='bg-base-100 sticky top-0 z-30'>
				<section className='container mx-auto flex flex-row justify-between px-2 py-1'>
					<div className='flex flex-row flex-nowrap p-2'>
						<span className='text-2xl font-bold text-secondary-500'>Aen</span>
						<span className='text-2xl font-bold text-primary-500'>Jojo</span>
					</div>
					<nav className='hidden lg:flex lg:flex-row'>
						{NavigationList}
					</nav>
					<section className='flex lg:hidden'>
						<Button
							value={isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
							variant='fill'
							color={isOpen ? 'secondary' : 'primary'}
							onclick={() => setIsOpen(!isOpen)}
						/>
					</section>
				</section>
			</header>
			<nav
				className={clsx([
					'flex flex-col w-full z-20 transition-all duration-300 fixed bg-base-100',
					isOpen ? 'top-14' : '-top-full'
				])}
			>
				{NavigationList}
			</nav>
			<section
				onClick={() => setIsOpen(!isOpen)}
				className={clsx([
					'h-screen w-screen transition-all duration-300 bg-opacity-75 fixed top-0 z-10',
					isOpen ? 'visible bg-base-900' : 'invisible bg-transparent'
				])}
			></section>
		</>
	);
};