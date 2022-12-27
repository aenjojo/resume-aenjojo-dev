import clsx from 'clsx';
import { TextLink } from '#components/Link';

export interface GenericTitlePropsType {
	children: string,
	withId?: boolean,
	withMargin?: boolean,
};

export function GenericTitle({ children, withId, withMargin }: GenericTitlePropsType) {
	const GenericTitleStyle = clsx([
		'text-lg font-semibold',
		withMargin && 'mt-4 mb-2',
	]);

	const id = withId ? encodeURIComponent(children.toLowerCase().replaceAll(/ +/g, '-')) : '';

	return (
		<h4
			className={GenericTitleStyle}
			id={id}
		>
			{children} {' '}
			{withId && (
				<TextLink
					href={`#${id}`}
					value='#'
					className='no-underline'
				/>
			)}
		</h4>
	);
};