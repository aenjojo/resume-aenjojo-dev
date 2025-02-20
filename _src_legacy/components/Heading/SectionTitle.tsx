import clsx from 'clsx';
import { GenericTitlePropsType } from './GenericTitle';
import { TextLink } from '#components/Link';

export interface SectionTitlePropsType extends GenericTitlePropsType {};

export function SectionTitle({ children, withId, withMargin }: SectionTitlePropsType) {
	const SectionTitleStyle = clsx([
		'text-2xl font-extrabold scroll-mt-16',
		withMargin && 'mb-4',
		withId && 'group',
	]);

	const id = withId ? encodeURIComponent(children.toLowerCase().replaceAll(/ +/g, '-')) : '';

	return (
		<h2
			className={SectionTitleStyle}
			id={id}
		>
			{children}
			{' '}
			{withId && (
				<TextLink
					href={`#${id}`}
					value='#'
					className='no-underline hidden group-hover:inline-block'
				/>
			)}
		</h2>
	);
};