import clsx from 'clsx';
import { BaseLink, type BaseLinkPropsType } from './BaseLink';

export interface TextLinkPropsType extends BaseLinkPropsType {};

export function TextLink({ href, value, openInNewTab, className }: TextLinkPropsType) {
	const isExternalLink = Boolean(href) && !href.toString().startsWith('/') && !href.toString().startsWith('#');
	const TextLinkStyle = clsx([
		'transition-all duration-200 cursor-pointer font-medium underline decoration-2 underline-offset-4',
        'text-primary-500 hover:text-secondary-500 hover:decoration-primary-500',
        'focus:text-primary-600 active:text-primary-700 focus:outline-2 focus:outline-primary-300',
		openInNewTab || isExternalLink ? 'inline-flex flex-nowrap items-center' : 'inline',
		className,
	]);

	return (
		<BaseLink
			href={href}
			value={value}
			className={TextLinkStyle}
			openInNewTab={openInNewTab ?? isExternalLink}
			isExternalLink={isExternalLink}
		/>
	);
}