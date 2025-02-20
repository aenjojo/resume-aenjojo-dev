import clsx from 'clsx';
import { GenericTitlePropsType } from './GenericTitle';

export interface MainTitlePropsType extends GenericTitlePropsType {};

export function MainTitle({ children, withMargin }: MainTitlePropsType) {
	const MainTitleStyle = clsx([
		'text-4xl font-extrabold',
		withMargin && 'mt-2 mb-4'
	]);

	return (
		<h1
			className={MainTitleStyle}
		>
			{children}
		</h1>
	);
};