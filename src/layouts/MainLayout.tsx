import type { ReactNode } from 'react';
import FooterLayout from './FooterLayout';
import HeaderLayout from './HeaderLayout';

interface MainLayoutType {
	children: ReactNode | ReactNode[],
}

export default function MainLayout({ children }: MainLayoutType) {
	return (
		<>
			<HeaderLayout />
			<main className='container mx-auto my-4 p-4'>
				{children}
			</main>
			<FooterLayout />
		</>
	);
};