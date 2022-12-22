import clsx from 'clsx';
import { GenericTitlePropsType } from './GenericTitle';

export interface SectionTitlePropsType extends GenericTitlePropsType {};

export function SectionTitle({ children, withMargin }: SectionTitlePropsType) {
	const SectionTitleStyle = clsx([
		'text-2xl font-extrabold',
		withMargin && 'mt-4 mb-4'
	]);

	return (
		<h2
			className={SectionTitleStyle}
		>
			{children}
		</h2>
	);
};