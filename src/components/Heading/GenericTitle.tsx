import type { ReactElement } from 'react';
import clsx from 'clsx';

export interface GenericTitlePropsType {
	children: string | ReactElement | ReactElement[],
};

export default function GenericTitle({ children }: GenericTitlePropsType) {
	const GenericTitleStyle = clsx([
		'text-lg font-medium',
		'mx-2 my-1 p-1',
		'text-slate-900',
	]);

	return (
		<h4
			className={GenericTitleStyle}
		>
			{children}
		</h4>
	);
};