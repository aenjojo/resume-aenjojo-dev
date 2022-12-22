import clsx from 'clsx';
import { GenericTitlePropsType } from './GenericTitle';

export interface SubSectionTitlePropsType extends GenericTitlePropsType {};

export function SubSectionTitle({ children, withMargin }: SubSectionTitlePropsType) {
	const SubSectionTitleStyle = clsx([
		'text-xl font-bold',
		withMargin && 'mt-4 mb-2'
	]);

	return (
		<h3
			className={SubSectionTitleStyle}
		>
			{children}
		</h3>
	);
};