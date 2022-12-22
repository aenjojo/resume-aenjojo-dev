import clsx from 'clsx';

export interface GenericTitlePropsType {
	children: string,
	withMargin?: boolean,
};

export function GenericTitle({ children, withMargin }: GenericTitlePropsType) {
	const GenericTitleStyle = clsx([
		'text-lg font-semibold',
		withMargin && 'mt-4 mb-2',
	]);

	return (
		<h4
			className={GenericTitleStyle}
		>
			{children}
		</h4>
	);
};