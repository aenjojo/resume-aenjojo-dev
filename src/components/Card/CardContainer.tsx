import type { ReactNode } from 'react';

export interface CardPropsType {
	children: ReactNode | ReactNode[],
}

export function CardContainer({ children }: CardPropsType) {
	return (
		<section
			className='col-span-4 bg-base-100 dark:bg-base-900 border border-base-300 dark:border-base-700 rounded-lg flex flex-col overflow-hidden'
		>
			{children}
		</section>
	);
}