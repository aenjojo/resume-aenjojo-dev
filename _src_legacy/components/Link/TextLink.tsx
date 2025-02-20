import clsx from 'clsx';
import { BaseLink, type BaseLinkPropsType } from './BaseLink';
import styles from '#styles/Link.module.css';

export interface TextLinkPropsType extends BaseLinkPropsType {};

export function TextLink({ href, value, openInNewTab, className }: TextLinkPropsType) {
	const isExternalLink = Boolean(href) && !href.toString().startsWith('/') && !href.toString().startsWith('#');
	const TextLinkStyle = clsx([
		styles.base,
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