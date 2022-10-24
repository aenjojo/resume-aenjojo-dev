import clsx from 'clsx';
import BaseLink, { type BaseLinkPropsType } from './BaseLink';
import styles from '#styles/Link.module.css';

export interface TextLinkPropsType extends BaseLinkPropsType {};

export default function TextLink({ href, value, iconLeft, iconRight, isNewTab, className }: TextLinkPropsType) {
	const TextLinkStyle = clsx([
		styles.link,
		className,
	]);

	return (
		<BaseLink
			href={href}
			value={value}
			className={TextLinkStyle}
			iconLeft={iconLeft}
			iconRight={iconRight}
			isNewTab={isNewTab}
		/>
	);
}