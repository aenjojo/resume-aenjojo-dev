import type { ReactNode } from 'react';
import { Header, Footer } from '#components/Navigation';
import { SEO, type SEOPropsType } from '#components/Head';
import clsx from 'clsx';
import { TopButton } from '#components/Button';

interface MainLayoutType {
	children: ReactNode | ReactNode[],
	display?: 'grid',
	seo: SEOPropsType,
}

export function MainLayout({ children, display, seo }: MainLayoutType) {
	const MainLayoutStyle = clsx([
		'container mx-auto pt-4 pb-10 px-4 lg:px-20 xl:px-40',
		display === 'grid' ? 'grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4' : '',
	]);

	return (
		<>
			<SEO {...seo} />
			<Header />
			<main className={MainLayoutStyle}>
				{children}
				<TopButton />
			</main>
			<Footer />
		</>
	);
};