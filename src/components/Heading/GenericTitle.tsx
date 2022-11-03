import type { ReactNode } from 'react';
import clsx from 'clsx';

export interface GenericTitlePropsType {
	children: ReactNode | ReactNode[],
};

export default function GenericTitle({ children }: GenericTitlePropsType) {
	const GenericTitleStyle = clsx([
		'text-lg font-medium',
		'mx-2 my-1 p-1',
		'text-base-900',
	]);

	return (
		<h4
			className={GenericTitleStyle}
		>
			{children}
		</h4>
	);
};