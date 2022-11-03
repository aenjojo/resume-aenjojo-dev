import clsx from 'clsx';
import { GenericTitlePropsType } from './GenericTitle';

export interface MainTitlePropsType extends GenericTitlePropsType {};

export default function MainTitle({ children }: MainTitlePropsType) {
	const MainTitleStyle = clsx([
		'text-4xl font-extrabold',
		'mx-2 my-1 p-1',
		'text-base-900'
	]);

	return (
		<h1
			className={MainTitleStyle}
		>
			{children}
		</h1>
	);
};