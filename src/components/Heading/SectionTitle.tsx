import clsx from 'clsx';
import { GenericTitlePropsType } from './GenericTitle';
import { TextLink } from '#components/Link';

export interface SectionTitlePropsType extends GenericTitlePropsType {};

export function SectionTitle({ children, withId, withMargin }: SectionTitlePropsType) {
	const SectionTitleStyle = clsx([
		'text-2xl font-extrabold',
		withMargin && 'mt-4 mb-4'
	]);

	const id = withId ? encodeURIComponent(children.toLowerCase().replaceAll(/ +/g, '-')) : '';

	return (
		<h2
			className={SectionTitleStyle}
			id={id}
		>
			{withId && (
				<TextLink
					href={`#${id}`}
					value='#'
					className='no-underline'
				/>
			)}
			{' '}
			{children}
		</h2>
	);
};