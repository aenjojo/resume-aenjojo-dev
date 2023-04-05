import type { ReactNode } from 'react';

export interface CardPropsType {
	children: ReactNode | ReactNode[],
}

export function CardContainer({ children }: CardPropsType) {
	return (
		<section
			className='col-span-4 bg-base-100 border border-base-300 rounded-lg flex flex-col overflow-hidden'
		>
			{children}
		</section>
	);
}