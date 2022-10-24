import clsx from 'clsx';
import { GenericTitlePropsType } from './GenericTitle';

export interface SectionTitlePropsType extends GenericTitlePropsType {};

export default function SectionTitle({ children }: SectionTitlePropsType) {
	const SectionTitleStyle = clsx([
		'text-2xl font-bold',
		'mx-2 my-1 p-1',
		'text-slate-900',
	]);

	return (
		<h2
			className={SectionTitleStyle}
		>
			{children}
		</h2>
	);
};