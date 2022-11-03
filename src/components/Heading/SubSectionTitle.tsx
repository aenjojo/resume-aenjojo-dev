import clsx from 'clsx';
import { GenericTitlePropsType } from './GenericTitle';

export interface SubSectionTitlePropsType extends GenericTitlePropsType {};

export default function SubSectionTitle({ children }: SubSectionTitlePropsType) {
	const SubSectionTitleStyle = clsx([
		'text-xl font-semibold',
		'mx-2 my-1 p-1',
		'text-base-900',
	]);

	return (
		<h3
			className={SubSectionTitleStyle}
		>
			{children}
		</h3>
	);
};