import type { ReactNode } from 'react';

export interface CardPropsType {
	children: ReactNode | ReactNode[],
}

export function CardContainer({ children }: CardPropsType) {
	return (
		<section
			className='bg-base-100 border border-primary-200 rounded-lg flex flex-col overflow-hidden'
		>
			{children}
		</section>
	);
}