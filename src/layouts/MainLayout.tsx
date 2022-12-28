import type { ReactNode } from 'react';
import { Header, Footer } from '#components/Navigation';

interface MainLayoutType {
	children: ReactNode | ReactNode[],
}

export default function MainLayout({ children }: MainLayoutType) {
	return (
		<>
			<Header />
			<main className='container mx-auto p-4'>
				{children}
			</main>
			<Footer />
		</>
	);
};