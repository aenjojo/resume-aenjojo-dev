import clsx from 'clsx';
import { BaseLink, type BaseLinkPropsType } from './BaseLink';
import styles from '#styles/Link.module.css';

export interface TextLinkPropsType extends BaseLinkPropsType {};

export function TextLink({ href, value, isNewTab, className }: TextLinkPropsType) {
	const TextLinkStyle = clsx([
		styles.link,
		className,
	]);

	return (
		<BaseLink
			href={href}
			value={value}
			className={TextLinkStyle}
			isNewTab={isNewTab}
		/>
	);
}