import clsx from 'clsx';
import { BaseLink, type BaseLinkPropsType } from './BaseLink';
import styles from '#styles/Button.module.css';

export interface ButtonLinkPropsType extends BaseLinkPropsType {
	variant: 'fill' | 'outline' | 'empty',
	reverse?: boolean,
};

export function ButtonLink({ href, value, icon, openInNewTab, iconOnly, variant, reverse, className }: ButtonLinkPropsType) {
	const isExternalLink = Boolean(href) && !href.toString().startsWith('/') && !href.toString().startsWith('#');
	const ButtonLinkStyle = clsx([
		styles.button,
		styles[variant],
		iconOnly
			? 'px-2' : !icon
			? 'px-4' : reverse
			? 'pl-4 pr-3' : 'pl-3 pr-4',
		reverse ? 'flex-row-reverse' : 'flex-row',
		className,
	]);

	return (
		<BaseLink
			href={href}
			value={value}
			icon={icon}
			openInNewTab={openInNewTab ?? isExternalLink}
			iconOnly={iconOnly}
			className={ButtonLinkStyle}
			isExternalLink={isExternalLink}
		/>
	);
}