import { MdChevronRight } from 'react-icons/md';
import { TextLink } from '#components/Link';
import { Fragment } from 'react';

export interface BreadcrumbPropsType {
	paths: {
		href: string,
		text: string,
	}[],
	current: string,
}

export function Breadcrumb({ paths, current }: BreadcrumbPropsType) {
	return (
		<div className='flex flex-row gap-1 items-center'>
			{paths.map(path => (
				<Fragment key={path.href}>
					<TextLink href={path.href} value={path.text} />
					<MdChevronRight size='20' />
				</Fragment>
			))}
			<span>{current}</span>
		</div>
	);
}