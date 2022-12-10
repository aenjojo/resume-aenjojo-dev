import clsx from 'clsx';
import { ReactNode } from 'react';

export interface ButtonGroupPropsType {
	children: ReactNode | ReactNode[],
	direction: 'column' | 'row',
}

export function ButtonGroup({ children, direction }: ButtonGroupPropsType) {
	const ButtonGroupStyle = clsx([
		'flex gap-2',
		direction === 'column' ? 'flex-col' : 'flex-row',
	]);

	return (
		<section className={ButtonGroupStyle}>
			{children}
		</section>
	);
}