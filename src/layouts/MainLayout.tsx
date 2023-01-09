import type { ReactNode } from 'react';
import { Header, Footer } from '#components/Navigation';
import clsx from 'clsx';

interface MainLayoutType {
	children: ReactNode | ReactNode[],
	display?: 'grid',
}

export function MainLayout({ children, display }: MainLayoutType) {
	const MainLayoutStyle = clsx([
		'container mx-auto pt-4 pb-10 px-4 lg:px-40',
		display === 'grid' ? 'grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4' : '',
	]);

	return (
		<>
			<Header />
			<main className={MainLayoutStyle}>
				{children}
			</main>
			<Footer />
		</>
	);
};