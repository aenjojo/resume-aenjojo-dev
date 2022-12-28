import clsx from 'clsx';
import { GenericTitlePropsType } from './GenericTitle';
import { TextLink } from '#components/Link';

export interface SubSectionTitlePropsType extends GenericTitlePropsType {};

export function SubSectionTitle({ children, withId, withMargin }: SubSectionTitlePropsType) {
	const SubSectionTitleStyle = clsx([
		'text-xl font-bold',
		withMargin && 'mt-4 mb-2'
	]);

	const id = withId ? encodeURIComponent(children.toLowerCase().replaceAll(/ +/g, '-')) : '';

	return (
		<h3
			className={SubSectionTitleStyle}
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
		</h3>
	);
};